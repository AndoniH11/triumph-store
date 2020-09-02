import React from 'react';
import {ProductContext} from '../context';

class InfoMotor extends React.Component {


    static contextType = ProductContext;

    render() {
        return (
            <div>
                <div className='engine-info-container'>

                    <h2 className='titulo-motor'>MOTOR</h2>

                    <div className='engine-info'>
                        <div className='engine-info-cubicle'>
                            <div className='info-principal'>
                                <h4>{this.props.bike.cc}</h4>
                                <h5>CC MOTOR</h5>
                            </div>
                            <p className='info-detallada'>
                                Con sus {this.props.bike.cc} cc no hace falta más que un pequeño gesto para sentir el carácter tan característico de las motos Triumph
                            </p>
                        </div>

                        <div className='engine-info-cubicle'>
                            <div className='info-principal'>
                                <h4>{this.props.bike.cv}</h4>
                                <h5>CV POTENCIA MÁXIMA</h5>
                            </div>
                            <p className='info-detallada'>
                                Los {this.props.bike.cv} cv te ofrecerán la potencia más que suficiente para volar en todo tipo de terrenos.
                            </p>
                        </div>

                        <div className='engine-info-cubicle'>
                            <div className='info-principal'>
                                <h4>{this.props.bike.weight}</h4>
                                <h5>KG DE PESO</h5>
                            </div>
                            <p className='info-detallada'>
                                Los {this.props.bike.weight} kgs de la {this.props.bike.model} le ofrecerán una estabilidad y consistencia inigualables a la moto, que te permitiran conducir en situaciones de viento sin problemas.
                            </p>
                        </div>

                        <div className='engine-info-cubicle'>
                            <div className='info-principal'>
                                <h4>{this.props.bike.topSpeed}</h4>
                                <h5>KM/H MÁXIMOS</h5>
                            </div>
                            <p className='info-detallada'>
                                Gracias al mejor sistema de motor, la {this.props.bike.model} te ofrece una velocidad punta de {this.props.bike.topSpeed} km/h.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default InfoMotor