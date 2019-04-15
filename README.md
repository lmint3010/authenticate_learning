# Authenticate with JWT (Json web token)

This repository use for learning authenticate with Passport - JWT

## Setup

These are works you much to do after clone this Repository

- Run __yarn__ or __npm install__ to install all dependencies in package.json
- Config variable enviroments in __.env__ file (This file shouldn't be push on if you want to private your server)
- Run __yarn start__ to run your server

### Test APIs

Open __POSTMAN__ and __import__ Test Collection from Json file in __Postman Resource__ Folder

### App Routes

- __GET__ - Homepage: *http://localhost:PORT*
- __GET__ - Dashboard: *http://localhost:PORT/dashboard* (need authenticate access)
- __POST__ - Sign In: *http://localhost:PORT/signin*
- __POST__ - Sign Up: *http://localhost:PORT/signup*
