import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Meny from './pages/Meny';
import HomePage from './pages/HomePage';
import Kontakt from './pages/Kontakt';
import OmOss from './pages/OmOss';
import Bestall from './pages/Bestall';
import Video from './pages/Video';
import RandomContent from "./pages/RandomContent";
import './html_code/main.css';

function App() {

  return (
    <div>
      <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />}/>            
            <Route path="/pages/Meny" element={<Meny/>}/>      
            <Route path="/pages/Kontakt" element={<Kontakt/>}/>            
            <Route path="/pages/OmOss" element={<OmOss/>}/>
            <Route path="/pages/Bestall" element={<Bestall/>}/>
            <Route path="/pages/Video" element={<Video/>}/>
            <Route path="/pages/HomePage" element={<HomePage/>}/>
            <Route path="/pages/RandomContent" element={<RandomContent/>}/>
          </Routes>
      </Router>
      </div>
  );
}

export default App
