import React from 'react'
import './Profile.css'
const Profile = () => {
  return (
    <div className='container mt-4'>
      <div className='card p-4 text-center'>
        <h4 className='mb-3'>Usuario</h4>
        <p className='mb-3'>correo@example.com</p>
        <button className='btn btn-danger' disabled>
          Cerrar sesión
        </button>
      </div>
    </div>

  )
}

export default Profile
