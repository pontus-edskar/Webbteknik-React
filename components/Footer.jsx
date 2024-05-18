import React from "react";

import facebook_logo from '../html_code/facebook.png'
import '../html_code/main.css';

function Footer() {
    return(
        <div className="footer" style={{display: "flex", justifyContent: "space-between"}}>
            <div className="leftFooter">
              <h3>Pizzeria & Restaurang Laponia</h3>
              <h3>Storgatan 41</h3>
              <h3>921 31 Lycksele</h3>
            </div>
            <div className="middleFooter">
              <h3>Telefon: 0950-373 00</h3>
              <h3>E-post: jaafar.youssef64@gmail.com</h3>
            </div>
            <div className="rightFooter">
              <a href="https://www.facebook.com/p/Restaurang-Laponia-i-lycksele-100064770247123/" target="_blank"><img src={facebook_logo} alt="facebook" /></a>
            </div>
          </div>
    );
}

export default Footer;