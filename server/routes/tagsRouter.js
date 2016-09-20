//Uses Express defines router
var express = require('express');
var router = express.Router();
//db models
var Tag = require('../db/models/tags.model')
var TagService = require('../http-client/tags.service')

router.post('/',function(req,res) {

  var newTag = req.body;

  Tag.findOne({ text:newTag.text })
  .exec()
  .then(function(tag) {
    // if tag exist pass down 
    if (tag) { return tag } 
    else {
      return null
    }
  })
  .then(function(tag) {
    // if tag exist pass down 
    if (tag) { return tag } 
    else {
      //create a new tag by adding context
      return { text:newTag.text, message:'this is a new a newTag', context:'not there yet my friend' }
    }
  })
  .then(function(tag) {
    if (tag) { 
      res.status(201).json({ error:false, message:'success', data:tag }); 
    } 
    else {
      throw { error:true, message:'err setting/getting tag' }
    }
  })
  .catch(function(err) {
    res.status(401).json({ error:true, data:err.message })
  })
})

module.exports = router
