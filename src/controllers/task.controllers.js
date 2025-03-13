const pool = require("../db");

//Para tener el archivo mas limpio
//Vamos a crear un controlador para las tareas
//El cual hara que el archivo de rutas sea mas limpio
const getAlltasks = async (req, res, next) => {
  try {
    const allTask = await pool.query("SELECT * FROM task");
    //Es lo que nos retornara la consulta, que al final es lo que vemos
    res.json(allTask.rows);
  } catch (error) {
    next(error);
  }
};

const getTask = async (req, res, next) => {
  try {
    //Extrae el id del url
    const { id } = req.params;
    //Busca en la tabla task donde el id sea igual al numero que esta en la url
    //siendo el $1 el id que se obtiene de la url
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    //Si no encontró ninguna tarea con ese id, devuelve un código de estado 404 con un mensaje
    if (result.rows.length === 0)
      return res.status(404).json({
        message: "Tarea no encontrada",
      });
    //Si la tarea existe, se devuelve en formato JSON la primera fila de result.rows.
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

const createTask = async (req, res, next) => {
  //Extrae el title y description del cuerpo de la peticion
  const { title, description } = req.body;
  //EL $1 y $2 son parametros donde iran los valores de title y description que son donde se guardaran
  //Los valores ingresados
  //Utilizamos al final RETURING * para que nos retorne la fila recien insertada
  //Await esperera a que la consulta termine antes de continuar
  //Pool ejecuta la consulta en la base de datos
  //Y lo guardamos en la variable result para poder obtener el valor de la tarea creada
  try {
    const result = await pool.query(
      "INSERT INTO task (title, description)VALUES($1,$2) RETURNING *",
      [title, description]
    );
    //Retornamos la fila recien insertada
    res.json(result.rows[0]);
  } catch (error) {
    next(error);
    res.json({ error: error.masage });
  }
};

const deleteTask = async (req, res, next) => {
  //Extrae el title y description del cuerpo de la peticion
  const { id } = req.params;
  try{
    //Hacemos la busqueda y eliminamos con el id que se obtiene de la url
  //Y retornamos la fila eliminada con RETURNING *
  const result = await pool.query(
    "DELETE FROM task WHERE id = $1 RETURNING *",
    [id]
  );
  //Si el resultado que nos reguresa, la fila eliminada es igual a 0
  //Nos retornara un mensaje de tarea no encontrada
  if (result.rowCount === 0)
    return res.status(404).json({
      message: "Tarea no encontrada",
    });
  //Si la tarea fue eliminada, nos retorna un status 204
  return res.sendStatus(204);

  }catch(error){
    next(error);
  }
};
const updateTask = async (req, res, next) => {
  try {
    //Extrae el title y description del cuerpo de la peticion
  const { id } = req.params;
  //Ocupamos el body para que nos de que es lo que tenemos que actualizar
  const { title, description } = req.body;
  const result = await pool.query(
    "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  if (result.rows.length === 0)
    return res.status(404).json({
      message: "Tarea no encontrada",
    });

  //Si la tarea fue actualizada, nos retorna un status 204
  console.log(result);
  return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlltasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
