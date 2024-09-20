// @ts-expect-error paraquefuncione
import Products from './components/Products.jsx'
// @ts-expect-error paraquefuncione
import Footer from './components/Footer.jsx'
// @ts-expect-error paraquefuncione
import Product from './components/Product.jsx'
// @ts-expect-error paraquefuncione
import NavBar from './components/NavBar.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// @ts-expect-error paraquefuncione
import Contact from './components/Contact.jsx'
import { useState, useEffect } from 'react';
import './App.css'
import { getProducts } from './components/services/getProducts.js';
import filterProducts from './components/services/filterProducts.js';


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


  return (
    <BrowserRouter>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Products products = {filterProducts(productos, filter)} />}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
