import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import LoginPage from './components/LoginPage/LoginPage'
import RegisterPage from './components/RegisterPage/RegisterPage'
import Cart from './components/Cart/Cart'
import Pizza from './components/Pizza/Pizza'
import NotFound from './components/NotFound/NotFound'
import Profile from './components/Profile/Profile'
import TotalProvider from './context/TotalProvider'

const App = () => {
  return (
    <div className='app'>
      <TotalProvider>
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/p001' element={<Pizza />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/404' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </TotalProvider>
    </div>
  )
}

export default App
