// Mongoose Model
const { userModel } = require('../models')

// Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET_KEY,
}

// Initial Passport Authenticate
module.exports = passport => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      const { _id } = jwt_payload

      const user = await userModel.findById(_id)
      if (!user) return done(null, false)
      return done(null, user)
    })
  )
}
