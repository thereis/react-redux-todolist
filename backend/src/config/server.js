'use strict'

const bodyParser = require('body-parser'),
      express    = require('express'),
      app        = express(),
      port       = 3003,
      cors       = require('./cors')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))
app.use(cors)

app.listen(port, () => {
    console.log('Server started at port', port)
})

module.exports = app