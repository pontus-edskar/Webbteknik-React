import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../html_code/Logo.png';
import '../html_code/main.css';

function Header() {
    return(
        <div className="headerSubpage">
            <div className="goBack">
                <h1>{'<'}</h1>
            </div>
            <h1 className="nameOfSubpage">SubPage</h1>
            <div className="homeLogo"> 
                <Link to="/pages/HomePage">
                    <img src={logo} alt="Logo" />
                </Link>              
            </div>
        </div>
    );
}

export default Header;