let connection;
module.exports = mySqlConnection => {
     connection = mySqlConnection;

     return {
          saveAccessToken: saveAccessToken,
          getUserFromBearerToken: getUserFromBearerToken
     }
}

function saveAccessToken(accessToken, userID, cb){
     console.log("AccessTokenDBHelper",accessToken, userID);
     const query = `INSERT INTO access_tokens (access_token, user_id) VALUES ("${accessToken}", ${userID}) ON DUPLICATE KEY UPDATE access_token = "${accessToken}";`

     connection.query(query, function(data){
          cb(data.error);
     })
}


function getUserFromBearerToken(bearerToken, cb){
     const query = `SELECT * FROM access_tokens WHRERE access_token = '${bearerToken}';`;
     connection.query(query, function(data){
          const userID = data.results != null && data.results.length == 1 ? data.results[0].user_id : null;
          cb(userID);
     })
}