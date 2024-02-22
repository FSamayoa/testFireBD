const express = require ('express');
const morgan = require ('morgan');
const exphbs = require('express-handlebars');
const path = require('path');

const server = express();


//*config
server.set('views', path.join(__dirname, 'views'));
server.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
server.set('view engine', '.hbs');

//*middlewares
server.use(morgan('dev'));
server.use(express.urlencoded({extended: false}));

//*routes

server.use(require('./routes/routes'))

//*static Files
server.use(express.static(path.join(__dirname,'public')));

server.use(express.json())

module.exports = server