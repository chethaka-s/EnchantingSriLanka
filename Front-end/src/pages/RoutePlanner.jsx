import { FaLocationArrow, FaTimes } from 'react-icons/fa';
import './css/Routing.css';
import calculateFares from './FareCalculator';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  useLoadScript,
} from '@react-google-maps/api'
import { useRef, useState, useEffect } from 'react'

const center = { lat: 6.9271, lng: 79.8612 }


// const apiKey = import.meta.env.MY_API_KEY;
// const area = "Colombo, Sri Lanka"
 



function RoutePlanner() {
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: import.meta.env.MY_API_KEY,
    googleMapsApiKey: "AIzaSyBsVZ-ttXw-FWXh77l1AR0tx8yKi3ze9gY",
    libraries: ['places'],
  })

  const options = {
    componentRestrictions: { country: 'lk' }, // Replace 'us' with your desired country code
  };

  const [map, setMap] = useState(null)
  const [directionsResponse, setDirectionsResponse] = useState(null)
  const [distance, setDistance] = useState('')
  const [duration, setDuration] = useState('')
  const [destinationInputs, setDestinationInputs] = useState([{ key: 0 }])

  const originRef = useRef()
  const destinationRefs = useRef([])
  const distancetaxi = {distance}/* Replace with your logic to fetch distance using Google Maps API */;  // Assuming distance is pre-calculated

  const fares = calculateFares(distance);

  if (!isLoaded) {
    return <p>loading</p>
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destinationRefs.current.some(ref => ref.value === '')) {
      return
    }

    const waypoints = destinationRefs.current.map(ref => ({ location: ref.value, stopover: true }))

    const directionsService = new window.google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: originRef.current.value, // Assuming destination is the same as origin
      waypoints,
      travelMode: window.google.maps.TravelMode.DRIVING,
    })

    setDirectionsResponse(results)
    const totalDistance = results.routes[0].legs.reduce((total, leg) => total + leg.distance.value, 0)
    setDistance((totalDistance / 1000).toFixed(2)) // Convert meters to kilometers and round to 2 decimal places
    setDuration(results.routes[0].legs.reduce((total, leg) => total + leg.duration.value, 0))
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destinationRefs.current.forEach(ref => ref.value = '')
  }

  function addDestinationInput() {
    setDestinationInputs([...destinationInputs, { key: destinationInputs.length }])
  }




  return (
     <><><div className='header-container'>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <img src="src\images\logoImage.png" alt="Logo" style={{ width: '220px', height: '220px', marginRight: '10px', color: 'darkpink' }} />

        {/* First Header and paragraph */}
        <div>
          <h1 class="header-main-topic">GET SORTED WITH TRAVELS</h1>
          <p class="header-subtopic">Select the Most comfortable way for you to travel in the Beautiful paradise of Sri Lanka...</p>
        </div>
      </div>
    </div>


      <div className='main-container'>
        <h1>LETS GET PLANNING</h1>
        <div className='directions-box'>

          <div className='route-box'>
            <p className='input-heading'>Origin</p>
            <Autocomplete options={options}>
              <input type='text' placeholder='Origin' ref={originRef} className='route-input' />
            </Autocomplete>

            {destinationInputs.map((input, index) => (
              <div key={input.key}>
                <p className='input-heading'>Destination {index + 1}</p>
                <Autocomplete options={options}>
                  <input
                    type='text'
                    placeholder='Destination'
                    className='route-input'
                    ref={ref => destinationRefs.current[index] = ref} />
                </Autocomplete>
              </div>
            ))}

            <button className='button-route spec' type='button' onClick={addDestinationInput}>
              Add Destination
            </button>

            <button className='button-route' type='submit' onClick={calculateRoute}>
              Calculate Route
            </button>
            <button className='button-route' type='button' onClick={clearRoute}>
              Clear Route
            </button>
            <div className='route-info'>
              <h4>Total Distance: {distance} km</h4>
              <p className='route-info-small'>**This Total distance may vary According to the road conditions and traffic conditions</p>
              {/* <h4>Duration: {duration} seconds</h4> */}
            </div>
          </div>




          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '600px', height: '600px' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>

        </div>
    
        
        
          <div className='fare-calc'>
      <h1>Fare Calculator</h1>
      {distance && (
        <div>
          <p>Distance: {distance} km</p>
          <h2>Fare Estimation</h2>
          <div className='div-adj' >
          <ul className='card-arr'>
            {Object.keys(fares).map((vehicleType) => (
              <div className='card-taxi'>
              <p className='card-heading'>{vehicleType}</p>
              
              <img src='https://www.svgrepo.com/show/431231/route.svg' className='card-img'/>
               <p className='card-body'> Rs. {fares[vehicleType]}</p>
              
              </div>
            ))}
          </ul>
          </div>
        </div>
      )}
      {!distancetaxi && <p>Please calculate the distance first.</p>}
    </div>
      </div></>
      
     
    
      </>

      
  )

 
}

export default RoutePlanner;
