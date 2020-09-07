import React from 'react';
import {FaTrash} from 'react-icons/fa'
const CartItem = (bike) => {
    const { item, value} = bike
    const {count} = item
    const {incrementar, reducir, removeItem} = value

    if(item.count > 0){
        var precioSinIva = ((item.price * 0.8264)*count).toFixed(2)
        var IVA = ((item.price * 0.1735)*count).toFixed(2)
    }else{
        precioSinIva = 0
        IVA = 0
    }

    
    return (
        <div className='cesta-producto'>
            <img src={item.img} className='cesta-img' alt='producto'/>
            <div>
                <h3>{item.model}</h3>
                <p>Precio: {item.price} €</p>
                <div className='cantidad-botones'>
                    <button onClick={()=> reducir(item.id)}>
                        -
                    </button>
                    <p>{count}</p>
                    <button  onClick={()=> incrementar(item.id)}>
                        +
                    </button>
                    
                </div>
                <FaTrash className='trash' onClick={()=>removeItem(item.id)}/>
            </div>
            <div className='totals'>
                <p><strong>Precio: </strong>{precioSinIva} €</p>
                <p><strong>IVA (21%): </strong>{IVA} €</p>
                <p><strong>Precio final: </strong>{(item.price)*count} €</p>
            </div>
            
        </div>

    )
}

export default CartItem