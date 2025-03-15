import React from 'react'
import Layout from '../../components/Layout'

// Importar useState
import {useState} from 'react'

export default function TaskForm() {
  
  //Capturar lo de los inputs
  //Crear un estado para guardar la tarea
  const [task, setTask] = useState({
    title:'',
    description:''

  })

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const res = await fetch('http://localhost:4000/tasks', {
      method:'POST',
      body:JSON.stringify(task),
      headers:{"Content-Type": "application/json"}
    });
    const data = await res.json()

    console.log(task)
    
  }

  const handleChange = e =>{
    setTask({...task, [e.target.name]: e.target.value});
  }


  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 w-full max-w-md'>
          <label htmlFor='title'>Título</label>
          <input 
            type='text' 
            id='title' 
            name='title' 
            placeholder='Escribe el título de la tarea'
            className='border border-gray-400 rounded px-3 py-2'
            onChange={handleChange}
          />
          <label htmlFor='description'>Descripción</label>
          <textarea 
            id='description' 
            name='description' 
            onChange={handleChange}
            placeholder='Escribe la descripción de la tarea'
            className='border border-gray-400 rounded px-3 py-2'
          />


          <button 
            type='submit' 
            className='bg-blue-500 text-white rounded px-3 py-2'
            
          >
            Guardar tarea
          </button>
        </div>
      </form>
    </Layout>
  )
}
