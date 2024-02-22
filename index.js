require ('dotenv').config()
const server = require('./src/server')


const port = process.env.PORT || 3002;

server.listen(port, ()=>{
    console.log("server on port: ",port);
    console.log(port);
})