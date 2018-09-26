console.log('GET function')

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-2"})

exports.handle = function(e, ctx, callback) {

    let id = e.id
    
    let params = {
        TableName: 'karma_points',
        Key: {
          "id": id
        }
    }
    docClient.get(params, function(err, data) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, data)
        }
    })
}