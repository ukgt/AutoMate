var express = require("express");
const router = express.Router();
const fuel = require("../models");
const service = require("../models");

router.get("/", function(req, res) {
  res.render("index", {
    title: "AutoMate"
  });
});

router.post("/fuel", function(req, res) {
  fuel.Fuel.create(req.body).then(function(Fuel) {
    res.json(Fuel);
  });
});

router.get("/fuels/:carID?", function(req, res) {
  fuel.Fuel.findAll({}).then(function(data) {
    const allFuels = {
      fuels: data
    };
    res.render("fuels", allFuels);
  });
});

router.get("/fuel/:carID/:fuelID", function(req, res) {
  fuel.Fuel.findOne({
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
  service.Service.create(req.body).then(function(Service) {
    res.json(Service);
  });
});

router.get("/services/:carID/:serviceID", function(req, res) {
  service.Service.findAll({}).then(function(data) {
    const allServices = {
      services: data
    };
    res.render("services", allServices);
  });
});

router.get("/service/:carID/:serviceID", function(req, res) {
  service.Service.findOne({
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
