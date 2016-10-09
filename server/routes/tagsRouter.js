//Uses Express defines router
var express = require('express');
var router = express.Router();
//db models
var Tag = require('../db/models/tags.model')
var TagService = require('../http-client/tags.service')


function seedDB() {
  // seed data
  var query = require('../db/seedDB');
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

// Add new tags if not already exists
router.post('/', function(req, res) {

  var newTag = req.body;

  Tag.findOne({ text: newTag.text })
    .exec()
    .then(function(tag) {
      // if tag exist pass down
      if (tag) {
        return tag
      } else {
        return null
      }
    })
    .then(function(tag) {
      // if tag exist pass down
      if (tag) {
        return tag
      } else {
        //create a new tag
        var addTag = Tag({
          text: newTag.text,
          context: 'NEW tag context!!',
          count: 1
        });
        addTag.save(function(err) {
          if (err) {
            res.status(401).json({ error: true, message: err, data: err });
          } else {
            res.status(200).json({ error: false, message: 'Tag Created', data: tag });
          }
        })
      }
    })
    .then(function(tag) {
      if (tag) {
        res.status(201).json({ error: false, message: 'success', data: tag });
      } else {
        throw { error: true, message: 'err setting/getting tag' }
      }
    })
    .catch(function(err) {
      res.status(401).json({ error: true, data: err.message })
    })
})

// Get all tags
router.get('/', function(req, res) {
  // Seeding for testing purposes.

  Tag.find({}, function(err, tag) {
      if (err) {
        res.status(401).json({ error: true, message: err, data: err })
      }
      console.log('tagsFromDB:', tag)
    })
    .then(function(tags) {
      res.status(200).json({ error: false, data: tags });
    })
})


module.exports = router
