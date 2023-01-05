// const mongoose = require('mongoose')

// function connect() {
//   mongoose.set('useNewUrlParser', true)
//   mongoose.set('useUnifiedTopology', true)
//   mongoose.set('useCreateIndex', true)
//   mongoose.set('useFindAndModify', false)
//   mongoose.connect('mongodb://localhost:27017')

//   const db = mongoose.connection

//   // db.once('open', () => {
//   //   console.log('Conectado com Database!')
//   // })

//   // db.on('error', console.error.bind(console, 'connection error: '))
// }

// module.exports = { connect };

const mongoose = require('mongoose')


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017', {
  // useMongoClient: false
}).then(() => {
  console.log("MongoDB Conectado...")
}).catch((err) => {
  console.log("Houve um erro ao se conectar ao mongoDB: " + err)
})

