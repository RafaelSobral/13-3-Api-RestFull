const mongoose = require('mongoose')

function connect() {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useUnifiedTopology', true)

  mongoose.connect('mongodb://localhost:27017/api-restfull')

  const db = mongoose.connection

  db.once('open', () => {
    console.log('Conectado com Database!')
  })

  db.on('error', console.error.bind(console, 'connection error: '))

  module.exports = {
    connect
  }

}