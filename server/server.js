import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/gamefinder-dev');

const app = express();
app.use(bodyParser.json());
app.use(express.static('/node_modules/bootstrap/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var server = app.listen(3000, function () {
  console.log('App listening at http://localhost:3000');
});
