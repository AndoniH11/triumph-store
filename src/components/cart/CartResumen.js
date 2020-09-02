import React from 'react';
import { ProductConsumer } from '../../context';

class CartResumen extends React.Component {

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {cartTotal} = value
                    return(
                        <div className='cesta-resumen'>
                        <h3>El total de tu bolsa es de {cartTotal} €</h3>
                        <p>Reserva online de manera gratuita y sin esperas.</p>
                        <button className='boton-cesta-container'>
                            Comprar
                        </button>
                    </div>
                    )  
                }}
            </ProductConsumer>

        )
    }
}

export default CartResumen