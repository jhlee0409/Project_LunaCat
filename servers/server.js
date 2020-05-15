const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port =process.env.PORT || 3001;
var mongoose = require('mongoose');

const route = require('./routes');

var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
  console.log('connected mongodb server!');
});

mongoose.connect('mongodb://localhost/test');

app.use(cors());

app.use(bodyParser.json());
app.use('/api',route);
// app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})