import { Link } from 'react-router'
import { TotalContext } from '../../context/TotalProvider'
import { useContext } from 'react'

const CardPizza = ({ name, price, ingredients, img, id }) => {
  const { total, setTotal, cartProduct, setCartProduct } = useContext(TotalContext)

  const handleAddToCart = () => {
    setTotal(total + price) // Actualiza el total con el precio del producto
    setCartProduct([...cartProduct, { name, price, img, id }])
  }

  return (
    <div className='card ' style={{ width: '18rem' }}>
      <img src={img} className='card-img-top' alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>Precio: ${price.toLocaleString('es-ES')}</p>
        <p className='card-text'>🍕 Ingredientes 🍕</p>
        <div>
          {ingredients.map((ingrediente, index) => (
            <ul key={index}>
              <li>{ingrediente}</li>
            </ul>
          ))}
        </div>
        <div className='d-flex justify-content-around'>
          <Link to='/pizza/p001' className='btn btn-outline-dark'>
            Ver más 👀
          </Link>
          <button
            onClick={handleAddToCart} // Llama a la función para actualizar el total e info
            className='btn btn-dark ms-2'
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza
