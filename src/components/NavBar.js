import React from 'react';
import logo from '../img/logo.png'
import { GiShoppingCart } from 'react-icons/gi';
import { FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

    state= {
        toggle: true
    }

    handleClick =() => {
        this.setState({
            toggle: !this.state.toggle
        })

    }

    render() {
        return (
            <div className='navBar' >
                <div className='logo-container'>
                    <img src={logo} className='logo' alt='logo' />
                    <Link to='/'>
                    <p>Triumph</p>
                    </Link>
                </div>
                <FaBars className='burger-menu'
                    onClick={() => this.handleClick()}/>
                <nav>
                    <ul className={this.state.toggle? 'oculto' : ''}>
                        <Link to='/' className='link' onClick={() => this.handleClick()}>
                            <li>Inicio</li>
                        </Link>
                        <Link to='/productos' className='link' onClick={() => this.handleClick()}>
                            <li>Productos</li>
                        </Link>

                        <Link to='/donde-estamos' className='link' onClick={() => this.handleClick()}>
                            <li >Encuéntranos</li>
                        </Link>

                        <Link to='/cesta' className='link' onClick={() => this.handleClick()}>
                            <li className='boton-cesta'>
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