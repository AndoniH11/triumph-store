import React from 'react';
import { ProductConsumer, ProductContext } from '../context';
import Bike from './Bike';
import wallpaper from '../img/wallpaper.jpg';
import BikeFilter from './BikeFilter';

class ProductsList extends React.Component {

    static contextType = ProductContext

    render() {

        return (
            <ProductConsumer>
                {(value) => {
                    return (

                        <div className='products-container'>
                            <div className='wallpaperContainer'>
                                <img src={wallpaper} className='wallpaper' alt='wallpaper'/>
                            </div>
                            <div className='productos-contenido'>
                                <h2 className='titulo'>Nuestras Motos</h2>
                                <BikeFilter />
                                <div className='bike-container'>
                                    {this.context.sortedBikes.length === 0 ?
                                        <h3 className='notificacion'>
                                            Lo sentimos, su busqueda no ha ofrecido resultados.
                                        </h3> :
                                        value.sortedBikes.map(item => {
                                            return <Bike key={item.id} bike={item} />
                                        })}
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}

export default ProductsList