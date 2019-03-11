//connection js file
const mySql = require("mysql");
let connection = null;

function initConnection() {
  if (process.env.JAWSDB_URL) {
    connection = mySql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mySql.createConnection({
      host: "localhost",
      user: "root",
      password: "Password1",
      database: "oauth2test"
    });
  }
}

function query(queryString, callback) {
  //connect to the db
  initConnection();
  connection.connect();

  //execute the query and collect the results in the callback
  connection.query(queryString, function(error, results) {
    connection.end();

    callback(createDataResponseObject(error, results));
  });
}

function createDataResponseObject(error, results) {
  return {
    error: error,
    results: results === undefined ? null : results === null ? null : results
  };
}

module.exports = {
  query: query
};
