const mySQL = require("mysql");
let connection;

if (process.env.JAWSDB_URL) {
  connection = mySQL.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mySQL.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
<<<<<<< HEAD
    password: "khoimj15",
=======
    password: "Jt5202464",
>>>>>>> 67c79263b9486edd587e8b26a84b4c68664b467e
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
