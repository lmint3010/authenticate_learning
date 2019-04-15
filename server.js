// Enviroment variables
require('dotenv').config()

const PORT = process.env.PORT
const app = require('express')()

// Body parser (node package)
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// Passport Authenticate (node package)
const passport = require('passport')
require('./utils/passport-jwt')(passport)

// Mongoose (node package)
const mongoose = require('mongoose')
require('./utils/mongoose')(mongoose)

// Routers
const mainRoute = require('./routes')
/* ------------------------------- */
app.use(mainRoute)

app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`))
