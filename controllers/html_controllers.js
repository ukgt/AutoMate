var express = require("express");
const router = express.Router();
const dbs = require("../models");
const connection = require("../config/connection.js");

const jwt = require("jsonwebtoken");

let secureConnection = (req, res, next) => {
  let token, decoded;
  if (req.cookies.token) {
    token = req.cookies.token;
    decoded = jwt.verify(token, "someTypeOfPW");
    req.body.userId = decoded.id;
    req.body.CarId = decoded.curCar;
  }

  if (decoded) {
    next();
  } else {
    res.redirect("/");
  }
};

router.get("/", function(req, res) {
  res.render("index", {
    title: "AutoMate"
  });
});

router.get("/editCar", secureConnection, function(req, res) {
  let carId =
    req.params.CarId === undefined ? req.body.CarId : req.params.CarId;
  if (!carId || carId === 0) {
    dbs.Manufacturer.findAll({
      order: [["manufacturerName", "ASC"]]
    }).then(function(data) {
      res.render("editCar", {
        title: "Add/Edit Car",
        manufacturer: data
      });
    });
  } else {
    res.render("editCar", {
      title: "Add/Edit Car"
    });
  }
});

router.get("/car/:CarId?", secureConnection, function(req, res) {
  let carId =
    req.params.CarId === undefined ? req.body.CarId : req.params.CarId;
  let newToken =
    req.params.CarId !== undefined && req.body.CarId !== req.params.CarId;
  dbs.Car.findOne({
    where: { id: carId },
    include: [{ model: dbs.Make }, { model: dbs.Manufacturer }]
  })
    .then(function(data) {
      if (newToken) {
        decoded = jwt.verify(req.cookies.token, "someTypeOfPW");
        token = jwt.sign(
          {
            id: decoded.id,
            email: decoded.email,
            curCar: data.id
          },
          "someTypeOfPW"
        );
        dbs.Owner.update(
          { curCar: data.id },
          {
            where: {
              id: decoded.id
            }
          }
        )
          .then(function() {
            return res.cookie("token", token).render("car", {
              title: "AutoMate",
              car: data,
              manName: data.Manufacturer.manufacturerName,
              makeName: data.Make.makeName
            });
          })
          .catch(function() {
            return res
              .status(500)
              .json({ message: "Unable to switch out cars" });
          });
      } else {
        return res.render("car", {
          title: "AutoMate",
          car: data,
          manName: data.Manufacturer.manufacturerName,
          makeName: data.Make.makeName
        });
      }
    })
    .catch(function(err) {
      res.status(500).json({ message: err });
    });
});
router.get("/cars", secureConnection, function(req, res) {
  dbs.Car.findAll({
    where: { OwnerId: req.body.userId },
    include: [{ model: dbs.Make }, { model: dbs.Manufacturer }]
  })
    .then(function(data) {
      res.render("cars", { title: "all cars", car: data });
    })
    .catch(function() {
      res.status(500).json({ message: "Could not load cars" });
    });
});

router.post("/fuel", secureConnection, function(req, res) {
  dbs.Fuel.create(req.body).then(function() {
    res.render("fuels", {
      title: "Fill Ups"
    });
  });
});

router.get("/fuels", secureConnection, function(req, res) {
  let carId = req.body.CarId;
  dbs.Fuel.findAll({
    where: {
      CarId: carId
    },
    // Add order conditions here....
    order: [["purchaseDate", "DESC"]]
  }).then(function(data) {
    const allFuels = {
      fuels: data
    };
    res.render("fuels", allFuels);
  });
});

router.get("/fuel/:fuelID", secureConnection, function(req, res) {
  if (req.params.fuelID === "0") {
    res.render("fuel");
  } else {
    dbs.Fuel.findOne({
      where: {
        id: req.params.fuelID
      }
    }).then(function(data) {
      const oneFuel = {
        newDate: data.purchaseDate.toLocaleDateString(),
        fuels: data
      };
      // res.render("fuels", oneFuel);
      res.render("fuel", oneFuel);
    });
  }
});

router.post("/service", secureConnection, function(req, res) {
  dbs.Service.create(req.body).then(function(saveResult) {
    res.json(saveResult);
  });
});

router.post("/serviceEntered", secureConnection, function(req, res) {
  let serviceId = req.body.serviceId;
  let serviceDone = req.body.serviceDone;
  let inserts = [];

  for (let i = 0; i < serviceDone.length; i++) {
    inserts.push([parseInt(serviceId), parseInt(serviceDone[i])]);
  }
  connection.query(
    "INSERT INTO ServiceItems (ServiceId, ServiceTypeId) VALUES (?)",
    inserts,
    function(error, result) {
      res.json(result);
    }
  );
});
router.get("/services", secureConnection, function(req, res) {
  dbs.Service.findAll({}).then(function(data) {
    const allServices = {
      services: data
    };
    res.render("services", allServices);
  });
});

router.get("/service/:serviceID", secureConnection, function(req, res) {
  if (req.params.serviceID === "0") {
    dbs.ServiceType.findAll().then(function(data) {
      const oneService = {
        title: "Add a Service",
        servicetype: data
      };

      res.render("service", oneService);
    });
  } else {
    dbs.Service.findOne({
      where: {
        id: req.params.serviceID
      }
    }).then(function(data) {
      let theService = data;

      dbs.ServiceType.findAll().then(function(data) {
        const oneService = {
          servicetype: data,
          service: theService
        };

        res.render("service", oneService);
      });
    });
  }
});

router.get("/search", secureConnection, function(req, res) {
  dbs.Fuel.findAll({
    where: {
      carId: 1
    }
  }).then(function(data) {
    const allSearch = {
      fuels: data
    };
    res.render("search", allSearch);
  });
});

router.get("/api/makes/:manId", (req, res) => {
  dbs.Make.findAll({ where: { ManufacturerId: req.params.manId } })
    .then(function(makes) {
      return res.json(makes);
    })
    .catch(function() {
      return res.status(500).json({ message: "no makes found" });
    });
});

router.post("/api/addNewCar", secureConnection, function(req, res) {
  let carobj;
  req.body.OwnerId = req.body.userId;
  dbs.Car.create(req.body)
    .then(function(data) {
      carobj = data;
      dbs.Owner.update(
        { curCar: carobj.id },
        { where: { id: req.body.userId } }
      ).then(function() {
        let token = jwt.sign(
          {
            id: req.body.userId,
            email: req.body.userId,
            curCar: carobj.id
          },
          "someTypeOfPW"
        );
        return res
          .cookie("token", token)
          .status(201)
          .json(carobj);
      });
    })
    .catch(function(err) {
      res.status(500).json({ message: "error" + err });
    });
});
module.exports = router;
