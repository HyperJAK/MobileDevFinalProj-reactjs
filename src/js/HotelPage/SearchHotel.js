import React from 'react'
import hotelImg1 from '../../assets/hotelImg.jpg'

import './css/hotel.css'
import SearchBar from './SearchBar'
import styled from 'styled-components';
import HotelSearchResults from './HotelSearchResults'
import { useState } from 'react';
import axios from 'axios';

export default function SearchHotel() {

  const [hotelsResults,setHotelsResults] = useState([])
  const [destination, setDestination] = useState('');
  const [searching,setSearching] = useState(false);

    const parentDiv_style = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: '90%',
        height: '550px',
        margin: '40px auto',
        gap: '50px',
        paddingTop: '100px',
        backgroundImage: `url(${hotelImg1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '30px'
    }

    const childDiv_style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1px',
    }

    const searchHotels = () => {
      
      async function getData(){
        const info = {destination: destination}
        try{
            const hotelInfo = await axios.post(
                "http://localhost:4000/getAllHotels",
                info
            );
            // console.log(hotelInfo.data.data)
            setSearching(true)
            setHotelsResults(hotelInfo.data.data)
        }catch(error){
            // alert(error.response.data.error);
            setHotelsResults(null)
        }
    } 
    getData();  
    }

  return (
    <>
    <div style={parentDiv_style}>
      
      <div style={childDiv_style}>
                <h1 style={{fontFamily: 'Playfair Display', color: 'whitesmoke', textShadow: '0px 0px 10px rgba(0, 0, 0, 0.75)'}}><strong>Find the right hotel today</strong></h1>
            </div>
            <div style={childDiv_style}>
                <SearchBar destination={destination} setDestination={setDestination} searchHotels={searchHotels}/>
            </div>

    </div>
    { searching && <HotelSearchResults destination={destination} hotelsResults={hotelsResults}/>}
    </>
  )
}
