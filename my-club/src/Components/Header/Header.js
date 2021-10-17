import React from 'react';
import './Header.css'
import image from '../../image/logo.jfif'

const Header = () => {
    return (
        <div className="header-container">
            <h2>FC-Barcelona</h2>
            <img src={image} alt=""/>
        </div>
    );
};

export default Header;