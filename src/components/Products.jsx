
import React, { useState, useEffect } from 'react';
import './Products.css'
import {IconHeart,IconHeartFilled} from '@tabler/icons-react';



export default function Products({products}) {

    const [productos, setProductos] = useState([])
    const [page, setPage] = useState([0 , 6])

    useEffect(() => {
        setProductos(products);
    }, [products]);

    function handlerTogger(id) {
        const updatedProducts = productos.map(producto => {
            if (producto.id === id) {
                return { ...producto, like: !producto.like }; 
              }
          return producto; 
        });
      
        setProductos(updatedProducts); 
      }

      function handlePage() {
        let next = []
        let max = productos.length
        
        next.push(page[0] + 6)
        next.push(page[1] + 6)
        if (next[0] > max) {
            setPage([0, 6])
        } else {
            setPage(next)
        }
       
      }

    return (
        <main className="productos">
        <h2> ARTE EN CERÁMICA  </h2>
        <h3> PRODUCTOS </h3>
        <div className="contenedor">

           {productos?.slice(page[0], page[1]).map(prod => 
            {
                return (    
                    <div key={prod.id} className="card" >
                        <img className="imgProducts" src={prod.img} alt={prod.description}  />
                        {/* <p>Precio: {prod.price}</p> */}
                            <div className="tipoProd">
                            <h4 className="tipoDeProducto"> {prod.type}</h4>
                            {prod.like?
                             <div className="corazon" onClick={() => handlerTogger(prod.id, prod.like)}>  
                                <IconHeartFilled /> 
                                </div>    
                            :
                             <div className="corazon" onClick={() => handlerTogger(prod.id, prod.like)}> 
                              <IconHeart  /> 
                             </div>  
                            }

                            </div>
                    </div>
                )
            }
           )}
           </div>
           <button onClick={() => handlePage()}> Next </button>
           </main>
    );
}