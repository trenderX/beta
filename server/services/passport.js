require('dotenv').load();
const passport = require('passport');
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const JwtStrategy  = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');

const User = require('../db/models/user');

var localOptions = {
  usernameField: 'email'
}

var localStrategy = new LocalStrategy(localOptions, function(email, password, done){
  User.findOne({email: email}, function(err, user){
    if (err) { return done(err) }
    if (!user) { return done(null, false) }
    user.comparePassword( password, function(err, isMatch){
      if (err) { return done(err) }
      if (!isMatch) { return done (null, false) }
      return done(null, user);
    })
  });
});

var jwtOptions = {
  secretOrKey: process.env.SESSION_SECRET,
  jwtFromRequest: ExtractJwt.fromHeader('authorization')
}

var jwtStrategy = new JwtStrategy(jwtOptions, function(payload, done){
  User.findById(payload.sub, function(err, user){
    if (err) { return  done(err, false) }
    if (user) { done(null, user) }
    else { done(null, false) }
  });
});

passport.use(jwtStrategy);
passport.use(localStrategy);