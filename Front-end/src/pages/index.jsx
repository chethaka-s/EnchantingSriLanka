import React from 'react'
import './css/index.css'


function index(){

    return (
        <div className="home-page" content="width=device-width, initial-scale=1.0">
        <main className="main">
        <div className="headline">
        <img className='cimg2' src='./images/cimage2.png'/>
            <div id="head2" >
            <h2 className="heading">DISCOVER SRI LANKA <br/>YOUR TAILORED JOURNEY AWAITS</h2>
            
            <button id="button01">Click To Plan!!!!</button>
            </div>
        </div>
        <div className="topic-container">
            <div className="topic">TOP TRENDS IN SRI LANKA</div>
        </div>
        <section className="trends" content="width=device-width, initial-scale=1.0">
        <div class="row">
            <div className="column1">
                <div className="card">
                <h3>Ella</h3>
                <img className='img' src='./images/ella.png'/>
                <p className='para'>Ella is surrounded by hills covered with cloud forests
                and tea plantations. The town has a cooler climate 
                than surrounding lowlands, due to its elevation. 
                The Ella Gap allows views across the southern plains 
                of Sri Lanka. On a sunny morning, you can even see the 
                glow from the lighthouses along the southern coast.
                </p>
                <button className='button02'>Add to Tour</button>
                <br/>
                <button className='button03'>Read</button>
                </div>
            </div>

        <div class="column1">
            <div class="card">
                <h3>SIGIRIYA</h3>
                <img className='img'  src='./images/sigiriya.png'/>
                <p className='para'>Sigiriya is one of the most valuable historical monuments 
                    of Sri Lanka. Referred by locals as the Eighth Wonder 
                    of the World, this ancient palace and fortress complex 
                    has significant archaeological importance and attracts 
                    thousands of tourists annually. It is probably the most 
                    visited tourist destination in Sri Lanka.</p>
                    <button className='button02'>Add to Tour</button>
                <br/>
                <button className='button03'>Read</button>
            </div>
        </div>

        <div class="column1">
            <div class="card">
                <h3>GALLE</h3>
                <img className='img' src='./images/galle.png'/>
                <p className='para'>Today, the Galle Fort is a designated World Heritage 
                    site and is the largest remaining colonial-era fortress 
                    in all of Asia. Most visitors to Galle stick to the town 
                    and surrounding beaches, although there are a handful of rewarding 
                    inland excursions if you fancy a change from the coast, all 
                    attesting to Galle's self-proclaimed status as “Rainforest Capital 
                    of Sri Lanka”.</p>
                    <button className='button02'>Add to Tour</button>
                <br/>
                <button className='button03'>Read</button>
            </div>
        </div>
        </div>
        </section>


        <section className="trends">
        <div className="topic-container">
            <div className="topic">ADVENTURES TO DO</div>
        </div>

        <div class="row">
            <div className="column1">
                <div className="card">
                <h3>Boat Surfing</h3>
                <img className='img' src='./images/adimg2.png'/>
                <p className='para'>As you paddle past the town, Kitulgala's high 
                riverbank is fringed by tall, beautiful bamboo trees that sway gently 
                as if to wave you onward. The entire experience takes around 90 minutes to enjoy, 
                with the five rapids along the river having been graded between a 2 or 3.
                </p>
                <button className='button02'>Add to Tour</button>
                <br/>
                <button className='button03'>Read</button>
                </div>
            </div>

        <div class="column1">
            <div class="card">
                <h3>Under Water Diving</h3>
                <img className='img' id='adimg' src='./images/adimg1.png'/>
                <p className='para'>The main attractions in Unawatuna and in 
                Sri Lanka are a lot of wrecks around the coast line suitable for all diving levels. 
                We offer diving at the famous Wreck “RANGOON” that does down to 30 meters, the Wreck 
                SS Orestes that goes down to 22 meters, and the Galle Ship Wreck at around 18 meters.</p>
                    <button className='button02'>Add to Tour</button>
                <br/>
                <button className='button03'>Read</button>
            </div>
        </div>

        <div class="column1">
            <div class="card">
                <h3>Wild Life Exploring</h3>
                <img className='img' src='./images/adimg3.png'/>
                <p className='para'>Yala was designated as a wildlife sanctuary in 1900, 
                along with Wilpattu, designated in 1938, as the first two designated national parks in Sri Lanka. 
                The park is best known for its variety of wildlife and is important conservation of Sri Lankan elephants, 
                Sri Lankan leopards and aquatic birds.</p>
                    <button className='button02'>Add to Tour</button>
                <br/>
                <button className='button03'>Read</button>
            </div>
        </div>
        </div>
        </section>


        </main>
        <footer>
            <div class="text">Contact Us</div>
            <div class="text">Email: admin@gmail.com</div>
            <div class="text">All rights reserved Enchanting Sri Lanka</div>
        </footer>
        </div>

    
    )
}

export default index