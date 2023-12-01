import React from 'react'
import FlightImg1 from '../../assets/FlightImg1.jpeg'
import FlightSearchBar from './FlightSearchBar'
import styled from 'styled-components';
import { useState } from 'react';
import FlightSearchResults from './FlightSearchResults'
import axios from 'axios';
import { useEffect } from 'react';



export default function SearchFlight(){

  const [flightsResults,setFlightsResults] = useState(null)
  const [flights,setFlights] = useState([])
  const [destination, setDestination] = useState('');
  const [source, setSource] = useState('');
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
        backgroundImage: `url(${FlightImg1})`,
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
    useEffect(() => {
      async function getData(){
        try{
            const flightsInfo = await axios.post(
                "http://localhost:4000/getAllFlights"
            );
            // console.log(hotelInfo.data.data)
            setFlights(await flightsInfo.data.data)
            console.log(flights)
        }catch(error){
            // alert(error.response.data.error);
            setFlights(null)
        }
    } 
    getData();  
    }, [])

    const searchFlights = () => {
      const tmp = flights.filter((element) => element.departure == source)
      setFlightsResults(tmp.filter((element)=> element.destination == destination))
      console.log(flightsResults)
      setSearching(true)
    }

  return (
    <>
      <div style={parentDiv_style}>
        
        <div style={childDiv_style}>
                  <h1 style={{fontFamily: 'Playfair Display', color: 'whitesmoke', textShadow: '0px 0px 10px rgba(0, 0, 0, 0.75)'}}><strong>Find the right Flight today</strong></h1>

              </div>
              <div style={childDiv_style}>
                  <FlightSearchBar  destination={destination} setDestination={setDestination} source={source} setSource={setSource} searchFlights={searchFlights}/>
              </div>

      </div>
      { searching && <FlightSearchResults destination={destination} source={source} flightsResults={flightsResults}/>}
    </>
  )
}