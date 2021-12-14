const express = require('express');
const app = express();
const sqlcon = require('./mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.post('/api/enviarmsj', function(req, res) {

    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const mensaje = req.body.mensaje;
    
    sqlcon.query(`INSERT INTO contactogym(nombre, email, telefono, mensaje) 
        VALUES (?, ?, ?, ?)`, [nombre, email, telefono, mensaje], function(error, result) {
        if (error) {
            console.error(error);
            //return res.render('contacto', { msj: 'Algo salió mal', color: 'red' });
        } else {
            //return res.render('contacto', { msj: 'Mensaje enviado con éxito', color: 'green' });
            console.log(result);
        }
    });

});

app.post('/api/inscribir', function(req, res) {

    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const dias = req.body.dias;
    const horarios = req.body.horarios;
    
    sqlcon.query(`INSERT INTO inscripcionesgym(nombre, email, telefono, dias, horarios) 
        VALUES (?, ?, ?, ?, ?)`, [nombre, email, telefono, dias, horarios], function(error, result) {
        if (error) {
            console.error(error);
        } else {
            console.log(result);
        }
    });

});

app.listen(3001, function () {
    console.log('Corriendo en el puerto 3001');
});