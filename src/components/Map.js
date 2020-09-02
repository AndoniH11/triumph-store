import React from 'react';


class Map extends React.Component{
    render(){
        
        return(
            <div>
                <iframe className='map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11973.667835544496!2d2.126901436768303!3d41.386750468225785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4987b56c348a1%3A0x30b412b09deee76!2sTriumph%20Barcelona%20-%20Italomotor!5e0!3m2!1sen!2ses!4v1598521837686!5m2!1sen!2ses"
                    >

                </iframe>
            </div>
        )
    }
}

export default Map