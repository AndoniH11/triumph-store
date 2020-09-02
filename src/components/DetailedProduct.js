import React from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context'
import InfoMotor from './InfoMotor';
import FeaturedBikes from './FeaturedBikes';


class DetailedProduct extends React.Component {

    static contextType = ProductContext;

    constructor(props) {
        super(props);
        this.state = {
            slug: this.props.match.params.slug,
            display: 'none',
        }
    }

    componentDidMount() {
        const { setSlug } = this.context
        let slug = this.state.slug
        setSlug(slug)
    }

    hideContainer = () => {
        this.setState({
            display: 'none'
        })
    }
    getRandomKey = () => {
        return Math.random()
    }

    handleClick = () => {
        this.setState({
            display: 'flex'
        })
    }

    render() {
        const { getBike, añadirEnCesta } = this.context
        const bike = getBike(this.context.slug);

        const { model, img, wallpaper, info, price } = bike

        return (
            <div className='detailedProductContainer'>
                <div className='ocultar-container' style={{ display: this.state.display }}>
                    <div className='añadir-carrito-container'>
                        <h3>Hemos incluido esta moto en la carta</h3>
                        <img src={img} alt='producto' />
                        <p className='modelo'>{model}</p>
                        <p>{price} €</p>
                        <button id='seguir-boton' onClick={() => this.hideContainer()}>
                            Seguir comprando
                        </button>
                        <Link to='/cesta'>
                            <button id='ir-boton'>
                                Ir a la cesta
                            </button>
                        </Link>

                    </div>
                </div>

                <div className='wallpaperContainer'>
                    <img
                        key={this.getRandomKey()}
                        src={wallpaper}
                        alt='imagen en grande del modelo'
                        className='wallpaper'
                    />
                </div>
                <div className='detailed-info'>
                    <div className='info-container'>
                        <h3>{model}</h3>
                        <p>{info}</p>
                        <p className='detailed-precio'>Precio Desde {price} €</p>
                        <button
                            className='boton-cesta-container'
                            id='boton-comprar'
                            onClick={() => añadirEnCesta(bike), () => this.handleClick()}>
                            Comprar
                        </button>
                    </div>

                    <img src={img} alt='image of the bike' className='detailed-img' />
                </div>

                <InfoMotor bike={bike} />
                <FeaturedBikes state={this.state} />
            </div>
        )
    }
}

export default DetailedProduct;