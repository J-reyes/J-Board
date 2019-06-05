const mongoose = require('mongoose')
const Person = require('./person')
const Post = require('./post')
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  Person.findOne({'email':'vijaymenonx@gmail.com'}, function (err, person) {
    if (err) return console.error(err);
    let id = person._id;
    Post.find({'person_id':id}, function (err, posts) {
      console.log(posts)
    })
    // console.log(person);
    // console.log(person)
    // var id = person._id
    // var post2 = new Post({
    //   title: "Learn Promises",
    //   body: "Promises are new in ES6",
    //   person_id: id
    // })
    // post2.save(function(err, post1){
    //   if (err) return console.error(err);
    //   console.log(post2);
    // });
  })

});
