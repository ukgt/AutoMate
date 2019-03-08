const express = require ("express");

const router = express.Router();

router.get('/main', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    //sequelize.all(model) <-- query the DB to find a record that has a matching email/password
    //callback function for sequelize.all():
    function (err, userData) {
        if ( err )
            console.log(err)
        else {
            res.render("handlebarTemplate", {data: userData})
        }
    }

    res.json({
        message: "api controllers are online"
    });
});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    req.session.email = email;
    req.session.password = password;


    res.json({
        message: "api controllers are online"
    });
});

router.post('/createUser', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;


    res.json({
        message: "api controllers are online"
    });
});

router.get('/car' , (req, res) => {
    db.cars.findAll({}).then(function(dbAutomate){
        res.json(dbAutomate)
    })
})

router.get('/service', (req, res) => {
    res.json({services})
})

router.get('/search', (req, res) => {
    res.json({search})
})
module.exports = router;
