var Tag = require('../db/models/tags.model');

exports.createTag = function(req, res){
  let text = req.body.text;

  console.log('body:', req.body);
  console.log('text:', text);

  Tag.findOne({'text.value': text}, function(err, exisitingTag) {
    if (err) { return next(err) }
    if (exisitingTag) {return res.status(422).json({error: "Tag taken"})}

    var tag = new Tag({
      text: {
        value:text,
        unique: true,
      },
      context: {
        main: 'New Tag',
        sub: false,
        subContext: 'none'
      },
      count: 0
    });
    tag.save(function(err) {
      if (err) { return next(err) }
      res.json({tag_id: tag._id, text: tag.text.value });
    });
  });
}

exports.fetchTags =  function(req, res) {

  Tag.find({}, function(err, tag) {
      if (err) {
        res.status(401).json({ error: true, message: err, data: err })
      }
      console.log('tagsFromDB:', tag)
    })
    .then(function(tags) {
      res.status(200).json({ error: false, data: tags });
    })
}
