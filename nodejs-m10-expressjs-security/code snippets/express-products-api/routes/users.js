let express = require('express');
let router = express.Router();

let passport = require('passport');
let jwt = require('jsonwebtoken');
let expressJwt = require('express-jwt');
let compose = require('composable-middleware');
let LocalStrategy = require('passport-local').Strategy;
let validateJwt = expressJwt({
  secret: 'rarWao7epAKqGXcJVDEq'
});

//Step 1 - configure user with local strategy
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function (email, password, done) {
  return localAuthenticate(email, password, done);
}));


/*
 {
  "email":"zeo@zeo.com",
  "password":"zeo123"
 }
 */
let users = [
  {
    "email": "zeo@zeo.com",
    "password": "zeo123"
  }
];

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function isAuthenticated() {
  return compose()
  // Validate jwt
    .use(function (req, res, next) {
      console.log('Validating JWT');
      // allow access_token to be passed through query parameter as well
      if (req.query && req.query.hasOwnProperty('access_token')) {
        req.headers.authorization = 'Bearer ' + req.query.access_token;
      }
      validateJwt(req, res, next);
    })
    // Attach user to request
    .use(function (req, res, next) {
      console.log('finding user');
      console.log('users in mem', users);
      console.log('user in req', req.user);
      let user = users.find(user => user.email === req.user.email);
      console.log('user from find', user);
      if (!user) {
        return res.status(401).end();
      }
      req.user = user;
      next();
    });

}

/**
 * Returns a jwt token signed by the app secret
 */
function signToken(user) {
  return jwt.sign({email: user.email}, 'rarWao7epAKqGXcJVDEq');
}


function localAuthenticate(email, password, done) {
  let user = users.find(user => user.email === email);
  if (!user) {
    return done(null, false, {
      message: 'Email not registered.'
    });
  }
  if (user.password === password) {
    return done(null, user);
  }
  else {
    return done(null, false, {
      message: 'Incorrect password.'
    });
  }
}


router.post('/register', function (req, res, next) { // APPLICATION MIDDLEWARE
    users.push(req.body);
    res.json(req.body);
  }
);

router.post('/login', function (req, res, next) { // APPLICATION MIDDLEWARE
    //step - 2 - Use passport.authenticate to authenticate the users
    passport.authenticate('local', function (err, user, info) {
      let error = err || info;
      if (error) {
        return res.status(401).json(error);
      }
      if (!user) {
        return res.status(404).json({message: 'Something went wrong, please try again.'});
      }

      let token = signToken(user);
      res.json({token: token});
    })(req, res, next)
  }
);

module.exports = router;
module.exports.isAuthenticated = isAuthenticated;
