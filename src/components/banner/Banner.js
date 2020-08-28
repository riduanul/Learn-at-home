import React from 'react';
import './Banner.css'
import banner from '../../fakeData/banner.png'

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt=""/>
            <h3><strong>Choose and jump into our courses</strong></h3>
        </div>
    );
};

export default Banner;