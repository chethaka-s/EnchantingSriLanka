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
                    <img src="src\images\logoImage.png" alt="Logo" style={{ width: '200px', height: '200px', marginRight: '10px',color: 'darkpink'}} />

                    {/* First Header and paragraph */}
                    <div>
                    <h1>GET SORTED WITH TRAVELS</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>

            {/* Second Header and paragraph */}
           
            <header>
                <h2>TRAVEL COMPANIES</h2>

            </header>

            {/* Main Topic */}
            

            {/* Sub Topic 1 */}

            <div className="sub-topic">
                
                <div className="green-square"></div> {/* Green square for sub topic 2 */}
                    <div>
                        <h4>Sub Topic 1</h4>
                        <p>This is the content for sub topic 1</p>
                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt />
                        <span>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe />
                        <span>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone />
                        <span>Phone: +123456789</span>
                    </div>
                </div>


                    </div>
                    
                </div>
            

            {/* Sub Topic 2 */}
            <div className="sub-topic">
                
            <div className="green-square"></div> {/* Green square for sub topic 2 */}
                <div>
                    <h4>Sub Topic 2</h4>
                    <p>This is the content for sub topic 2.</p>


                    <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt />
                        <span>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe />
                        <span>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone />
                        <span>Phone: +123456789</span>
                    </div>
                </div>
                </div>
                
            </div>




            <header>
                <h2>RENT YOUR OWN CAR</h2>
            </header>

            {/* Main Topic */}
            

            {/* Sub Topic 1 */}

            <div className="sub-topic">
                
                <div className="green-square"></div> {/* Green square for sub topic 2 */}
                    <div>
                        <h4>Sub Topic 1</h4>
                        <p>This is the content for sub topic 1</p>

                        <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt />
                        <span>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe />
                        <span>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone />
                        <span>Phone: +123456789</span>
                    </div>
                </div>
                    </div>
                    
                </div>
            

            {/* Sub Topic 2 */}
            <div className="sub-topic">
                
            <div className="green-square"></div> {/* Green square for sub topic 2 */}
                <div>
                    <h4>Sub Topic 2</h4>
                    <p>This is the content for sub topic 2.</p>

                    <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt />
                        <span>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe />
                        <span>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone />
                        <span>Phone: +123456789</span>
                    </div>
                </div>
                </div>
                
            </div>
        

            <header>
                <h2>GET IN TOUCH WITH A PROFESSIONAL TO GUIDE YOU AROUND SRI LANKA</h2>
            </header>

            {/* Main Topic */}
            

            {/* Sub Topic 1 */}

            <div className="sub-topic">
                
            <div className="green-circle"></div> {/* Green square for sub topic 2 */}
                    <div>
                        <h4>Sub Topic 1</h4>
                        <p>This is the content for sub topic 1</p>
                    
                    
                
            

            {/* Sub Topic 2 */}
            <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt />
                        <span>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe />
                        <span>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone />
                        <span>Phone: +123456789</span>
                    </div>
                </div>
                {/* Green square for sub topic 1 */}
                
        </div>
        </div>

       
        <div className="sub-topic">
                
        <div className="green-circle"></div>{/* Green square for sub topic 2 */}
                    <div>
                        <h4>Sub Topic 1</h4>
                        <p>This is the content for sub topic 1</p>
                    
                    
                
            

            {/* Sub Topic 2 */}
            <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt />
                        <span>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe />
                        <span>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone />
                        <span>Phone: +123456789</span>
                    </div>
                </div>
                {/* Green square for sub topic 1 */}
                
        </div>
        </div>

       
        <div className="sub-topic">
                
        <div className="green-circle"></div>
                    <div>
                        <h4>Sub Topic 1</h4>
                        <p>This is the content for sub topic 1</p>
                    
                    
            {/* Sub Topic 2 */}
            <div className="icon-descriptions-container">
                    <div className="icon-description">
                        <FaMapMarkerAlt />
                        <span>Location: Colombo, Sri Lanka</span>
                    </div>
                    <div className="icon-description">
                        <FaGlobe />
                        <span>Website: www.example.com</span>
                    </div>
                    <div className="icon-description">
                        <FaPhone />
                        <span>Phone: +123456789</span>
                    </div>
                    
                </div>
                {/* Green square for sub topic 1 */}
                <div>
             
                </div>
        </div>
        </div>

        <div>
                  
                  {/* Logo */}
                  <img src="src\images\logoImage.png" alt="Logo" style={{ width: '200px', height: '200px', marginLeft: '300px',color: 'darkpink'}} />
           
                  <footer class="App-footer">
  <a href="https://contactus.example.com">Contact Us</a>
  <a href="https://careersuk.example.com">My account</a>
  <a href="https://careerssl.example.com">Homepage</a>
</footer>

                 
                </div>
       
</div>
      
  )
}

export default Homepage