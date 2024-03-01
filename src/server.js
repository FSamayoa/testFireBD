const express = require("express");
const routes = require("../src/routes/routes")

server = express()


server.use("/api",routes)


module.exports = server




// const express = require ('express');
// const cors = require('cors');
// const morgan = require ('morgan');
// const path = require('path');

// const server = express();


// server.use(cors({
//     origin: '*' 
//   }));

// //*middlewares
// server.use(morgan('dev'));
//     server.use(express.urlencoded({extended: true}));
// server.use(express.json());

// //*routes

// server.use(require('./routes/routes'))

// //*static Files
// server.use(express.static(path.join(__dirname, '../server')));


// module.exports = server