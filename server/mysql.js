const mysql = require('mysql2');
const { promisify } = require('util');


const conexion = mysql.createPool({
    host: '31.170.160.154',
    database: 'u448016988_pelvison',
    user: 'u448016988_pelvison',
    password: 'Pelvison24'
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