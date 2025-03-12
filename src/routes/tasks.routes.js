const { Router } = require("express");
//Importamos la funcion getAlltasks del controlador
const {
  getAlltasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controllers");

const router = Router();

router.get("/tasks", getAlltasks);
//Se le agrega id, ya que este sera 
//El id de la tarea que se quiere obtener
router.get("/tasks/:id", getTask);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);
module.exports = router;
