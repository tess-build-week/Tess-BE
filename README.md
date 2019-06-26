# Tess-BE

## Backend Repo for the Planets-with-TESS
Developer: Michael Falahee
Github: http://www.github.com/Mjfalahee


### Table Schema

![Alt text](./assets/schema.PNG)


### Endpoints

Base URL: https://build-week-tess.herokuapp.com/


.post /auth/register --returns a message, and the newly registered user
.post /auth/login -- returns a message and a token for future restricted routes

.get /stars/ -- returns an array of JSONs containing star info. Pass {limit: x, offset: y} inside the request body if you want to change what data is displayed.
.get /:id -- returns a specific star based on the tessid entered into :id
.get /:id/planets -- returns the planets associated with the star when passed the tess id as :id
