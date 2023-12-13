import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import IMG from '../../assets/4.jpg'
import Rating from './Rating.js'
import { Container } from 'react-bootstrap'
import imageHotel from '../../assets/hotelImg.jpg'

export default function HotelSearchResults({hotelsResults, destination, handleAddHotel}) {

    const arrayDataItems = hotelsResults!=null?hotelsResults.map((hotel)=>(
        <div key={hotel.hotelId} onClick={() => handleAddHotel(hotel.hotelId)} style={{ display: 'flex',flexDirection: 'column', gap: 2, margin: 20, borderColor: 'black', borderWidth: 2, borderStyle: 'solid', borderRadius: '50px', overflow: 'auto', padding: 20, maxWidth: '300px'}}>
            <img width='100%' height='200px' src={imageHotel} alt='Hotel image' style={{ alignSelf: 'center', borderColor: 'black', borderWidth: 10, borderRadius: '50px'}}/>
            <hr></hr>
            <h3 style={{ textAlign: 'center' }}><strong>{hotel.hotelName}</strong></h3>
            <p>Description<br/><small>{hotel.hotelDescription}</small></p>
            <p>Location<br/><small>{hotel.hotelCity}</small></p>
            <p>Rating<br/><small><Rating rating={hotel.rating}/></small></p>
            <p>Rooms<br/><small>{hotel.rooms.length}</small></p>
        </div>
    )):null

  return (
    <Container>
        <div>
            <h1>Results for '{destination}'</h1>
            <ul style={{ display:'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{hotelsResults==null?<p>NO RESULTS</p>:arrayDataItems}</ul>
        </div>
    </Container>
  )
}
