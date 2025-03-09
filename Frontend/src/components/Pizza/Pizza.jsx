import React, { useEffect, useState } from 'react'
import './Pizza.css'

const Pizza = () => {
  const [info, setInfo] = useState(null)

  const consumoApi = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    const pizzaFiltrada = data.find((pizza) => pizza.id === 'p001')
    setInfo(pizzaFiltrada)
  }

  useEffect(() => {
    consumoApi()
  }, [])

  return (
    <div className='container'>
      {info
        ? (
          <div className='card'>
            <h1>{info.name}</h1>
            <p>Precio ${info.price}</p>
            <ul className='lista'>
              {info.ingredients.map((ingre, index) => (
                <li key={index}>{ingre}</li>
              ))}
            </ul>
            <img className='imagen' src={info.img} alt={info.name} />
          </div>
          )
        : (
          <p>Cargando...</p>
          )}
    </div>
  )
}

export default Pizza
