var express = require("express");
const router = express.Router();
const fuel = require("../models");

router.post("/fuel", function (req, res) {
     //    module.exports = function (app) {

     fuel.Fuel.create(req.body).then(function (Fuel) {
          res.json(Fuel);
     });

     //    }
});

router.get("/fuel", function (req, res) {
     res.render("fuel", {
          title: "Fuel Details",
          fuel: [{
               item: ["Add New Record"],

          }]
     })
});

router.get("/service", function (req, res) {
     res.render("service", {
          title: "Service Details",
          service: [{
               item: ["Add New Record"],
               items: ["Service Entries"]
          }]
     })
});

router.post("/service", function (req, res) {
     res.render("service", {
          title: "Service Details",
          service: [{
               item: ["Add New Record"],
               items: ["Service Entries"]
          }]
     })
     req.body.user_input("Add New Record")
});
router.get("/service", function (req, res) {
     res.render("service", {
          title: "Service Details",
          service: [{

               items: ["Service Entry"]
          }]
     })
});





module.exports = router;