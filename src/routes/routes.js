const { Router } = require('express');
const { log } = require('handlebars');
const routes = Router()

routes.get('/',(req, res) =>{
    console.log("Get en index");
   
    res.render('index')
})

routes.post('/new-contact', (req,res)=>{
    console.log(req.body);
    res.send('contacto nuevo')
})

module.exports = routes;