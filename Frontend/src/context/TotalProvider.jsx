import { createContext, useEffect, useState } from 'react'
export const TotalContext = createContext()
const TotalProvider = ({ children }) => {
  const [total, setTotal] = useState(0)
  const [cartProduct, setCartProduct] = useState([])
  const [info, setInfo] = useState([])
  const consumoApi = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    return setInfo(data)
  }
  useEffect(() => {
    consumoApi()
  }, [])
  return (
    <TotalContext.Provider
      value={{
        total,
        setTotal,
        cartProduct,
        setCartProduct,
        info,
        setInfo
      }}
    >
      {children}
    </TotalContext.Provider>
  )
}
export default TotalProvider
