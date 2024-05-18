import React from "react";
import Footer from '../components/Footer'
import Header from '../components/Header'

import backgroundImage from '../html_code/background.png';
import '../html_code/main.css';


function Kontakt(){
        return (
            <div  style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'center center', 
                width: '100vw', 
                height: '100vh', 
                overflow: 'auto' 
            }}>
                <Header />

                <div className="kontaktMain" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="kontaktaOss">
                        <h1>Kontakta Oss</h1>
                        <h3>0950-373 00</h3>
                        <a href="https://www.facebook.com/people/Restaurang-Laponia-i-lycksele/100064770247123/" style={{ color: 'black' }}><h3>Facebook</h3></a>
                        <h3>jaafar.youssef64@gmail.com</h3>
                    </div>
                    <div className="oppettiderKontakt">
                        <h1>Öppettider</h1>
                        <div className="dagar" style={{ display: 'flex' }}>
                            <div className="kontaktMon-thur" style={{ marginRight: '20%', marginLeft: '4%' }}>
                                <h3 className="monday">Måndag 11:00 - 21:00</h3>
                                <h3 className="tuesday">Tisdag 11:00 - 21:00</h3>
                                <h3 className="wednesday">Onsdag 11:00 - 21:00</h3>
                                <h3 className="thursday">Torsdag 11:00 - 21:00</h3>
                            </div>
                            <div className="kontaktFri-sun" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <h3 className="friday">Fredag 11:00 - 21:00</h3>
                                <h3 className="saturday">Lördag 12:00 - 21:00</h3>
                                <h3 className="sunday">Söndag 12:00 - 21:00</h3>
                            </div>
                        </div>
                    </div>
                    <div className="adressKontakt">
                        <h1>Adress</h1>
                        <h3>Storgatan 41</h3>
                        <h3>921 31, Lycksele</h3>
                    </div>
                </div>

                <Footer />
            </div>
        );
}

export default Kontakt;