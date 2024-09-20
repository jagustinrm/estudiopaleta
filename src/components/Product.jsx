import React , {useState, useEffect} from "react"; 
import { useParams } from "react-router-dom";
import getProduct from './services/getProduct'
import './Product.css'

export default function Product () {

    const { id } = useParams();
    const [product, setProduct] = useState('')

    useEffect(() => {
        const fetchProduct = async () => {
          const product = await getProduct(id);
          setProduct(product);
        };
    
        fetchProduct();
      }, []);

    
    return (
        <div>
            <div className="product">
                <img className="img_product" src={product.img} alt="" />
                <div className="product_description">
                    <h2 className="product_title">{product.description}</h2>
                    <p>${product.price} </p>
                    <p>Ver medios de pago</p>
                    <div className="product_cuantity">
                        <p>Cantidad</p>
                        <input id="product_cant_input" type="text" />
                    </div>

                    <button id="product_add_button">Agregar Carrito</button>
                </div>

            </div>
            <div>
                <h1>Productos similares</h1>
                {
                    
                }
            </div>
        </div>
    )
}