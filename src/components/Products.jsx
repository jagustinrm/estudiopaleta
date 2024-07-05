
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
                <div key={prod.id} class="card">
                    <img src={prod.img} alt={prod.description}  />
                    {/* <p>Precio: {prod.price}</p> */}
                    <div class="tipoProd">
                    <label > Tipo: </label>
                    <h4 class="tipoDeProducto"> {prod.type}</h4>
                    </div>
                </div>
                )
            }
           )}
          
           </div>
           </section>
        </>
    );
}