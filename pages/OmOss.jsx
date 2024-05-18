import React from "react";

import Footer from '../components/Footer';
import Header from '../components/Header';
import backgroundImage from '../html_code/background.png';
import Galleri1 from '../html_code/bild1Galleri.png';
import Galleri2 from '../html_code/bild2Galleri.png';
import Galleri3 from '../html_code/bild3Galleri.png';
import Galleri4 from '../html_code/bild4Galleri.png';
import Galleri5 from '../html_code/bild5Galleri.png';
import Galleri6 from '../html_code/bild6Galleri.png';
import Galleri7 from '../html_code/bild7Galleri.png';
import Galleri8 from '../html_code/bild8Galleri.png';
import Galleri9 from '../html_code/bild9Galleri.png';
import Map from '../html_code/karta.png';

import '../html_code/main.css';

function OmOss() {
    return (
        <div style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center center', 
          width: '100vw', 
          height: '100vh', 
          overflow: 'auto' 
        }}>
          <Header />
    
          <div className="omOssMain" style={{ marginBottom: '10%' }}>
            <div className="omOssLeft">
              <div className="omOssAdress">
                <h1>Storgatan 41 <br /> 921 31, Lycksele</h1>
              </div>
              <div className="omOssKarta">
                <a href="https://www.google.com/maps/place/Pizzeria+Laponia/@64.597646,18.6679254,14.49z/data=!4m6!3m5!1s0x467bd758a176bf5d:0x3181276a35b12602!8m2!3d64.5966796!4d18.6753463!16s%2Fg%2F1hc1_vtq6?entry=ttu" target="_blank">
                  <img src={Map} alt="Karta" />
                </a>
              </div>
            </div>
            <div className="omOssRight">
              <div className="bildTop">
                <img src={Galleri1} alt="bild1" />
              </div>
              <div className="bildTop">
                <img src={Galleri2} alt="bild2" />
              </div>
              <div className="bildTop">
                <img src={Galleri3} alt="bild3" />
              </div>
              <div className="bild">
                <img src={Galleri4} alt="bild4" />
              </div>
              <div className="bild">
                <img src={Galleri5} alt="bild5" />
              </div>
              <div className="bild">
                <img src={Galleri6} alt="bild6" />
              </div>
              <div className="bildBot">
                <img src={Galleri7} alt="bild7" />
              </div>
              <div className="bildBot">
                <img src={Galleri8} alt="bild8" />
              </div>
              <div className="bildBot">
                <img src={Galleri9} alt="bild9" />
              </div>
            </div>
          </div>
    
          <Footer />
        </div>
      );
}

export default OmOss;