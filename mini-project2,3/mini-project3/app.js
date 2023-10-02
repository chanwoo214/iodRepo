const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require("./routes/index");
const cors = require ('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api', indexRouter);


const mongoURI = 'mongodb://127.0.0.1:27017/todo-app';

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
        console.log("mongoose connected");
    })
    .catch((err) => {
        console.log("DB connection fail", err);
    });

app.listen(5000, () => {
    console.log("Listening on Port 5000");
});

