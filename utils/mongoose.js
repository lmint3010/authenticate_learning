module.exports = mongoose => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  mongoose.connection.on('error', () =>
    console.log('Fail to connect to mongoDB')
  )
  mongoose.connection.once('open', () =>
    console.log('MongoDB has been connected!')
  )
}
