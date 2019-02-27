const express = require('express'),
      passport = require('passport'),
      axios = require('axios'),
      body_parser = require('body-parser')
      db = require('./db')

const app = express()
app.use(body_parser.json())

db.connect('mongodb://heroku_hjtggkpb:60etht0rf7p90umhl1medqe1jo@ds155045.mlab.com:55045/heroku_hjtggkpb', 'heroku_hjtggkpb', (err) => {
    if(err){
        console.log(err)
    }
    app.listen(process.env.PORT || 8080)
})


