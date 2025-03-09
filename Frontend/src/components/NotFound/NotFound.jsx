import React from 'react'
import { Link } from 'react-router'
import './NotFound.css'
const NotFound = () => {
  return (
    <div className='mix'>
      <div class='container-not'>
        <div class='error-code'>404</div>
        <h1 class='mb-3'>Página no encontrada</h1>
        <p class='mb-4'>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
        <Link to='/' class='btn btn-primary'>Volver al inicio</Link>
      </div>
    </div>

  )
}

export default NotFound
