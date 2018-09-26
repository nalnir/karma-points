# karma-points
Microservice storing and retrieving karma points of a specific user


*GET POINTS FUNCTION*

URL for API:
https://u0mxny2nq6.execute-api.us-east-2.amazonaws.com/default/karma-points_get?id=USER_ID

*Replace USER_ID at the end of the url with the four digit user id*

Response returns json object with the id, name and karma-points of the user.

I created a mock data in dynamoDB in AWS Lambda
*Please use one of these mock id's to test the microservice: [1234, 2345, 3456, 4567, 5678]*


*UPDATE POINTS FUNCTION*

URL for API:
https://uiwr3rzqge.execute-api.us-east-2.amazonaws.com/default/karma-points_put?id=1234

*Replace USER_ID at the end of the url with the four digit user id*

Response returns json object holding how many points does the user have after an update.

I created a mock data in dynamoDB in AWS Lambda
*Please use one of these mock id's to test the microservice: [1234, 2345, 3456, 4567, 5678]*

Comment: Please don't mind the name in the end of the url "karma-points_put". It's a bit misleading as I previously thought of using the REST API Put method, but in reality the Get method is used instead.