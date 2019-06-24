## Planets
- exoplanetID : unique ID : primary key

- dispostion: INT (categorical data)
- component: CHAR
- Constellation : VARCHAR(n) 
- Information: JSON

## Stars
- _Matching star name_ :unique ID: Primary key
- TESS name :unique ID
- TICID 
- Sectors: ARRAY 

# Star Planet Table
_Store the key value pairs for exoplanets and stars._
- star name : Foreign key => Star Table, many to one

## Lightcurves
Google Cloud Function.
Query the API.
