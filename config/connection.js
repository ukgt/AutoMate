const mySQL = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "khoimj15",
    database: "automate"
  });
}

//make connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
