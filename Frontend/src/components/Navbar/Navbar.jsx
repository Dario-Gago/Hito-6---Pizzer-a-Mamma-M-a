import { Link } from 'react-router'
import { TotalContext } from '../../context/TotalProvider'
import { useContext } from 'react'
const Navbar = () => {
  const { total } = useContext(TotalContext)
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Pizzería Mamma mia!
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/register'>
                  Register
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/cart'>
                  Cart
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/pizza/p001'>
                  Pizza
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/profile'>
                  Profile
                </Link>
              </li>
            </ul>
            <Link to='/cart' className='navbar-text fw-bold'>
              Total:{total.toLocaleString('ES')}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
