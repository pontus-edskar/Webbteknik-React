import React from "react";
import Footer from '../components/Footer'
import Header from '../components/Header'

import backgroundImage from '../html_code/background.png';
import '../html_code/main.css';


function Bestall() {
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
            <div className="orderMainBody" style={{display: 'flex', marginBottom: '10%'}}>
                <div className="orderSplitt">
                    <div className="orderLeft">
                        <ul>
                            <li style={{listStyleType: 'none'}}><span className="itemType">Pizzameny</span></li>
                            <li className="menyItem">Margarita</li>
                            <li className="menyItem">Vesuvio </li>
                            <li className="menyItem">Capricciosa </li>
                            <li className="menyItem">Havaii </li>
                            <li className="menyItem">Bussola </li>
                            <li className="menyItem">Piraten </li>
                            <li className="menyItem">Romana </li>
                            <li className="menyItem">Bologna </li>
                            <li className="menyItem">Tonno </li>
                            <li className="menyItem">Opera </li>
                            <li className="menyItem">Marinara </li>
                            <li className="menyItem">Vegetaria </li>
                            <li className="menyItem">Maxim </li>
                            <li className="menyItem">Sicilliana </li>
                            <li className="menyItem">Balanzone </li>
                            <li className="menyItem">Sorento </li>
                            <li className="menyItem">Ouattro Stagioni</li>
                            <li className="menyItem">Mama Mia </li>
                            <li className="menyItem">Venezia </li>
                            <li className="menyItem">Cattiatore </li>
                            <li className="menyItem">Tornero </li>
                            <li className="menyItem">Bahamas </li>
                            <li className="menyItem">Cuba </li>
                            <li className="menyItem">Florence </li>
                            <li className="menyItem">Verona </li>
                            <li className="menyItem">Antonio</li>
                            <li className="menyItem">Mexico</li>
                            <li className="menyItem">Hot Pepper </li>
                            <li className="menyItem">Laponia Pizza House </li>
                            <li className="menyItem">El Paso </li>
                            <li className="menyItem">Festpizza 1 </li>
                            <li className="menyItem">Festpizza 2 </li>
                            <li className="menyItem">La Gondola </li>
                            <li className="menyItem">Maffia </li>
                        </ul>
                    </div>
                    <div className="orderRight">
                        <ul className="customOrder">
                            <li style={{listStyleType: 'none'}}><span className="itemType">Inbakad Pizza</span></li>                        
                            <li className="menyItem">Calzone </li>
                            <li className="menyItem">Disco Volante </li>
                            <li className="menyItem">Ciao Ciao </li>
                            <li className="menyItem">Castro </li>
                            <li className="menyItem">Calzone Special </li>
                            <li className="menyItem" style={{ marginBottom: '8%' }}>Calzone Magnum </li>
                            <li style={{listStyleType: 'none'}}><span className="itemType">Kebabmeny</span></li>                        
                            <li className="menyItem">Kebabpizza </li>
                            <li className="menyItem">Kebabrulle </li>
                            <li className="menyItem">Istanbul Kebab </li>
                            <li className="menyItem">Grekisk Kebab </li>
                            <li className="menyItem">Kebabtallrik </li>
                            <li className="menyItem">Mexico Kebabrulle </li>
                            <li className="menyItem">Superkebabrulle </li>
                            <li className="menyItem" style={{ marginBottom: '8%' }}>Superkebab </li>
                            <li style={{listStyleType: 'none'}}><span className="itemType">Kycklingmeny</span></li>                                                    
                            <li className="menyItem">Kycklingpizza Bahamas </li>
                            <li className="menyItem">Kycklingpizza </li>
                            <li className="menyItem">Istanbull Kyckling </li>
                            <li className="menyItem">Kycklingrulle </li>
                            <li className="menyItem">Mexico Kycklingrulle </li>
                            <li className="menyItem">Falafelrulle </li>
                            <li className="menyItem">Istanbul Falafel </li>
                            <li className="menyItem">Falafeltallrik </li>
                            <li className="menyItem">Kycklingtallrik </li>
                            <li className="menyItem">Mixrulle </li>
                            <li className="menyItem">Mixtallrik </li>
                        </ul>
                    </div>
                </div>
                <div className="rightSideOfOrder">
                        <div className="orderName">
                                <label htmlFor="userInput1" className="textBoxName"></label>
                                <textarea name="userInput" id="userInput1" cols="30" rows="10" placeholder="Namn..."></textarea>
                        </div>
                        <div className="orderInfo">
                                <label htmlFor="userInput2" className="textBoxInfo"></label>
                                <textarea name="userInput" id="userInput2" cols="30" rows="10" placeholder="Kontakt information..."></textarea>
                        </div>
                        <div className="wayOfDelivery">
                                <label className="pickUpOrDelivery">
                                        <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                        Hämta
                                </label>
                                <label className="pickUpOrDelivery">
                                        <input type="checkbox"/>
                                        <span className="checkmark"></span>
                                        Leverans
                                </label>
                        </div>
                        <div className="orderAdress">
                                <label htmlFor="userInput3" className="textBoxAdress"></label>
                                <textarea name="userInput" id="userInput3" cols="30" rows="10" placeholder="Adress..."></textarea>
                        </div>
                        <div className="sendOrderButton">
                                <button className="sendButton" id="showMessageButton">Skicka</button>
                        </div>

                </div>
            </div>
        <Footer />
        </div>
    );
}

export default Bestall;