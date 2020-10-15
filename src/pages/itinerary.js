
import React, { useState } from "react"
import Layout from "../components/layout"
import { GoogleMap, LoadScript, MarkerClusterer, Marker, InfoWindow } from '@react-google-maps/api';
import { Modal, Button } from "react-bootstrap"

export default function Itinerary() {

    const [ selected, setSelected ] = useState(null) // The selected pin location
    const [ spots, setSpots ] = useState([]) // All the selected locations
    const [ show, setShow ] = useState(false); // Control the state of the model (visible/hidden)

    const handleClose = () => setShow(false);

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
        setSelected(location)
        setShow(true)
    }

    function addSpot(location) {
        setSpots( spots.concat(location) )
        //TODO change the marker icon
        setShow(false);
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
                                            <div key={idx}>
                                                <Marker position={location} clusterer={clusterer} title={location.title} onClick={ () => { clickMarker(idx)}} />
                                            </div>
                                        ))
                                    }
                                </MarkerClusterer>
                            </GoogleMap>

                        </LoadScript>

                        { selected && 
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{selected.title}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    {selected.street}
                                </p>
                                <Button onClick={() => { addSpot(selected)} }>Add to List</Button>
                            </Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            </Modal.Footer>
                        </Modal>
                        }

                    </div>
                    <div className="col-sm-4">
                            {spots.length === 0 && 
                                <h3>Pick some places to go!</h3>
                            }

                            {spots.length > 0 && 
                                <>
                                <h3>Places to Visit</h3>
                                <ol>
                                {spots.map( (spot, idx) => {
                                    return (
                                        <li key={idx}>
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