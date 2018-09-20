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

//db methods ********************

let save = (user, callback) => {
    Karma.find({id: user.id}, function(err, docs) {
        if (err, null) {
            throw err
        } else if (null, docs) {
            if (docs.length === 0) {
                new Karma(user).save()
            } else {
                console.log('User already exists!')
                callback(docs[0].points)
            }
        }
    })
}

// let getPoints = (user) => {
//     Karma.find({id: user.id}, function(err, docs) {
//         if (err, null) {
//             throw err
//         } else if (null, docs) {
//             console.log(docs.points)
//         }
//     })
// }

// ******************************

module.exports.save = save
// module.exports.getPoints = getPoints