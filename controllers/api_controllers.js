const express = require("express");

const router = express.Router();
const jwt = require("jsonwebtoken");

let secureConnection = (req, res, next) => {
  let token, decoded;
  if (req.cookies.token) {
    token = req.cookies.token;
    decoded = jwt.verify(token, "someTypeOfPW");
    req.body.userId = decoded.id;
    req.body.curCar = decoded.curCar;
  }

  if (decoded) {
    next();
  } else {
    res.redirect("/");
  }
};

/*
//sequelize.all(model) <-- query the DB to find a record that has a matching email/password
    //callback function for sequelize.all():
    function (err, userData) {
        if ( err )
            console.log(err)
        else {
            res.render("handlebarTemplate", {data: userData})
        }
    }
*/

router.get("/cars", secureConnection, (req, res) => {
  db.cars.findAll({}).then(function(dbAutomate) {
    res.json({ dbAutomate });
  });
});

router.get("/car/:id", (req, res) => {
  let id = process.params.id;
  db.cars.findOne({ id }).then(function(data) {
    res.json({
      message: "api controllers are online"
    });
  });
});

router.get("/service/:id", (req, res) => {
  db.service.findOne({id: req.params.id}).then(function(dbAutomate) {
    res.json({ dbAutomate });
  });
});

router.get("/services/:nameOfCar/:carId", (req, res) => {
  db.service.findAll({CarId: req.params.carId, }).then(function(dbAutomate) {
    res.json({ dbAutomate });
  });
});

router.get("/fuel/:id", (req, res) => {
  db.service.findAll({}).then(function(dbAutomate) {
    res.json({ fuel });
  });
});

router.get("/fuels", (req, res) => {
  db.cars.findAll({}).then(function(dbAutomate) {
    res.json({ fuels });
  });
});

router.get("/make/:id", (req, res) => {
  db.service.findAll({}).then(function(dbAutomate) {
    res.json({ make });
  });
});

router.get("/makes", (req, res) => {
  db.cars.findAll({}).then(function(dbAutomate) {
    res.json({ makes });
  });
});

router.get("/search", (req, res) => {
  res.json({ search });
});
module.exports = router;
