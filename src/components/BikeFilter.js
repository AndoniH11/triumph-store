import React from 'react';
import { ProductContext } from '../context';

class BikeFilter extends React.Component {

    getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))]
    }

    static contextType = ProductContext

    render() {
        const { handleChange, type, price, minPrice, maxPrice, bikes } = this.context

        let types = this.getUnique(bikes, 'type');
        types = ['Todas', ...types]
        // map to jsx

        types = types.map((item, index) => {
            return <option value={item} key={index} style={{textTransform : 'capitalize'}}>
                {item}
            </option>
        })

        return (
            <div className='filter-container'>
                <form className='filter-form'>
                    <div className='form-group'>
                        <label htmlFor='type'>
                            Estilo de moto
                        </label>
                        <select
                            name='type'
                            id='type'
                            value={type}
                            onChange={handleChange}
                            className='select-input'
                        >
                            {types}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='price'>
                            Precio €{price}
                        </label>
                        <input
                            type='range'
                            name='price'
                            min={minPrice}
                            max={maxPrice}
                            id='price'
                            value={price}
                            onChange={handleChange}
                            className='form-control' />
                    </div>
                </form>
            </div>
        )
    }
}

export default BikeFilter