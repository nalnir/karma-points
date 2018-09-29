console.log('GET function')

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region: "us-east-2"})

exports.handle = function(e, ctx, callback) {

    let id = e.id

    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    
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

    docClient.get(
        {
            TableName: 'karma_points',
            Key: {
                "id": id
            }
        }, function(err, data) {
            if (err) {
                callback(err, null)
            } else {
                if(isEmpty(data)) {
                    docClient.put(
                        {
                            TableName: 'karma_points',
                            Item: {
                                "id": id,
                                "points": 1
                            }
                        }, function(err, data) {
                            if (err) {
                                callback(err, null)
                            } else {
                                callback(null, data)
                            }
                        }
                    )
                } else {
                    docClient.update(params, function(err, data) {
                        if (err) {
                            callback(err, null)
                        } else {
                            callback(null, data)
                        }
                    })
                }
            }
        }
    )
}