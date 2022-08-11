import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './a.jpg';

export default function Navbar() {

    return (
        <>
            <div className='contain'>
                <img src={logo} className='rounded' />
                <nav className="navB">
                    <Link to='/'>Home</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact Us</Link>
                </nav>
            </div>
        </>
    );
}
