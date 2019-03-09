let connection;

module.exports = mySqlConnection => {
  connection = mySqlConnection;
  return {
    registerUserInDB: registerUserInDB,
    getUserFromCreds: getUserFromCreds,
    doesUserExist: doesUserExist
  };
};

/*
 * attempts to register a user in the DB with the specified details.
 * it provides the results in the specified callback which takes a
 * DataResponseObject as its only parameter
 *
 * @param username
 * @param password
 * @param registrationCallback - takes a DataResponseObject
 */
function registerUserInDB(username, password, cb) {
  const query = `INSERT INTO users (username, user_password) VALUES ('${username}', SHA('${password}'))`;
  connection.query(query, cb);
}

/*
 * Gets the user with the specified username and password.
 * It provides the results in a callback which takes an:
 * an error object which will be set to null if there is no error.
 * and a user object which will be null if there is no user
 *
 * @param username
 * @param password
 * @param callback - takes an error and a user object
 */
function getUserFromCreds(username, password, cb) {
  const query = `SELECT * FROM users WHERE username = '${username}' AND user_password = SHA('${password}')`;
  connection.query(query, data => {
    cb(
      false,
      data.results !== null && data.results.length === 1
        ? data.results[0]
        : null
    );
  });
}

/*
 * Determines whether or not user with the specified userName exists.
 * It provides the results in a callback which takes 2 parameters:
 * an error object which will be set to null if there is no error, and
 * secondly a boolean value which says whether or the user exists.
 * The boolean value is set to true if the user exists else it's set
 * to false or it will be null if the results object is null.
 *
 * @param username
 * @param callback - takes an error and a boolean value indicating
 *                   whether a user exists
 */
function doesUserExist(username, cb) {
  const query = `SELECT * FROM users WHERE username = '${username}'`;
  let sqlCallback = data => {
    //calculate if user exists or assign null if results is null
    const doesUserExist =
      data.results !== null ? (data.results.length > 0 ? true : false) : null;
    //check if there are any users with this username and return the appropriate value
    cb(data.error, doesUserExist);
  };
  connection.query(query, sqlCallback);
}
