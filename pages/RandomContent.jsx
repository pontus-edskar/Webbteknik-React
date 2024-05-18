import React, { useState } from 'react';

import backgroundImage from "../html_code/background.png";
import initial from "../html_code/bild5Galleri.png";
import change from "../html_code/bild2Galleri.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RandomContent() {
    //Set initial color and image
    const [divColor, setDivColor] = useState('#ffffff'); 
    const [imageSrc, setImageSrc] = useState(initial);

    //event for color change
    const handleColorChange = (event) => {
        //value for new color 
        const newColor = event.target.value;
        //update state with new color
        setDivColor(newColor); 
    };

    //New image
    const changeImage = () => {
        setImageSrc(change);
    };

    //Change back to inital image
    const resetImage = () => {
        setImageSrc(initial);
    };

    //Like button with two states
    const [isLiked, setIsLiked] = React.useState(false);
    const toggleLike = () => {
        setIsLiked(currentState => !currentState);
    };


    return (
        <div style={{
            backgroundImage: `url(${backgroundImage})`,
            width: '100vw',
            height: '100vh',
            overflow: 'auto'
        }}>
            <Header />
            <label htmlFor="colorPicker" style={{ marginLeft: '10vw' }}>Choose Div Color: </label>
            <input type="color" id="colorPicker" onChange={handleColorChange} />

            <div style={{
                backgroundColor: divColor, 
                width: '200px', 
                height: '200px',
                margin: '20px auto' 
            }} />

            <div className="changeImgJs">
                <img
                    src={imageSrc}
                    id="onMouseOverImg"
                    alt="Picture"
                    onMouseOver={changeImage}
                    onMouseOut={resetImage}
                    style={{ width: '50%' }}
                />
            </div>

            <button onClick={toggleLike} className={ isLiked ? 'liked' : ''}>
                {isLiked ? 'Gillad' : 'Gilla'}
            </button>
            <Footer />
        </div>
    );
}

export default RandomContent;
