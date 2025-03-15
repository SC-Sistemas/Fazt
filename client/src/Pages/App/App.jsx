import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

//Vista del sistema
import TaskForm from '../TaskForm/TaskForm'
import TaskList from '../TaskList/TaskList'

//Componente Navbar
import NavBar from '../../components/Navbar/NavBar'

const AppRoutes = ()=>{
  let routes = useRoutes([
    {path: '/',element: <TaskList />},
    {path: '/tasks/new',element: <TaskForm />},
  ])
  return routes;

}

 function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <NavBar />
    </BrowserRouter>
  )
}
export default App

