//Uses Express defines router
var express = require('express');
var router = express.Router();
//db models
var Tag = require('../db/models/tags.model')
var TagService = require('../http-client/tags.service')

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

// Get all tags, will filter more later.
router.get('/', function(req, res) {
  // Seeding for testing purposes.
  var addTag = Tag({
    text: 'Javascript',
    context: 'Code',
    count: 1
  });

  addTag.save(function() {

    console.log('Tag created!');
  });

  var addTwo = Tag({
    text: 'Medici',
    context: 'Coffee',
    count: 1
  });

  addTwo.save(function() {

    console.log('second created!');
  });

  Tag.find({}, function(err, tag) {
      if (err) {
        res.status(401).json({ error: true, message: err, data: err })
      }
      console.log('tagsFromDB:',tag)
    })
    .then(function(tags) {
      res.status(200).json({ error: false, data: tags });
    })
})


module.exports = router
