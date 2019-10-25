const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: String,
    desc:String,
    url:String,
});

const Keyword = mongoose.model('Keywords',schema);

module.exports = Keyword;