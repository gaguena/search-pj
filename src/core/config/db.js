const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const config = {
  uri: process.env.MONGODB_URL,
  options: {
    autoIndex: false,
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  },
}

mongoose.connection.on('open', () => {
  console.log('Successfully connected to database.')
})

mongoose.connection.on('error', () => {
  throw new Error('Could not connect to MongoDB.')
})

module.exports = () => {
  mongoose.connect(config.uri, config.options)
}