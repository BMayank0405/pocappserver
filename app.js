const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://bmayank:mj0405@ds113703.mlab.com:13703/pocapp');
const db = mongoose.connection;

db.on('error', (err) => {
  console.log(err);
})

app.use(cors())

const router = require('./routes/router');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());


app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port)
console.log(port);