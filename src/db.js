//Nos conectamos a la base de datos con la libreria pg
//y exportamos el objeto pool que es el que nos permite hacer las consultas
const {Pool} = require('pg');

//Creamos la conexion a la base de dato
const pool = new Pool({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    PORT: 5432,
    database: 'taskdb'
    
})

module.exports = pool;