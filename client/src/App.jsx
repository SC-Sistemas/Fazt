import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<TaskList/>} />
          <Route path="/tasks/new" element={<TaskForm />} />
        </Routes>
      </div> 
    </BrowserRouter>
  )
}
