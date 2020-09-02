import React from 'react';
import { ProductConsumer } from '../../context'
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import CartResumen from './CartResumen';

class Cart extends React.Component {

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { cart, cartSubTotal, cartTotal, cartTax } = value;
                    if (cart.length === 0) {
                        return (
                            <div className='cesta-container'>
                                <h3>La cesta está vacía.</h3>
                                <p> Añade algún artículo.</p>
                                <Link to='/productos'>
                                    <button className='boton-cesta-container'>
                                        Ir a productos
                                    </button>
                                </Link>
                            </div>)
                    } else {
                        return (
                            <section>
                                <CartResumen/>
                                <div className='cesta-container'>
                                    {cart.map(item => {
                                        return (
                                            <CartItem item={item} key={item.id} value={value} />
                                        )
                                    })}
                                </div>
                                <div className='cesta-totales'>
                                    <h4>Total</h4>
                                    <p><strong>Precio: </strong> {cartSubTotal} €</p>
                                    <p><strong>IVA (21%): </strong> {cartTax} €</p>
                                    <p><strong>Precio final:</strong>  {cartTotal} €</p>
                                    <div className='cesta-totales-botones'>
                                        <button className='boton-cesta-container cesta-boton' id='vaciar-boton'>
                                            Vaciar cesta
                                </button>
                                        <button className='boton-cesta-container cesta-boton' id='comprar-boton'>
                                            Comprar
                                </button>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}

export default Cart