const { Router } = require('express');
const routes = Router()
const admin = require('firebase-admin')
require('dotenv').config();

//$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\jasam\OneDrive\Escritorio\testbackfire\server\fireback-111-firebase-adminsdk-190pm-51d865ee7e.json"
var serviceAccount = require('../../fireback-111-firebase-adminsdk-190pm-51d865ee7e.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DB_URL
})

const db = admin.database()

routes.get('/',(req, res) =>{
    db.ref('contactos').once('value',(snapshot)=>{
        const data = snapshot.val()
        res.json(data)
    })
    console.log("Get en index");
})

routes.post('/new-contact', (req,res)=>{
    console.log(req.body);
    const newContact = {
        name: req.body.name,
        phone: req.body.phone
    }
    db.ref('contactos').push(newContact)
    res.sendStatus(201)
})

routes.delete('/borrar/:id', (req,res)=>{
    db.ref('contactos/' + req.params.id).remove()
    res.sendStatus(204)
})

module.exports = routes;