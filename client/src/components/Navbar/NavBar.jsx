import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const activeStyle = 'underline'; // Asegúrate de que 'actitve' esté bien escrito

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm'>
      <ul className='flex items-center gap-3'>
        <li className='font-bold'>
          Seguro de las Californias
        </li>
        <li>
          <NavLink 
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)} 
          >
            Lista de tareas
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/tasks/new"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Nueva tarea
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
