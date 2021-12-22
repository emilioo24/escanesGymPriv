const mysql = require('mysql2');
const { promisify } = require('util');

//Los datos estan ocultos porque este archivo es solo de demostración
const conexion = mysql.createPool({
    host: 'XXXXXXXX',
    database: 'XXXXXXXX',
    user: 'XXXXXXXXXX',
    password: 'XXXXXXXXX'
});

conexion.getConnection(function (error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log('Conectado Correctamente');
  }
});

conexion.query = promisify(conexion.query);

module.exports = conexion;