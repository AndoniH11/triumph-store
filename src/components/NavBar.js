import React from 'react';
import logo from '../img/logo.png'
import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div className='navBar'>
                <div className='logo-container'>
                    <img src={logo} className='logo' alt='logo' />
                    <p>Triumph</p>
                </div>
                <nav>
                    <ul>
                        <Link to='/' className='link'>
                            <li>Inicio</li>
                        </Link>
                        <Link to='/productos' className='link'>
                            <li>Productos</li>
                        </Link>

                        <Link to='/donde-estamos' className='link'>
                            <li >¿Dónde estamos?</li>
                        </Link>

                        <Link to='/cesta' className='link'>
                            <li className='boton-cesta link'>
                                Cesta <GiShoppingCart className='cart-icon' />
                            </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar