import React from 'react';
import { ProductConsumer } from '../context';
import Bike from './Bike';

class FeaturedBikes extends React.Component {

    render() {
        return (
            <ProductConsumer >
                {(value) => (
                    <div className='display-bikes' >
                        <h2 className='titulo'>Más Populares</h2>
                        <div className='bike-container'>
                            {value.featuredProducts.map(item => {
                                return <Bike key={item.id} bike={item} state={this.props.state}/>
                            })}
                        </div>
                    </div>
                )}
            </ProductConsumer>
        )

    }
}

export default FeaturedBikes