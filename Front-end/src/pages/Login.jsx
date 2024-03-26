import React, { useState,useEffect } from 'react'
import './css/Login.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';




function Login() {

      const navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.post('http://localhost:8080/api/auth/signin', {
        username,
        password,
      });

    

      // Handle successful login (e.g., redirect, store JWT token)
      console.log('Login successful:', response.data.email);
      // ... your application logic after successful login

      const token = response.data.token; // Replace with your token extraction logic

      // Store token in localStorage (or a more secure mechanism)
      localStorage.setItem('authToken', token);

      // Redirect to the desired page after a successful login
        if (response.data) {
        navigate('/',{ state: { emaill: response.data.email } })
      }

    } catch (error) {
      if (error.response) {
        // Handle specific error codes from Spring Boot API
        if (error.response.status === 401) {
          setErrorMessage('Invalid email or password');
        } else {
          setErrorMessage('An error occurred. Please try again later.');
        }
      } else {
        setErrorMessage('Network error. Please check your connection.');
      }
    }
  };

//    useEffect(() => {
//     const storedToken = localStorage.getItem('authToken');
//     if (storedToken) {
//       navigate('/RoutePlanner'); // Redirect if token exists on component mount
//     }
//   }, [navigate]); // Include navigate in dependency array




    return (
        <div className='container'>
            <div className='left-container'>
                <div className="top-l-container">
            
                        <div className="bigImage"></div>
                
                </div>
                <div className="bottom-l-container">
                        <div className="smallImage"></div>
                </div>
            </div>
            <div className='right-container'>
                <br />
                <br />
                    <center>
                        <h1 className='textlogin-'>Login</h1>
                    </center>
                <div className="r-container">
                    <form onSubmit={handleSubmit}>
                        <div className="inputdiv">
                            <label htmlFor="" className='l-text'>username</label>
                            <input type="text" name="username" className ="username" value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                 required/>
                        </div>
                        <div className="inputdiv">
                            <label htmlFor="" className='l-text'>password</label>
                            <input type="password" name="username" className ="username"                              
                            value={password}
                             onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        
                        <div className="input-bottom-div">
                            <button type="submit" className='submit-btn'>Login</button>
                            <Link to="/about">Go to About Page</Link>
                           
                        </div>
                          {errorMessage && <div className="error-message">{errorMessage}</div>}
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
