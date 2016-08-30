//Uses Express defines router
var express = require('express');
var router = express.Router();


router.get('/',function(req,res){
  res.status(200).json({message:'This Is an Example Route'});
});

module.exports = router;
