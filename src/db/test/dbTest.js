const assert = require('chai').assert
const app = require('./../index')

// it('it should save the user into the db if user does not exist', function() {
//     assert.equal()
// })

describe ('App', function() {
    it ('should return 1', function() {
        assert.equal(app.tester(), 1)
    })
})