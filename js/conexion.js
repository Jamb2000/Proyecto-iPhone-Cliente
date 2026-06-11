let MYSQL = require('mysql2');

let conexion = MYSQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2321',
    database: 'proyecto_iphone'
});

conexion.connect(function(error){
    if (error) {
        throw error;
    } else {
        console.log('Conexion exitosa');
    }
    });

conexion.end();