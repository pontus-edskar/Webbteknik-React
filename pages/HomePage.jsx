import React from "react";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

import backgroundImage from '../html_code/background.png';
import logo from '../html_code/Logo.png';
import starter_pizza from '../html_code/starter_pizza.jpg';
import '../html_code/main.css';

function HomePage(){
  return(
        <div style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center center', 
          width: '100vw', 
          height: '100vh', 
          overflow: 'auto' 
        }}>
          <div className="header">
            <div className="logo">
                <img src={logo} alt="Logo"/>
            </div>
            <div className="subpages">
              <div className="videoMeny">
                <Link to="/pages/Video" className="subpageA">
                  <h2 className="subpageText">Video</h2>
                </Link>            
              </div>
              <div className="meny">
                <Link to="/pages/Meny" className="subpageA">
                  <h2 className="subpageText">Meny</h2>
                </Link>
              </div>
              <div className="online subpageText">
                <Link to="/pages/Bestall" className="subpageA">
                  <h2 className="subpageText">Beställ Online</h2>
                </Link>
              </div>
              <div className="omOss subpageText">
                <Link to="/pages/OmOss" className="subpageA">
                  <h2 className="subpageText">Om Oss</h2>
                </Link>                
              </div>
              <div className="kontakt subpageText">
                <Link to="/pages/Kontakt" className="subpageA">
                  <h2 className="subpageText">Kontakt</h2>
                </Link>      
              </div>
              <div className="subpageText">
                <Link to="/pages/RandomContent" className="subpageA">
                  <h2 className="subpageText">Interactivity</h2>
                </Link>                
              </div>
            </div>
          </div>
          <div className="mainBodyEdit" style={{marginBottom: "10%"}}>
            <div className="first">
              <img src={starter_pizza} alt="Pizza" className="starterPizza" />
              <h1 className="webbsite">Pizzeria & Restaurang <br /> Laponia</h1>
            </div>
            <div className="informationMain">
              <div className="leftSide">
                <div className="short">
                  <h2>Stans äldsta pizzeria med dem bästa pizzorna under ett tak</h2>
                </div>
                <div className="open">
                  <h2>Öppettider</h2>
                  <div className="days" style={{display: "flex"}}>
                    <div className="mon-thurs" style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                      <h2 className="monday">Måndag 11:00 - 21:00</h2>
                      <h2 className="tuesday">Tisdag 11:00 - 21:00</h2>
                      <h2 className="wednesday">Onsdag 11:00 - 21:00</h2>
                      <h2 className="thursday">Torsdag 11:00 - 21:00</h2>
                    </div>
                    <div className="fri-sun" style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                      <h2 className="friday">Fredag 11:00 - 21:00</h2>
                      <h2 className="saturday">Lördag 12:00 - 21:00</h2>
                      <h2 className="sunday">Söndag 12:00 - 21:00</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rightSide">
                <h2>Välkommen till Pizzeria & Restaurang Lapoina!</h2>
                <h3>Vi driver en familjevänlig restaurang med mat som tillagas på färska råvaror</h3>
                <h3>Laponia ligger centralt på Storgatan i Lycksele och är en delvis nyrenoverad lokal med en mycket trevlig atmosfär. Restaurangen renoverades 2014 och är i toppskick! Vi har 95 platser inomhus och 56 platser utomhus samt fullständiga alkoholrättigheter</h3>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        );
}

export default HomePage;
