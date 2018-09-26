// console.log('starting function')
// exports.handle = function(e, ctx, cb) {
//   console.log('processing event: %j', e)
//   cb(null, { hello: 'world' })
// }

console.log('GET function')

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-2"})

exports.handle = function(e, ctx, callback) {

    let id = e.id
    
    let params = {
        TableName: 'karma_points',
        Key: {
          "id": id
        },
        "UpdateExpression": "set points = points + :num",
        "ExpressionAttributeValues": { 
            ":num": 1
        },
        ReturnValues:"UPDATED_NEW"
    }
    docClient.update(params, function(err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
}