import React from 'react';
import './NavBar.css'
// import carrito from '../components/icons/carrito.svg';
import {IconShoppingCart} from '@tabler/icons-react';
export default function NavBar() {
    return (
        <>
        <nav>
        <h1> Estudio Paleta </h1>
        <ul>
            <li>Productos </li>
            <li>Contactame</li>
            <li >
                <span class="carrito">
                    <IconShoppingCart/>
                </span>
            </li>
        </ul>
        </nav>

        </>
    )
}