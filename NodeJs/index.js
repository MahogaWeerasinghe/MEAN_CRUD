const express = require('express');
const bodyparser = require('body-parser');
const port = 3000;

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.json());

app.listen(port, () => console.log('Server started at port : '+ port));

app.use('/employees',employeeController);


//npx kill-port 3000 - kill a process some port
 