import { useContext } from 'react'
import { TotalContext } from '../../context/TotalProvider'

const Cart = () => {
  const { cartProduct, setCartProduct, total, setTotal } = useContext(TotalContext)

  const updateQuantity = (id, change) => {
    const updatedCart = cartProduct.map((pizza) => {
      if (pizza.id === id) {
        // Aseguramos que pizza.count sea un número
        const currentCount = parseInt(pizza.count) || 0
        const newCount = currentCount + change
        return { ...pizza, count: newCount > 0 ? newCount : 1 }
      }
      return pizza
    })

    setCartProduct(updatedCart)
    recalculateTotal(updatedCart)
  }

  const recalculateTotal = (updatedCart) => {
    const newTotal = updatedCart.reduce((acc, pizza) => {
      // Aseguramos que price y count sean números
      const price = parseFloat(pizza.price) || 0
      const count = parseInt(pizza.count) || 1
      return acc + (price * count)
    }, 0)
    setTotal(newTotal)
  }

  const handleRemove = (id) => {
    const updatedCart = cartProduct.filter(pizza => pizza.id !== id)
    setCartProduct(updatedCart)
    recalculateTotal(updatedCart)
  }

  return (
    <div className='container mt-5'>
      <h4>Detalles del pedido:</h4>
      {cartProduct.length === 0
        ? (
          <div className='alert alert-info'>No hay productos en el carrito</div>
          )
        : (
          <>
            <div className='list-group'>
              {cartProduct.map((pizza) => (
                <div
                  key={pizza.id}
                  className='list-group-item d-flex align-items-center justify-content-between'
                >
                  <div className='d-flex align-items-center' style={{ width: '50%' }}>
                    <img
                      src={pizza.img}
                      className='rounded me-3'
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      alt={pizza.name}
                    />
                    <span className='fw-medium'>{pizza.name}</span>
                  </div>
                  <span className='text-success fw-bold'>
                    ${parseFloat(pizza.price).toLocaleString('es-ES')}
                  </span>
                  <div className='d-flex align-items-center'>
                    <button
                      className='btn btn-outline-danger btn-sm me-2'
                      onClick={() => updateQuantity(pizza.id, -1)}
                      aria-label='Disminuir cantidad'
                    >
                      -
                    </button>
                    <span className='mx-2'>{parseInt(pizza.count) || 1}</span>
                    <button
                      className='btn btn-outline-primary btn-sm ms-2'
                      onClick={() => updateQuantity(pizza.id, 1)}
                      aria-label='Aumentar cantidad'
                    >
                      +
                    </button>
                  </div>
                  <span className='text-success fw-bold'>
                    ${((parseFloat(pizza.price) || 0) * (parseInt(pizza.count) || 1)).toLocaleString('es-ES')}
                  </span>
                  <button
                    className='btn btn-sm btn-outline-danger'
                    onClick={() => handleRemove(pizza.id)}
                    aria-label='Eliminar producto'
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
            <div className='card mt-4 p-3 bg-light'>
              <h4 className='mb-3'>
                Total: <span className='fw-bold text-success'>${total.toLocaleString('es-ES')}</span>
              </h4>
              <button className='btn btn-success'>Pagar</button>
            </div>
          </>
          )}
    </div>
  )
}

export default Cart
