# Tess-BE

##Backend Repo for the Planets-with-TESS
Developer: Michael Falahee
Github: http://www.github.com/Mjfalahee


###Table Schema

Stars:
..*tessid = unique id, PK

Light Curves:

Planets: 


Users:
..*Username
..*Password (hashed)

npx heroku run knex migrate:latest -a build-week-tess
npx heroku run knex seed:run -a build-week-tess