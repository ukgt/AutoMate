let userLoginModel, accessTokenDBHelper;

module.exports = (theuserLoginModel, theAccessTokenDBHelper) => {

     userLoginModel = theuserLoginModel;
     accessTokenDBHelper = theAccessTokenDBHelper;
     //returns all methods??
     return {
          getClient: getClient,
          grantTypeAllowed: grantTypeAllowed,
          getUser: getUser,
          saveAccessToken: saveAccessToken,
          getAccessToken: getAccessToken
     }
}


function getClient(clientID, clientSecret, cb) {
     const client = {
          clientID,
          clientSecret,
          grants: null,
          redirectUris: null
     }
     cb(false, client);
}

/* This method determines whether or not the client which has to the specified clientID 
 * is permitted to use the specified grantType.
 */
function grantTypeAllowed(clientID, grantType, cb) {
     cb(false, true);
}

/*
 * The method attempts to find a user with the spceified username and password.
 */
function getUser(username, password, cb) {
     userLoginModel.getUserFromCreds(username, password, cb);
}

/*
 * saves the accessToken along with the userID retrieved from the given user
 */
function saveAccessToken(accessToken, clientID, expires, user, callback) {
     console.log("AccessTokenModel", accessToken, user);
     accessTokenDBHelper.saveAccessToken(accessToken, user.user_id, callback);

     //need to add token cookie crap
}


function getAccessToken(bearerToken, cb) {
     //try and get the userID from the db using the bearerToken
     accessTokenDBHelper.getUseIdFromBearerToken(bearerToken)
          .then(userID => {
               createAccessTokenFrom(userID);
          })
          .then(accessToken => {
               cb(null, false, accessToken)
          });
}

function createAccessTokenFrom(userID) {
     return Promise.resolve({
          user: {
               id: userID
          },
          expires: null
     })
}