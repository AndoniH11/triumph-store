import React from 'react';
import Map from './Map';

class DondeEstamos extends React.Component{

    render(){
        return(
            <div className='donde-estamos'>
                <h2 className='titulo'>¿Dónde estamos?</h2>
                <div className='donde-estamos-container'>
                    <div className='mapaContainer'>
                        <Map/>
                    </div>
                    <div className='info-ubicacion'>
                        <h3>Triumph Store Barcelona</h3>
                        <h4>Encuentranos en: </h4>
                        <p>Carrer de Numancia, 118 08029 Barcelona</p>
                        <h4>Horario de Apertura</h4>
                        <p>Lunes-Viernes: 8:30-18:00</p>
                        <p>Sabados-Domingos: Cerrado</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default DondeEstamos