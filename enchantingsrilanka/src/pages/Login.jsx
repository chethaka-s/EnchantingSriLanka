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
                            <button className='btn-google-hero'>
                                <div className='btn-google'>
                                    <div className='image-google'></div>
                                    <div className='text-google'>
                                            <span>Sign up with google</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
