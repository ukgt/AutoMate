var express = require("express");
const router = express.Router();
const models = require("../models");
const connection = require("../config/connection.js");

router.get("/", function(req, res) {
  res.render("index", {
    title: "AutoMate"
  });
});

router.post("/fuel", function(req, res) {
  models.Fuel.create(req.body).then(function(Fuel) {
    res.json(Fuel);
  });
});

router.get("/fuels/:carID?", function(req, res) {
  models.Fuel.findAll({}).then(function(data) {
    const allFuels = {
      fuels: data
    };
    res.render("fuels", allFuels);
  });
});

router.get("/fuel/:carID/:fuelID", function(req, res) {
  if (req.params.fuelID === "0") {
    // models.Fuel.findOne({
    //   where: {
    //     id: req.params.fuelID
    //   }
    res.render("fuel");
  } else {
    models.Fuel.findOne({
      where: {
        id: req.params.fuelID
      }
    }).then(function(data) {
      const oneFuel = {
        newDate: data.purchaseDate.toLocaleDateString(),
        fuels: data
      };
      res.render("fuel", oneFuel);
    });
  }
});

router.post("/service", function(req, res) {
  models.Service.create(req.body).then(function(saveResult) {
    res.json(saveResult);
  });
});

router.post("/serviceEntered", function(req, res) {
  let serviceId = req.body.serviceId;
  let serviceDone = req.body.serviceDone;
  let inserts = [];

  for (let i = 0; i < serviceDone.length; i++) {
    inserts.push([parseInt(serviceId), parseInt(serviceDone[i])]);
  }
  connection.query(
    "INSERT INTO serviceitems (serviceId, serviceTypeId) VALUES (?)",
    inserts,
    function(error, result) {
      console.log(result);
    }
  );
});
router.get("/services/:carID/:serviceID", function(req, res) {
  models.Service.findAll({}).then(function(data) {
    const allServices = {
      services: data
    };
    res.render("services", allServices);
  });
});

router.get("/service/:carID/:serviceID", function(req, res) {
  models.Service.findOne({
    where: {
      id: req.params.serviceID
    }
  }).then(function(data) {
    let theService = data;

    models.ServiceType.findAll().then(function(data) {
      const oneService = {
        servicetype: data,
        service: theService
      };

      res.render("service", oneService);
    });
  });
});

module.exports = router;
