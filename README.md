# Backend Repo for the Planets-with-TESS

Developer: Michael Falahee

Github: http://www.github.com/Mjfalahee

### Table Schema

![Alt text](./assets/schema.PNG)

### Endpoints

Base URL: https://build-week-tess.herokuapp.com/

##### .post

/auth/register --returns a message, and the newly registered user

/auth/login -- returns a message and a token for future restricted routes

#### .get

/stars/ -- returns an array of JSONs containing star info. Pass {limit: x, offset: y} inside the request body if you want to change what data is displayed.

/:id -- returns a specific star based on the tessid entered into :id

/:id/planets -- returns the planets associated with the star when passed the tess id as :id

/planets/ -- returns an array of JSONs containing planet info. Pass {limit: x, offset: y} inside the request body if you want to change what data is displayed.

/planets/:id -- returns a planets info when passed {id: planetidhere} within the body of the request
