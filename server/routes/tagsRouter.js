//Uses Express defines router
var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
  res.status(200).json({message:'You are going to get tags :)'});
});

router.post('/',function(req,res){
  console.log('this is the tag', req.body)
  res.status(200).json({message:'You posted a tag'});
});



module.exports = router;
