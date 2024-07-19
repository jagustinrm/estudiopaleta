import React from 'react';
import './NavBar.css'
// import carrito from '../components/icons/carrito.svg';
import {IconShoppingCart} from '@tabler/icons-react';

export default function NavBar() {
    return (
        <>
        <nav>
        <img src="img/banner2.png"/>
        <ul>
            <li>Productos </li>
            <li>Contactame</li>
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