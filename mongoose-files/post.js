const mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    person_id: String
})

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
