# karma-points
Microservice storing and retrieving karma points of a specific user


*GET FUNCTION*

URL for API:
https://u0mxny2nq6.execute-api.us-east-2.amazonaws.com/default/karma-points_get?id=USER_ID

*Replace USER_ID at the end of the url with the four digit user id*

Response returns json object with the id, name and karma-points of the user.

I created a mock data in dynamoDB in AWS Lambda
*Please use one of these mock id's to test the microservice: [1234, 2345, 3456, 4567, 5678]*