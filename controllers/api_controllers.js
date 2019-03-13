const express = require("express");

const router = express.Router();

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

router.get("/cars", (req, res) => {
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
  db.service.findAll({}).then(function(dbAutomate) {
    res.json({ services });
  });
});

router.get("/services", (req, res) => {
  db.cars.findAll({}).then(function(dbAutomate) {
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
