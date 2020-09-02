import React from 'react';
import Slider from './Slider';
import FeaturedBikes from './FeaturedBikes'

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Slider />
                <FeaturedBikes/>
            </React.Fragment>
        )
    }
}

export default Home
