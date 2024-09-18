import React from 'react'
import './Footer.css'
export default function Footer () {
    return (
        <footer>
            <div className='row1'>
                <div className='col1'>
                    <h5>Medios de pago</h5>
                    <h5>Formas de envío</h5>
                </div>
                <address className='col2'>
                    <h5>Contactanos</h5>
                    <div>
                        <p>Email: <a href="mailto: pamelagianola@gmail.com">pamelagianola@gmail.com</a> </p>
                        <p>Whatsapp: +54 9 11-3218-7187</p>
                        
                    </div>
                </address>
                <div className='col3'>
                    <h5>Redes sociales</h5>
                    <p>IG: <a href="https://www.instagram.com/estudiopaleta/"> Estudio Paleta</a></p>
                </div>
            </div>
            <div className='row2'>
                <p> Copyright ESTUDIO PALETA - 2024. Todos los derechos reservados. Defensa de las y los consumidores. Para reclamos ingresá acá. </p>
            </div>
        </footer> 
    )
}