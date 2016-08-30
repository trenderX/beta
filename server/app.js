// let us use .env file variables 
require('dotenv').load();
//nodejs framework & sessions
var express = require('express');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var path = require('path');
var webpack = require('webpack');

//generate unique ids
var uuid = require('node-uuid');
//display messages in dev mode
var morgan = require('morgan');

//parse body request, cookies
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// add db config file
var db = require('./db/db.js');
//defining the main router of the app
var router = require('./routes/mainRouter.js');

// We're in development or production mode;
// create and run a real server.
var app = express();
 // Use morgan to log requests to our express server to the console
app.use(morgan('dev'));
// Parse incoming request bodies as JSON
app.use(bodyParser.json());

// Parse incoming cookies
app.use(cookieParser());
//create and use sessionId
app.use(session({
  name: 'trenderX',
  secret: process.env.SESSION_SECRET,
  store: new MongoStore({ url: process.env.MONGOLAB_URI || 'mongodb://localhost/trenderX'}),
  resave: false, // Whether or not to save the session back to the store if no modification happened
  rolling: true, // Resets expiry date after each request
  saveUninitialized: false, // Save new sessions that havent been modified
  genid: function() { // Each session id will be based on uuid v4
    return uuid.v4();
  }
}));

app.use('/api', router);

if(process.env.NODE_ENV !== 'production'){
  var config = require('../webpack.config.dev');
  var compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });
}else{
  var distFolder = path.resolve(__dirname, '../dist/');
  app.use(express.static(distFolder));
  app.get('*', function response(req, res) {
    res.sendFile(distFolder + 'index.html');
  });  
} 

// Start the server!
var port = process.env.PORT || 3000;
app.listen(port);
console.log("🌐 - Listening at port: ", port);


