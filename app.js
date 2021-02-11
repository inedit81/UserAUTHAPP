const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//routes
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const app = express();

//db connection
mongoose.connect('mongodb+srv://sharifusa:qwertyuiop@cluster0.d5c17.mongodb.net/<dbname>?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

// app routes
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);




module.exports = app;
