import React from 'react';
import { TiSocialFacebook } from 'react-icons/ti';
import { TiSocialTwitter } from 'react-icons/ti'
import { TiSocialInstagram } from 'react-icons/ti';
import { TiSocialYoutube } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import flag from '../img/flag.png'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <h2>TRIUMPH</h2>
                <div>
                    <ul className='terminos'>
                        <li>TERMS OF USE</li>
                        <li>INFORMACIÓN DE PRIVACIDAD</li>
                        <li>INFORMACIÓN DE LAS COOKIES</li>
                    </ul>
                </div>
                <p>Copyright © 2020 Triumph Motorcycles - All rights reserved. T 05113870967</p>
                <div className='redes-sociales-container'>
                    <div className='redes-sociales'>
                        <a href='https://www.facebook.com/TriumphMotorcyclesGlobal/?brand_redir=322879182208' target='_blank'>
                            <TiSocialFacebook className='red-social-icon' />
                        </a>

                        <a href='https://www.instagram.com/officialtriumph/?hl=en' target='_blank'>
                            <TiSocialInstagram className='red-social-icon' />
                        </a>

                        <a href='https://twitter.com/uktriumph?lang=en' target='_blank'>
                            <TiSocialTwitter className='red-social-icon' />
                        </a>

                        <a href='https://www.youtube.com/OfficialTriumph/' target='_blank'>
                            <TiSocialYoutube className='red-social-icon' />
                        </a>

                        <a href='https://www.linkedin.com/company/triumph-motorcycles/' target='_blank'>
                            <TiSocialLinkedin className='red-social-icon' />
                        </a>

                    </div>
                    <img src={flag} alt='bandera británica' className='bandera' />

                </div>
            </footer>
        )
    }
}

export default Footer;