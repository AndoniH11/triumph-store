import React from 'react';
import {Slide} from 'react-slideshow-image';
import slider1 from '../img/slider4.jpg';
import slider3 from '../img/slider3.jpg';
import slider2 from '../img/slider2.jpg';
import '../index.css' 

const properties = {
    duration: 3000, 
    indicators: true,
    arrows: false,
}

const Slider = () => {
    return(
        <div className='containerSlide'>
            <Slide {...properties}>
                <div className='each-slide'>
                    <div>
                        <img src={slider1} alt='boneville t-100' id='img-slider' />
                    </div>
                </div>
                <div className='each-slide'>
                    <div>
                        <img src={slider2} alt='boneville t-100' id='img-slider' />
                    </div>
                </div>
                <div className='each-slide'>
                    <div>
                        <img src={slider3} alt='boneville t-100' id='img-slider' />
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slider