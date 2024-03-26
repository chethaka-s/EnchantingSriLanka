import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Homepage from './pages/index';
import Travel from './pages/Homepage';
import Roads from './pages/RoutePlanner';
// import Routing from './pages/routing';
import Index from './pages/index';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutePlanner from './pages/RoutePlanner';



function App() {
  return (
    // <div>
    //   {/* <BrowserRouter>
    //   <Route index element={<Homepage/>}/>
      
    //   </BrowserRouter> */}
    // </div>
//       <Router>
//       <div>
// <Roads />
//       </div>
//       </Router>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/travels" element={<Travel />} />
              <Route path="/routes" element={<Roads />} />
            
             

            </Routes>
          </BrowserRouter>
     
  
  );
}

export default App;
