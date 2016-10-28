//Uses Express defines router
var express = require('express');
var router = express.Router();
var Tag = require('../db/models/tags.model');
var TagController = require('../controller/tags');


// Add new tags if not already exists
router.route('/')
  .post(TagController.createTag)
  .get(TagController.fetchTags);

// SeedDB
function seedDB() {

  var query = require('../db/seedDB'),
    update = { expire: new Date() },
    options = { upsert: true, new: true, setDefaultsOnInsert: true };

  query.map(function(tag) {
    // this function will check if tag exist
    // and create if not.
    Tag.findOneAndUpdate(tag, update, options, function(error, result) {
      if (error) return;
    });
  })
}

seedDB();

module.exports = router;
