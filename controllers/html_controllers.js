var express = require("express");
const router = express.Router();
const fuel = require("../models");

router.post("/fuel", function(req, res) {
  //    module.exports = function (app) {

  fuel.Fuel.create(req.body).then(function(Fuel) {
    res.json(Fuel);
  });

  //    }
});

router.get("/fuel", function(req, res) {
  res.render("fuel", {
    title: "Fuel Details",
    fuel: [
      {
        item: ["Add New Record"]
      }
    ]
  });
});
// where am I and where am I supposed to go to get search information - viewing all fuels entered - going from html_controller.js to fuels.handlebars? this should "get" the logic from FuelsLogic.js???
router.get("/fuels", function(req, res) {
  res.render("fuels", {
    title: "Fuels Details",
    fuels: "gas station"
  });
});

router.get("/service", function(req, res) {
  res.render("service", {
    title: "Service Details",
    service: [
      {
        item: ["Add New Record"],
        items: ["Service Entries"]
      }
    ]
  });
});

router.post("/service", function(req, res) {
  res.render("service", {
    title: "Service Details",
    service: [
      {
        item: ["Add New Record"],
        items: ["Service Entries"]
      }
    ]
  });
  req.body.user_input("Add New Record");
});
router.get("/service", function(req, res) {
  res.render("service", {
    title: "Service Details",
    service: [
      {
        items: ["Service Entry"]
      }
    ]
  });
});

module.exports = router;
