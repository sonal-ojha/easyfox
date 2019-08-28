import React from 'react';
import Contact from './Contact';
import './header.css';

function Header(props) {
    return (
        <div className="header_container">
            <div className="title_name">
                easy<span>fox</span>
            </div>
            <div className="header_right">
                <Contact />
            </div>
        </div>
    );
}

export default Header;