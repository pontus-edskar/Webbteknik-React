import React from "react";

import backgroundImage from '../html_code/background.png';
import '../html_code/main.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Meny(){
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
            <div className="menySplit">
                <div className="menyLeft">
                    <ul>
                        <li style={{ listStyleType: 'none' }}><span className="itemType">Pizzameny</span></li>
                        <li><span className="itemName">Margarita -</span> tomatsås, ost</li>
                        <li><span className="itemName">Vesuvio -</span> tomatsås, ost, skinka</li>
                        <li><span className="itemName">Capricciosa -</span> tomatsås, ost, skinka, champinjoner</li>
                        <li><span className="itemName">Havaii -</span> tomatsås, ost, skinka, ananas</li>
                        <li><span className="itemName">Bussola -</span> tomatsås, ost, skinka, räkor</li>
                        <li><span className="itemName">Piraten -</span> tomatsås, ost, skinka, lök, vitlök</li>
                        <li><span className="itemName">Romana -</span> tomatsås, ost, bacon, lök</li>
                        <li><span className="itemName">Bologna -</span> tomatsås, ost, köttfärs</li>
                        <li><span className="itemName">Tonno -</span> tomatsås, ost, tonfisk, lök</li>
                        <li><span className="itemName">Opera -</span> tomatsås, ost, skinka, tonfisk</li>
                        <li><span className="itemName">Marinara -</span> tomatsås, ost, tonfisk, räkor, champinjoner</li>
                        <li><span className="itemName">Vegetaria -</span> tomatsås, ost, champinjoner, lök, paprika, oliv, tomat</li>
                        <li><span className="itemName">Maxim -</span> tomatsås, ost, skinka, räkor, champinjoner</li>
                        <li><span className="itemName">Sicilliana -</span> tomatsås, ost, ansjovis, oliv, vitlök</li>
                        <li><span className="itemName">Balanzone -</span> tomatsås, ost, bacon, lök, paprika</li>
                        <li><span className="itemName">Sorento -</span> tomatsås, ost, köttfärs, paprika, lök, ägg</li>
                        <li><span className="itemName">Ouattro Stagioni -</span> tomatsås, ost, skinka, räkor, champinjoner, mussla</li>
                        <li><span className="itemName">Mama Mia -</span> tomatsås, ost, skinka, bacon, lök</li>
                        <li><span className="itemName">Venezia -</span> tomatsås, ost, skinka, köttfärs, lök</li>
                        <li><span className="itemName">Cattiatore -</span> tomatsås, ost, salami, oliv, paprika</li>
                        <li><span className="itemName">Tornero -</span> tomatsås, ost, räkor, crabfish, ananas</li>
                        <li><span className="itemName">Bahamas -</span> tomatsås, ost, skinka, ananas, bananer, curry</li>
                        <li><span className="itemName">Cuba -</span> tomatsås, ost, skinka, ananas, räkor</li>
                        <li><span className="itemName">Florence -</span> tomatsås, ost, salami, ananas, vitlök</li>  
                        <li><span className="itemName">Verona -</span> tomatsås, ost, köttfärs, bacon, lök, ägg</li>                                
                        <li><span className="itemName">Antonio -</span> tomatsås, ost, skinka, champinjoner, räkor, oliver, ägg</li>                                
                        <li><span className="itemName">Mexico -</span> tomatsås, ost, skinka, bacon, köttfärs</li>                                
                        <li><span className="itemName">Hot Pepper -</span> tomatsås, ost, skinka, salami, lök, pepperoni, starksås</li>                                
                        <li><span className="itemName">Laponia Pizza House -</span> tomatsås, ost, oxfilé, kantarell, lök, tomat, paprika, bearnaisesås</li>                                
                        <li><span className="itemName">El Paso -</span> tomatsås, ost, oxfilé, räkor, tomat, gorgonzolaost</li>                                
                        <li><span className="itemName">Festpizza 1 -</span> tomatsås, ost, oxfilé, tomat, lök, bearnaisesås, gorgonzolaost</li>                                
                        <li><span className="itemName">Festpizza 2 -</span> tomatsås, ost, oxfilé, tomat, bearnaisesås, gorgonzolaost</li>                                
                        <li><span className="itemName">La Gondola -</span> tomatsås, ost, oxfilé, tomat, bearnaisesås, ägg</li>                                
                        <li><span className="itemName">Maffia -</span> tomatsås, ost, oxfilé, champinjoner, lök, vitlök</li> 
                    </ul>
                </div>
                <div className="menyRight">
                    <ul>
                        <li style={{ listStyleType: 'none' }}><span className="itemType">Inbakad Pizza</span></li>
                        <li><span className="itemName">Calzone -</span> tomatsås, ost, skinka</li>
                        <li><span className="itemName">Disco Volante -</span> tomatsås, ost, skinka, räkor, champinjoner, ananas, dubbel deg</li>
                        <li><span className="itemName">Ciao Ciao -</span> halvinbakad, tomatsås, ost, oxfilé, lök, vitlök, bearnaisesås</li>
                        <li><span className="itemName">Castro -</span> tomatsås, ost, skinka, ananas, räkor</li>
                        <li><span className="itemName">Calzone Special -</span> tomatsås, ost, skinka, champinjoner, räkor</li>
                        <li><span className="itemName">Calzone Magnum -</span> dubbel deg och fyllning, tomatsås, ost, skinka</li>
                        <li style={{ listStyleType: 'none' }}><span className="itemType">Kebabmeny</span></li>
                        <li><span className="itemName">Kebabpizza -</span> tomatsås, ost, kebabkött, lök, tomat, pepperoni, sås</li>
                        <li><span className="itemName">Kebabrulle -</span> tomatsås, ost, kebabkött, rödlök, tomat, pepperoni, sallad, sås</li>
                        <li><span className="itemName">Istanbul Kebab -</span> tomatsås, rödlök, tomat, pepperoni, sallad, sås</li>
                        <li><span className="itemName">Grekisk Kebab -</span> bröd, fetaost, kebabkött, rödlök, tomat, pepperoni, sallad, sås</li>
                        <li><span className="itemName">Kebabtallrik -</span> kebabkött, pommes, sallad, sås, rödlök</li>
                        <li><span className="itemName">Mexico Kebabrulle -</span> tomatsås, ost, kebabkött, rödlök, tomat, pepperoni, rödlök, stark sås, kebab sås</li>
                        <li><span className="itemName">Superkebabrulle -</span> tomatsås, ost, kebabkött, sallad, tomat, pepperoni, rödlök, sås</li>
                        <li><span className="itemName">Superkebab -</span> kebabkött, rödlök, tomat, sallad pepperoni, sås</li>
                        <li style={{ listStyleType: 'none' }}><span className="itemType">Kycklingmeny</span></li>
                        <li><span className="itemName">Kycklingpizza Bahamas -</span> tomatsås, ost, kyckling, ananas, banan, curry, sås</li>
                        <li><span className="itemName">Kycklingpizza -</span> tomatsås, ost, kyckling, tomat, pepperoni, lök, sås</li>
                        <li><span className="itemName">Istanbull Kyckling -</span> bröd, kyckling, rödlök, tomat, pepperoni, sallad, sås</li>
                        <li><span className="itemName">Kycklingrulle -</span> tomatsås, ost, kyckling, tomat, rödlök, pepperoni, sallad ananas, sås</li>
                        <li><span className="itemName">Mexico Kycklingrulle -</span> tomatsås, ost, kyckling, sallad, tomat, lök, pepperoni, starksås, kebabsås</li>
                        <li><span className="itemName">Falafelrulle -</span> tomatsås, falafel, tomat, lök, pepperoni, sallad, vitlöksås</li>
                        <li><span className="itemName">Istanbul Falafel -</span> tomatsås, bröd, falafel, tomat, lök, pepperoni, sallad, sås</li>
                        <li><span className="itemName">Falafeltallrik -</span> falafel, pommes, tomat, lök, pepperoni, sallad vitlöksås</li>
                        <li><span className="itemName">Kycklingtallrik -</span> kyckling, rödlök, tomat, pepperoni, sallad, sås</li>
                        <li><span className="itemName">Mixrulle -</span> kebabkött, kyckling, lök, tomat, pepperoni, sallad, sås</li>
                        <li><span className="itemName">Mixtallrik -</span> kebabkött, kyckling, lök, tomat, pepperoni, sallad, sås</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Meny;