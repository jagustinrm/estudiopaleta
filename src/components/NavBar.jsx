import React from 'react';
import './NavBar.css'
// import carrito from '../components/icons/carrito.svg';
import {IconShoppingCart} from '@tabler/icons-react';

export default function NavBar() {
    return (
        <>
        <nav>
        <img className='banner' src="img/banner2.png"/>
        <ul>
            <a href="/"><li>Productos </li></a>
            <a href="/contact"><li>Contactame</li></a>
            <li >
                <span className="carrito">
                    <IconShoppingCart/>

                </span>
            </li>
        </ul>
        </nav>

        </>
    )
}