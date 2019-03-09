var express = require("express");
// const router = express.Router();
const db = require("./models");
// const exphbs = require("express-handlebars");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/html_controllers.js");
var apiRouters = require("./controllers/api_controllers.js");

app.use("/", routes);
// app.use("/api", apiRouters);

// Start our server so that it can begin listening to client requests.
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
});
