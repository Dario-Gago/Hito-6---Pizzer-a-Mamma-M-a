import './HomeS.css'
import CardPizza from '../CardPizza/CardPizza'
import Header from '../Header/Header'
import { useContext } from 'react'
import { TotalContext } from '../../context/TotalProvider'
const Home = () => {
  const { info } = useContext(TotalContext)
  return (
    <>
      <Header />
      <div className='d-flex flex-wrap justify-content-center gap-3'>
        {info.map((pizza) => (<CardPizza key={pizza.id} name={pizza.name} price={pizza.price} ingredients={pizza.ingredients} img={pizza.img} id={pizza.id} />))}
      </div>

    </>
  )
}

export default Home
