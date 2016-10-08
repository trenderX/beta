var db = require('mongoose');
var Schema = db.Schema;

var TagsSchema = new Schema({
  text: {
    value:String,
    unique:Boolean
  },
  context : {
    main:String,
    sub: Boolean,
    subContext:String,
  },
  count: Number,
  // tabs: {
  //   first: String,
  //   second: String,
  //   third: String,
  //   fourth: String,
  //   fifth: String,
  //   sixth: String,
  //   seventh: String,
  //   eigth: String,
  //   ninth: String,
  // }
});

var Tag = db.model('Tag', TagsSchema);

module.exports = Tag;
