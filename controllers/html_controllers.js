var express = require("express");
const router = express.Router();

router.get("/", function(req,res){
     res.render("index", {
          title: "Home",
          
     })
});

router.get("/car", function (req, res) {
     res.render("car", {
          title: "Car Details"
     })
});

router.get("/fuel", function (req, res) {
     res.render("fuel", {
          title: "Fuel Details"
     })
});

router.get("/service", function (req, res) {
     res.render("service", {
          title: "Service Details"
     })
});

router.post("/")



module.exports = router;