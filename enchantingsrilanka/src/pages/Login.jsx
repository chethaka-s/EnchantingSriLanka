import React from 'react'
import './css/Login.css'



const Login = () => {
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
                    <form action="">
                        <div className="inputdiv">
                            <label htmlFor="" className='l-text'>username</label>
                            <input type="text" name="username" className ="username" />
                        </div>
                        <div className="inputdiv">
                            <label htmlFor="" className='l-text'>password</label>
                            <input type="text" name="username" className ="username" />
                        </div>
                        
                        <div className="input-bottom-div">
                            <input type="submit" value="Login" className='submit-btn' />
                           
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
