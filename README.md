# Authenticate with JWT (Json web token)

This repository use for learning authenticate with Passport - JWT

## Setup

These are works you much to do after clone this Repository

- Run _yarn_ or _npm install_ to install all dependencies in package.json
- Config variable enviroments in _.env_ file (This file shouldn't be push on if you want to private your server)
- Run _yarn start_ to run your server

### Use _POSTMAN_ to test APIs

Open _POSTMAN_ and *import* Test Collection from Json file in *Postman Resource* Folder

### App Routes

_GET - Homepage: *http://localhost:PORT*_
_GET -Dashboard: *http://localhost:PORT/dashboard* (need authenticate access)_
_POST - Sign In: *http://localhost:PORT/signin*_
_POST - Sign Up: *http://localhost:PORT/signup*_