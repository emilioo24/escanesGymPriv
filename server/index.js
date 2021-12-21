const express = require('express');
const app = express();
const sqlcon = require('./mysql');
const cors = require('cors');
const { render } = require('express/lib/response');

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

    if (nombre === "" || nombre === undefined || nombre === null) {
        res.send('Complete el campo Nombre');
    } else if (email === "" || email === undefined || email === null) {
        res.send('Complete el campo Email');
    } else if (mensaje === "" || mensaje === undefined || mensaje === null) {
        res.send('Complete el campo Mensaje');
    } else {
    
        sqlcon.query(`INSERT INTO contactogym(nombre, email, telefono, mensaje) 
            VALUES (?, ?, ?, ?)`, [nombre, email, telefono, mensaje], function(error, result) {
            if (error) {
                console.error(error);
            } else {
                console.log(result);
                res.send('Mensaje enviado');
            }
        });

    }
});

app.post('/api/inscribir', function(req, res) {

    const nombre = req.body.nombre;
    const email = req.body.email;
    const telefono = req.body.telefono;
    const dias = req.body.dias;
    const horarios = req.body.horarios;

    if (nombre === "" || nombre === undefined || nombre === null) {
        res.send('Complete el campo Nombre');
    } else if (email === "" || email === undefined || email === null) {
        res.send('Complete el campo Email');
    } else if (telefono === "" || telefono === undefined || telefono === null) {
        res.send('Complete el campo Telefono');
    } else if (dias === "-") {
        res.send('Elija los dias');
    } else if (horarios === "-") {
        res.send('Elija los horarios');
    } else if (dias === "" || dias === undefined || dias === null) {
        res.send('Elija los dias');
    } else if (horarios === "" || horarios === undefined || horarios === null) {
        res.send('Elija los horarios');
    } else {
    
        sqlcon.query(`INSERT INTO inscripcionesgym(nombre, email, telefono, dias, horarios) 
            VALUES (?, ?, ?, ?, ?)`, [nombre, email, telefono, dias, horarios], function(error, result) {
            if (error) {
                console.error(error);
            } else {
                console.log(result);
                res.send('Inscripto con éxito');
            }
        });
        
    } 

});

app.listen(3001, function () {
    console.log('Corriendo en el puerto 3001');
});