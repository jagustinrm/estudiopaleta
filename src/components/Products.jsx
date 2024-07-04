
import React from 'react';
import './Products.css'

export default function Products({products}) {

    return (
        <>
        <section class="productos">
        <h2> Productos </h2>
        <div className="contenedor">

           {products?.map(prod => 
            {
                return (
                    
                <div key={prod.id}>
                    
                    <img src={prod.img}  />
                    {/* <p>Precio: {prod.price}</p> */}
                    <h4>Tipo: {prod.type}</h4>
                </div>
                )
            }
           )}
          
           </div>
           </section>
        </>
    );
}