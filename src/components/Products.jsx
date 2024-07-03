
import React from 'react';
import './Products.css'

export default function Products({products}) {
    return (
        <>
        <h2> Productos </h2>
        <div class="contenedor">

           {products.products?.map(prod => 
            {
                return (
                    
                    <div key={prod.id}>
                    <h3>{prod.type}</h3>
                    <img src={prod.img}  />
                    {/* <p>Precio: {prod.price}</p> */}
                </div>
                )
            }
           )}
           </div>
        </>
    );
}