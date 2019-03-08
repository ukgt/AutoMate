
module.exports = (router, app, authRoutesMethods) => {
     //registering new users
     router.post('/registerUser', authRoutesMethods.registerUser)
     
     //allow existing user to login
     router.post("/login", app.oauth.grant(), authRoutesMethods.login);

     return router;
 }