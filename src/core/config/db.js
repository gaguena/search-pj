const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const config = {
    autoIndex: false,
    //poolSize: 1, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connection.on('open', () => {
  console.log('Successfully connected to database.')
})

mongoose.connection.on('error', (err, db) => {
  console.error(err)
  throw new Error(err)
})

module.exports = () => {
  mongoose.connect(`${process.env.MONGODB_URL}`, config)
}