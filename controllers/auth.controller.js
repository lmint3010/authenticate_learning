const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// Models
const { userModel } = require('../models')

// Http status
const { BAD_REQUEST } = require('http-status')

// Response Generator
const responseGenerator = require('../functions/responseGenerator')

module.exports.signin = async (req, res) => {
  const { email, password } = req.body

  const user = await userModel.findOne({ email })
  if (!user) {
    return responseGenerator(res, BAD_REQUEST, { emailNotFound: true })
  }

  // Check user password
  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    return responseGenerator(res, BAD_REQUEST, { passwordIncorrect: true })
  }

  // Start to login
  const payload = { _id: user._id, email: user.email }
  const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: '1h',
  })
  responseGenerator(res, '200', { bearerToken: `Bearer ${token}` })
}

module.exports.signup = async (req, res) => {
  const { email, password, confirmPassword } = req.body

  // User submit validation
  if (!email || !password || !confirmPassword) {
    return responseGenerator(res, BAD_REQUEST)
  }
  if (password !== confirmPassword) {
    return responseGenerator(res, BAD_REQUEST)
  }

  // Create new user and save
  const hashedPassword = await bcrypt.hash(password, 12)
  const newUser = new userModel({ email, password: hashedPassword })

  try {
    await newUser.save()
    responseGenerator(res)
  } catch (err) {
    if (err.code === 11000) {
      responseGenerator(res, BAD_REQUEST, { emailDuplicated: true })
    }
  }
}
