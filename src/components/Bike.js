import React from 'react';
import {Link} from 'react-router-dom';
import {ProductContext} from '../context';

class Bike extends React.Component{

    static contextType=ProductContext

    render(){
        const {brand, model, price, img, slug} = this.props.bike
        const {setSlug} = this.context
        return(
            <Link to={`/productos/${slug}`} onClick={() => setSlug(slug)}>
            <div className="container">
                <div className='cubreContainer'>
                </div>
                <div className='carta-titulo'><h1>{model}</h1></div>
                <h2>{brand}</h2>
                <img src={img} className='bike-img'/>
                <p className='precio'>Starting from: {price}€</p>
                
            </div>
            </Link>
            
    )
    }
    

}

export default Bike