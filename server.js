const database = require('./Backend/connection/db');
const routes = require('./Backend/routes/userroutes');
const express = require("express");
const bodyParser = require("body-parser");
var app = express();
var port = 5500;
const path = require('path');


//api middlewares
app.use(bodyParser.json()); //this is to accept data in json format

app.use(bodyParser.urlencoded({ extended: true })); //this is to decode data send through html form

app.use(express.static(path.join(__dirname, '/frontend')));

app.use('/', routes);


/* app.use(function (request, response, next) { */
/*     response.header("Access-Control-Allow-Origin", "*"); */
/*     response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); */
/*     next(); */
/*   }); */
/*  */

//to assign a port to the server
app.listen(port, () => console.log("Server is running on port 5500"))
