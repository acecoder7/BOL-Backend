const express = require('express');
const keys = require('./config/keys.js');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require("dotenv");

//dotenv.config({ path: "config.env"});
//require("dotenv").config({ path: "./config.env" });

//parser application/x-www-form-urlencoded
//app.use(express.json());
//app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: false }));
dotenv.config();

//Setting up DB
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://king:reversi@cluster0.aoq7lst.mongodb.net/LoginDB_REVERSIAI" , { useNewUrlParser: true, useUnifiedTopology: true });

//Setup database models
require('./model/Account');
require('./model/Score');

//setup routes
require('./routes/authenticationRoutes')(app);
require('./routes/ScoreAuth')(app);

//const port= 13777;
app.listen(keys.port, () => {
    console.log("Listening on " + keys.port);
});