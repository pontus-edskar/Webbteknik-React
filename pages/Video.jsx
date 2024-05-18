import React from "react";
import Footer from '../components/Footer'
import Header from '../components/Header'

import backgroundImage from '../html_code/background.png';
import testVideo from '../html_code/video.mp4';
import '../html_code/main.css';




function Video() {
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
    
          <div className="video">
            <video className="videoRotated" controls>
              <source src={testVideo} type="video/mp4" style={{ transform: 'rotate(-90deg)' }} />
              Your browser does not support the video tag.
            </video>
          </div>
    
          <div className="tableExample">
            <table>
              <thead>
                <tr>
                  <th>Data nr 1</th>
                  <th>Data nr 2</th>
                  <th>Data nr 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Data nr 4</td>
                  <td>Data nr 5</td>
                  <td>Data nr 6</td>
                </tr>
                <tr>
                  <td>Data nr 7</td>
                  <td>Data nr 8</td>
                  <td>Data nr 9</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Footer />
        </div>
      );
}

export default Video;