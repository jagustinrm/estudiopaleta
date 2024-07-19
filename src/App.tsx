// @ts-expect-error paraquefuncione
import Products from './components/Products.jsx'
// @ts-expect-error paraquefuncione
import NavBar from './components/NavBar.jsx'
import { useState } from 'react';
import {products as initialProducts} from './mocks/products.json'
import './App.css'


function App() {
  const [productos, setProductos] = useState(initialProducts)
  const [filter, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {

    return products.filter(product => {
      return(
        product.price >= filter.minPrice && 
        (
          filter.category == 'all' ||
          product.category == filter.category
        )
      )
    } )
  }

  return (
    <>
      <NavBar/>
      <Products products = {filterProducts(productos)} />
    </>
  )
}

export default App
