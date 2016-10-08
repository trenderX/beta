//Uses Express defines router
var express = require('express');
var router = express.Router();
//db models
var Tag = require('../db/models/tags.model')
var TagService = require('../http-client/tags.service')
var addTag = Tag({
  text: {
    value: 'Javascript',
    unique: true
  },
  context: {
    main: 'Code',
    sub: false,
    subType: null,
  },
  count: 0,
  // tabs: {
  //   first: 'social',
  //   second: 'media',
  //   third: 'places',
  //   fourth: 'shop',
  //   fifth: 'events',
  //   sixth: 'web',
  //   seventh: 'apps',
  //   eight: 'movies/books',
  //   ninth: 'jobs'
  // }
});

addTag.save(function() {
  console.log('Tag created!');
});

var addTwo = Tag({
  text: {
    value: 'Medici',
    unique: true
  },
  context: {
    main: 'Coffee',
    sub: false,
    subType: null,
  },
  count: 0,
  // tabs: {
  //   first: 'places',
  //   second: 'social',
  //   third: 'media',
  //   fourth: 'shop',
  //   fifth: 'events',
  //   sixth: 'web',
  //   seventh: 'apps',
  //   eight: 'movies/books',
  //   ninth: 'jobs'
  // }
});

addTwo.save(function() {
  console.log('second created!');
});

var addThree = Tag({
  text: {
    value: 'iWatch',
    unique: true
  },
  context: {
    main: 'Apple',
    sub: true,
    subType: 'Smartwatch',
  },
  count: 0,
  // tabs: {
  //   first: 'apps',
  //   second: 'social',
  //   third: 'media',
  //   fourth: 'shop',
  //   fifth: 'events',
  //   sixth: 'web',
  //   seventh: 'places',
  //   eight: 'movies/books',
  //   ninth: 'jobs'
  // }
});

addThree.save(function() {
  console.log('third created!');
});


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
