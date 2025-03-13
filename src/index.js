//Importamos para crear el servidor
//Importamos express
const express = require('express');
const taskRoutes = require('./routes/tasks.routes');
const morgan = require('morgan');
const cors = require('cors');

//Inicializamos express
const app = express();
//Morgan para ver las peticiones por consola
app.use(morgan('dev'));
//Configuramos express para que entienda los datos que vienen de un JSON
app.use(express.json());
//Cors para que cualquier persona pueda hacer peticiones a nuestro servidor
app.use(cors());

//Importamos las rutas
app.use(taskRoutes);

//Manejador de errores
app.use((err,req,res,next)=>{
    return res.json({
        message: err.message
    })
})

app.listen(4000) 
console.log('Server en puerto', 4000);