import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Homepage from './pages/Homepage';



function App() {
  return (
    <div>
      <SignUp />
       {/* <Login />  */}
      {/* <Homepage /> */}
      
    </div>
      //  <Routes>
      //     <Route path="/" element={<Homepage />} />
      //     <Route path="/login" element={<Login />} />
      //     <Route path="/signup" element={<SignUp />} />
      //     {/* Add more routes for other components */}
      //   </Routes>
  
  );
}

export default App;
