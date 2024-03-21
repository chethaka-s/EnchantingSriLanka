import React from 'react'
import './css/signUP.css'

const SignUp = () => {
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
                <h1 className='textlogin-'>SIGN UP</h1>
            </center>
        <div className="s-container">
            <form action="">
                <div className="inputdiv">
                    <input type="text" placeholder='First Name' name="username" className ="username" />
                </div>
                <div className="inputdiv">
                    <input type="text" placeholder='Last Name' name="username" className ="username" />
                </div>
                <div className="inputdiv">
                    <input type="text" placeholder='Email' name="username" className ="username" />
                </div>



                <div className="side-inputdiv">
                    <div className="labal-con">
                        <label htmlFor="">Country</label>
                        <select name=""  className ="username3">
                            <option value="">Select</option>
                            <option value="">Sri lanka</option>
                            <option value="">India</option>
                        
                        </select>

                    </div>
                    <div className="labal-con">
                        <div className="labal-con">
                            <label htmlFor="">Contact No</label>
                            <input type="text" placeholder='' name="username" className ="username2" />
                        </div>
                    </div>

                </div>
                <div className="side-inputdiv">

                    <div className="labal-con">
                        <label htmlFor="">Date Of Birth</label>
                        <input type="date" placeholder='' name="username" className ="username2" />
                    </div>
                    <div className="labal-con">
                        <label htmlFor="">Gender</label>
                        <select name=""  className ="username3">
                            <option value="">Select</option>
                            <option value="">Male</option>
                            <option value="">Female</option>
                        
                        </select>
                    </div>
                    
                </div>
                <div className="side-inputdiv">
                    <div className="labal-con">
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password' name="username" className ="username2" />
                        
                    </div>

                    <div className="labal-con">
                        <label htmlFor="">Re-Enter Password</label>
                        <input type="password" placeholder='Password' name="username" className ="username2" />
                    </div>
                
                </div>


                
                <div className="input-bottom-div2">
                    <input type="submit" value="SIGN UP" className='submit-btn' />
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

export default SignUp
