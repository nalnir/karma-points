var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/karma-points')
    .then(() => console.log("Connected"))
    .catch(err => console.log(err))

var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
    console.log('We are connected')
})

var Schema = mongoose.Schema

var karmaSchema = new Schema({
    id:  String,
    name: {
        first: String,
        middle: String,
        last: String
    },
    points: Number
})

var Karma = mongoose.model('Karma', karmaSchema)

var testUser = new Karma({  
    id: '54435bbjkb34523',
    name:
    {
        first: 'Lukas',
        middle: '',
        last: 'Stateczny'
    },
    points: 4
})

testUser.save(function(err, user){
    if (err, null) {
      console.log('Error: testUser NOT saved in db');
    } else if (null, user) {
      console.log('Success: testUser saved in db')
    }
})
