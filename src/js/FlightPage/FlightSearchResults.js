import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import IMG from '../../assets/4.jpg'
import { Container } from 'react-bootstrap'
import flightImg from '../../assets/FlightImg1.jpeg'

export default function FlightSearchResults({flightsResults, destination, source, handleAddFlight}) {

    const arrayDataItems = flightsResults!=null?flightsResults.map((flight)=>(
        <div onClick={() => handleAddFlight(flight.flightId)} style={{ flex: 1/3, display: 'flex', flexDirection: 'column', gap: 2, margin: 20, borderColor: 'black', borderWidth: 2, borderStyle: 'solid', borderRadius: '50px', overflow: 'hidden', padding: 20}}>
            <img width='100%' height='200px' src={flightImg} alt='Hotel image' style={{ alignSelf: 'center', borderColor: 'black', borderWidth: 10, borderRadius: '50px'}}/>
            <hr></hr>
            <h3 style={{ textAlign: 'center' }}><strong>{flight.name}</strong></h3>
            <p>Departure Time<br/><small>{flight.departure_time}</small></p>
            <p>Departure<br/><small>{flight.departure}</small></p>
            <p>Destination<br/><small>{flight.destination}</small></p>
        </div>
    )):null

  return (
    <Container>
        <div>
            <h1>Reasults for '{source}' to '{destination}'</h1>
            {console.log('flights: '+flightsResults)}
            <ul style={{ display:'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{flightsResults==''?<p>NO RESULTS</p>:arrayDataItems}</ul>
        </div>
    </Container>
  )
}
