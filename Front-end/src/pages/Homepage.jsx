// src/components/HomePage.js
import React from 'react';
import './css/Homepage.css'; // Import the CSS file
import { FaMapMarkerAlt, FaGlobe, FaPhone } from 'react-icons/fa'; // Import icons from React Icons

function Homepage() {
    return (
    <div>
            {/* Logo and content */}
            <div className ='header-container'>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Logo */}
                    <img src="src\images\logoImage.png" alt="Logo" style={{ width: '220px', height: '220px', marginRight: '10px',color: 'darkpink'}} />

                    {/* First Header and paragraph */}
                    <div>
                    <h1 class="header-main-topic">GET SORTED WITH TRAVELS</h1>
                        <p class="header-subtopic">Select the Most comfortable way for you to travel in the Beautiful paradise of Sri Lanka...</p>
                    </div>
                </div>
            </div>

            {/* Second Header and paragraph */}
           
            <header>
                <h2 style={{ marginLeft:"189px"}}>TRAVEL COMPANIES</h2>

            </header>

            {/* Main Topic */}
            

            {/* Sub Topic 1 */}

            <div className="sub-topic">
                
                <div className="green-square aitken">
                    {/* <img src='src\images\aitken.jpg' alt='company-img' className='company-img'/> */}
                    </div> {/* Green square for sub topic 2 */}
                    <div className='comapny-det'>
                        <h4 className='company-det-name'>AITKEN SPENCE TRAVELS (PVT) LTD</h4>
                        <p className='company-det-desc'>Come join Aitken Spence Travels and discover the wonders of this enchanting island which offers something new to experience each time you visit. With our expertise and local knowledge, we can help arrange a tour package that suits your interests and one that showcases the very best of Sri Lanka.</p>
                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt style={{marginTop:'5px'}} />
                       <span style={{padding:'20px;', marginLeft:"5px"}}>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Phone: +123456789</span>
                    </div>
                </div>


                    </div>
                    
                </div>
            

            {/* Sub Topic 2 */}
           <div className="sub-topic">
                
                <div className="green-square aitken">
                    {/* <img src='src\images\aitken.jpg' alt='company-img' className='company-img'/> */}
                    </div> {/* Green square for sub topic 2 */}
                    <div className='comapny-det'>
                        <h4 className='company-det-name'>AITKEN SPENCE TRAVELS (PVT) LTD</h4>
                        <p className='company-det-desc'>Come join Aitken Spence Travels and discover the wonders of this enchanting island which offers something new to experience each time you visit. With our expertise and local knowledge, we can help arrange a tour package that suits your interests and one that showcases the very best of Sri Lanka.</p>
                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt style={{marginTop:'5px'}} />
                       <span style={{padding:'20px;', marginLeft:"5px"}}>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Phone: +123456789</span>
                    </div>
                </div>


                    </div>
                    
                </div>




            <header>
                <h2 style={{ marginLeft:"189px"}}>RENT YOUR OWN CAR</h2>
            </header>

           <div className="sub-topic">
                
                <div className="green-square aitken">
                    {/* <img src='src\images\aitken.jpg' alt='company-img' className='company-img'/> */}
                    </div> {/* Green square for sub topic 2 */}
                    <div className='comapny-det'>
                        <h4 className='company-det-name'>AITKEN SPENCE TRAVELS (PVT) LTD</h4>
                        <p className='company-det-desc'>Come join Aitken Spence Travels and discover the wonders of this enchanting island which offers something new to experience each time you visit. With our expertise and local knowledge, we can help arrange a tour package that suits your interests and one that showcases the very best of Sri Lanka.</p>
                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt style={{marginTop:'5px'}} />
                       <span style={{padding:'20px;', marginLeft:"5px"}}>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Phone: +123456789</span>
                    </div>
                </div>


                    </div>
                    
                </div>
            
            <div className="sub-topic">
                
                <div className="green-square aitken">
                    {/* <img src='src\images\aitken.jpg' alt='company-img' className='company-img'/> */}
                    </div> {/* Green square for sub topic 2 */}
                    <div className='comapny-det'>
                        <h4 className='company-det-name'>AITKEN SPENCE TRAVELS (PVT) LTD</h4>
                        <p className='company-det-desc'>Come join Aitken Spence Travels and discover the wonders of this enchanting island which offers something new to experience each time you visit. With our expertise and local knowledge, we can help arrange a tour package that suits your interests and one that showcases the very best of Sri Lanka.</p>
                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt style={{marginTop:'5px'}} />
                       <span style={{padding:'20px;', marginLeft:"5px"}}>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Phone: +123456789</span>
                    </div>
                </div>


                    </div>
                    
                </div>
            
        

            <header>
                <h2 style={{ marginLeft:"189px"}}>GET IN TOUCH WITH A PROFESSIONAL TO GUIDE YOU AROUND SRI LANKA</h2>
            </header>

            {/* Main Topic */}
            

            {/* Sub Topic 1 */}

   <div className="sub-topic">
                
                <div className="green-circle aitken">
                    {/* <img src='src\images\aitken.jpg' alt='company-img' className='company-img'/> */}
                    </div> {/* Green square for sub topic 2 */}
                    <div className='comapny-det'>
                        <h4 className='company-det-name'>AITKEN SPENCE TRAVELS (PVT) LTD</h4>
                        <p className='company-det-desc'>Come join Aitken Spence Travels and discover the wonders of this enchanting island which offers something new to experience each time you visit. With our expertise and local knowledge, we can help arrange a tour package that suits your interests and one that showcases the very best of Sri Lanka.</p>
                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt style={{marginTop:'5px'}} />
                       <span style={{padding:'20px;', marginLeft:"5px"}}>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Phone: +123456789</span>
                    </div>
                </div>


                    </div>
                    
                </div>
            
            <div className="sub-topic">
                
                <div className="green-circle aitken">
                    {/* <img src='src\images\aitken.jpg' alt='company-img' className='company-img'/> */}
                    </div> {/* Green square for sub topic 2 */}
                    <div className='comapny-det'>
                        <h4 className='company-det-name'>AITKEN SPENCE TRAVELS (PVT) LTD</h4>
                        <p className='company-det-desc'>Come join Aitken Spence Travels and discover the wonders of this enchanting island which offers something new to experience each time you visit. With our expertise and local knowledge, we can help arrange a tour package that suits your interests and one that showcases the very best of Sri Lanka.</p>
                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt style={{marginTop:'5px'}} />
                       <span style={{padding:'20px;', marginLeft:"5px"}}>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Phone: +123456789</span>
                    </div>
                </div>


                    </div>
                    
                </div>
            
            <div className="sub-topic">
                
                <div className="green-circle aitken">
                    {/* <img src='src\images\aitken.jpg' alt='company-img' className='company-img'/> */}
                    </div> {/* Green square for sub topic 2 */}
                    <div className='comapny-det'>
                        <h4 className='company-det-name'>AITKEN SPENCE TRAVELS (PVT) LTD</h4>
                        <p className='company-det-desc'>Come join Aitken Spence Travels and discover the wonders of this enchanting island which offers something new to experience each time you visit. With our expertise and local knowledge, we can help arrange a tour package that suits your interests and one that showcases the very best of Sri Lanka.</p>
                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt style={{marginTop:'5px'}} />
                       <span style={{padding:'20px;', marginLeft:"5px"}}>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone style={{marginTop:'5px'}} />
                        <span style={{padding:'20px;', marginLeft:"5px"}}>Phone: +123456789</span>
                    </div>
                </div>


                    </div>
                    
                </div>
            

        <div>
                  
                  {/* Logo */}
                  {/* <img src="src\images\logoImage.png" alt="Logo" style={{ width: '200px', height: '200px', marginLeft: '300px',color: 'darkpink'}} />
           
                  <footer class="App-footer">
  <a href="https://contactus.example.com">Contact Us</a>
  <a href="https://careersuk.example.com">My account</a>
  <a href="https://careerssl.example.com">Homepage</a>
</footer> */}

                 
                </div>
       
</div>
      
  )
}

export default Homepage