const express = require('express')
//const path = require('path')

// const db = require('./databese')
const routes = require('./routes')

const app = express()

// db.connect()

app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server está rodando na port ${port}`))