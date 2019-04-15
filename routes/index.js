const express = require('express')
const router = express.Router()

// Passport authenticate middleware
const passport = require('passport')

// Controllers
const authController = require('../controllers/auth.controller')

// Public - yourdomain
router.get('/', (_, res) => res.send('Server is running!'))

// Public - yourdomain/dashboard
router.get(
  '/dashboard',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.send(`Hello ${req.user.email}`)
  }
)

// Public - yourdomain/signin
router.post('/signin', authController.signin)

// Public - yourdomain/signup
router.post('/signup', authController.signup)

module.exports = router