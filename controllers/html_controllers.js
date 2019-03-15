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
  let carID = req.body.CarId;
  if (!carID || carID === 0) {
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

router.get("/car", secureConnection, function(req, res) {
  let carId = req.body.CarId;
  dbs.Car.findOne({ where: { id: carId } })
    .then(function(data) {
      res.render("car", { title: "AutoMate", car: data });
    })
    .catch(function(err) {
      res.status(500).json({ message: err });
    });
});

router.post("/fuel", secureConnection, function(req, res) {
  dbs.Fuel.create(req.body).then(function(Fuel) {
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
    "INSERT INTO serviceitems (ServiceId, ServiceTypeId) VALUES (?)",
    inserts,
    function(error, result) {
      console.log(result);
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

module.exports = router;
