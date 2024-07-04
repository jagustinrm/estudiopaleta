// @ts-expect-error paraquefuncione
import Products from './components/Products.jsx'
// @ts-expect-error paraquefuncione
import NavBar from './components/NavBar.jsx'
import { useState } from 'react'
import {products as initialProducts} from './mocks/products.json'
import './App.css'


function App() {
  const [products] = useState(initialProducts)

  return (
    <>
      <NavBar/>
      <Products products = {products} />
    </>
  )
}

export default App
