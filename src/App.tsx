// @ts-expect-error paraquefuncione
import Products from './components/Products.jsx'
// @ts-expect-error paraquefuncione
import NavBar from './components/NavBar.jsx'

import { useState, useEffect } from 'react';
import './App.css'
import { getProducts } from './components/services/getProducts.js';

function App() {

  const [productos, setProductos] = useState<Product[]>([]);
  const [filter] = useState({
    category: 'all',
    minPrice: 0
  })

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProductos(products);
    };

    fetchProducts();
  }, []);



  interface Product {
    id: number;
    img: string;
    price: number;
    type: string;
    like: boolean;
    description: string;
  }


  const filterProducts = (products: Product[]): Product[] => {
    if (!Array.isArray(products)) {
      console.log(products)
      return [];
    }
    return products.filter(product => {
      
      return(
        product.price >= filter.minPrice && 
        (
          filter.category == 'all' 
          // ||
          // product.category == filter.category
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
