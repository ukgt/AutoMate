var express = require("express");

const connection = require("./auth/authConfig");
const accessTokenDBHelper = require("./auth/accessTokenDBHelper")(connection);
const userLoginModel = require("./auth/userLoginModel")(connection);
const oAuthModel = require("./auth/authTokenModel")(
  userLoginModel,
  accessTokenDBHelper
);
const oAuth2Server = require("node-oauth2-server");
const cookieParser = require("cookie-parser");
// const router = express.Router();
const db = require("./models");
// const exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();
//defines Oath2 model
app.oauth = oAuth2Server({
  model: oAuthModel,
  grants: ["password"],
  debug: true
});

app.use(cookieParser());

//Defines the Oauth routers and paths
const authRoutesMethods = require("./auth/authRoutesMethods")(userLoginModel);
const authRouter = require("./auth/aurhRouter")(
  express.Router(),
  app,
  authRoutesMethods
);
//const bodyParser = require("body-parser");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// defines path to auth routers
app.use(app.oauth.errorHandler());
app.use("/auth", authRouter);
//const router = require("./controllers/html_controllers")(app, authRoutesMethods);

// Set Handlebars.
var exphbs = require("express-handlebars");
var Handlebars = require("handlebars");
var HandlebarsIntl = require("handlebars-intl");
HandlebarsIntl.registerWith(Handlebars);

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/html_controllers.js");
// var apiRouters = require("./controllers/api_controllers.js");

app.use("/", routes);

// app.use("/api", apiRouters);
// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
  });
});
module.exports = app;
