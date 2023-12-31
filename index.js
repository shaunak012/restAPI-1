const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/subscriber');
const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error);
})
db.once('open', () => {
    console.log("Connected to database")
})


app.listen(5000, () => {
    console.log("server started...")
})