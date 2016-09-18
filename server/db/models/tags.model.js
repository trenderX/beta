var db = require('mongoose');
var Schema = db.Schema;

var TagsSchema = new Schema({
  text: { type:String, unique:true },
  context : {}, //TBD
  count: Number, // count of each time this has been searched
});

var Tag = db.model('Tag', TagsSchema);

module.exports = Tag;
