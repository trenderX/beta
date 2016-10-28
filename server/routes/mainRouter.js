var path = require('path');
var express = require('express');

//routers declarations
var router = express.Router();
var tagsRouter = require('./tagsRouter');
var authRouter = require('./authRouter');

router.use('/auth', authRouter);
router.use('/tags', tagsRouter);

module.exports = router;

