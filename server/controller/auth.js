// let us use .env file variables
require('dotenv').load();

const User = require('../db/models/user');
const JWT = require('jwt-simple');

//create and use sessionId
function tokenForUser(user) {
  var timeStamp = new Date().getTime();
  return JWT.encode({
    sub: user.id,
    iat: timeStamp,
  }, process.env.SESSION_SECRET)
}

exports.signin = function(req, res, next){
  var user = req.user;
  res.send({token: tokenForUser(user), user_id: user._id });
}

exports.signup = function(req, res, next) {
  let email = req.body.email;
  let password = req.body.password;

  console.log('body:', req.body);
  console.log('email:', email);
  console.log('password:', password);

  if (!email || !password) {

    return res.status(422).json({
      error: " You must provide an email and password",
    });
  }

  User.findOne({email: email}, function(err, existingUser) {
    if (err) { return next(err) }
    if (existingUser) {return res.status(422).json({error: "Email taken"})}
    var user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      if (err) { return next(err) }
      res.json({user_id: user._id, token: tokenForUser(user)});
    });
  });
}
