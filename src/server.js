const express = require ('express');
const morgan = require ('morgan');
const path = require('path');

const server = express();



//*middlewares
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));
server.use(express.json());

//*routes

server.use(require('./routes/routes'))

//*static Files
server.use(express.static(path.join(__dirname,'public')));


module.exports = server