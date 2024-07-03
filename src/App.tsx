// @ts-expect-error paraquefuncione
import Products from './components/Products.jsx'
import products from './mocks/products.json'
import './App.css'
function App() {
  return (
    <>
      <h1> Estudio Paleta </h1>
      <Products products = {products} />
    </>
  )
}

export default App
