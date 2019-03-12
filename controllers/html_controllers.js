var express = require("express");
const router = express.Router();
const dbs = require("../models");
const jwt = require("jsonwebtoken");

router.get("/", function(req, res) {
  res.render("index", {
    title: "AutoMate"
  });
});

router.get("/editCar/:carID?", function(req, res) {
  let carID = req.params.carID;
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

router.get("/car/:carid?", function(req, res) {
  let carId = 4;
  dbs.Car.findOne({ where: { id: carId } })
    .then(function(data) {
      res.render("car", { title: "AutoMate", car: data });
    })
    .catch(function(err) {
      res.status(500).json({ message: err });
    });
});

router.post("/fuel", function(req, res) {
  dbs.Fuel.create(req.body).then(function(Fuel) {
    res.json(Fuel);
  });
});

router.get("/fuels/:carID?", function(req, res) {
  dbs.Fuel.findAll({}).then(function(data) {
    const allFuels = {
      fuels: data
    };
    res.render("fuels", allFuels);
  });
});

router.get("/fuel/:carID/:fuelID", function(req, res) {
  dbs.Fuel.findOne({
    where: {
      id: req.params.fuelID
    }
  }).then(function(data) {
    // let newDate = data.purchaseDate.getMonth() +
    //   1 +
    //   "/" +
    //   data.purchaseDate.getDate() +
    //   "/" +
    //   data.purchaseDate.getFullYear();
    // data.purchaseDate = newDate;
    const oneFuel = {
      newDate: data.purchaseDate.toLocaleDateString(),

      fuels: data
    };
    res.render("fuel", oneFuel);
  });
});

router.post("/service", function(req, res) {
  dbs.Service.create(req.body).then(function(Service) {
    res.json(Service);
  });
});

router.get("/services/:carID/:serviceID", function(req, res) {
  dbs.Service.findAll({}).then(function(data) {
    const allServices = {
      services: data
    };
    res.render("services", allServices);
  });
});

router.get("/service/:carID/:serviceID", function(req, res) {
  dbs.Service.findOne({
    where: {
      id: req.params.serviceID
    }
  }).then(function(data) {
    const oneService = {
      services: data
    };
    res.render("service", oneService);
  });
});

module.exports = router;
