const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {session:false});
const requireLocal = passport.authenticate('local', {session:false});

const AuthController = require('../controller/auth');
const passportService = require('../services/passport');

const router = require('express').Router();

function guarded(req, res, next) {
  res.send("Here's the secret");
}

router.route('/protected')
  .get(requireAuth, guarded);

router.route('/signup')
  .post(AuthController.signup);

router.route('/signin')
  .post([requireLocal, AuthController.signin]);


module.exports = router;
