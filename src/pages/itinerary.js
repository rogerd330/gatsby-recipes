
import React, { useState } from "react"
import Layout from "../components/layout"
import { GoogleMap, LoadScript, MarkerClusterer, Marker, InfoWindow } from '@react-google-maps/api';

export default function Itinerary() {

    const [ spots, setSpots ] = useState([])

    const locations = [
        {lat: 28.3852, lng: -81.5639, title: 'Disney World', street: '123 Mickey Mouse Lane'},
        {lat: 28.5729, lng: -80.6490, title: 'Kenedy Space Center', street: '456 Space Drive'}
    ]

    const options = {
        imagePath:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
    }

    function clickMarker(idx) {
        const location = locations[idx];
        setSpots( spots.concat(location) )
    }

    const divStyle = {
        background: `white`,
        border: `1px solid #ccc`,
        padding: 15
      }
      
      const onLoad = infoWindow => {
        console.log('infoWindow: ', infoWindow)
      }

    return (
        <>
            <Layout>
                <h2>My Itinerary</h2>

                <div className="row">
                    <div className="col-sm-8">

                        <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_KEY}>

                            <GoogleMap mapContainerStyle={{width: '100%', height: '400px'}} center={{lat: 28.3852, lng: -81.5639}} zoom={7}>
                                <MarkerClusterer options={options}>
                                    {(clusterer) =>
                                        locations.map((location, idx) => (
                                            // <Marker key={idx} position={location} clusterer={clusterer} title={location.title} onClick={ () => { clickMarker(idx)}} />
                                            <InfoWindow
                                                onLoad={onLoad}
                                                position={location}
                                            >
                                                <div style={divStyle}>
                                                    <h1>InfoWindow</h1>
                                                    <p>
                                                        About this spot.
                                                        <button onClick={() => { clickMarker(idx)} }>Add to List</button>
                                                    </p>
                                                </div>
                                            </InfoWindow>
                                        ))
                                    }
                                </MarkerClusterer>
                            </GoogleMap>

                        </LoadScript>

                    </div>
                    <div className="col-sm-4">
                            {spots.length === 0 && 
                                <h3>Pick some places to go!</h3>
                            }

                            {spots.length > 0 && 
                                <>
                                <h3>Places to Visit</h3>
                                <ol>
                                {spots.map( spot => {
                                    return (
                                        <li>
                                            {spot.title}
                                            <br/>
                                            <small>{spot.street}</small>
                                        </li>
                                    )
                                })}
                                </ol>
                                </>
                            }
                    </div>

                </div>

            </Layout>
        </>
    )

}