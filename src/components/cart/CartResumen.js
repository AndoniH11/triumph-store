import React from 'react';
import { ProductConsumer } from '../../context';
import {Link} from 'react-router-dom';

class CartResumen extends React.Component {

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {cartTotal, clearCart} = value
                    return(
                        <div className='cesta-resumen'>
                        <h3>El total de tu bolsa es de {cartTotal} €</h3>
                        <p>Reserva online de manera gratuita y sin esperas.</p>
                        <Link to='/compra-realizada'>
                        <button 
                            className='boton-cesta-container'
                            onClick={()=> clearCart()}>
                            Comprar
                        </button>
                        </Link>
                    </div>
                    )  
                }}
            </ProductConsumer>

        )
    }
}

export default CartResumen