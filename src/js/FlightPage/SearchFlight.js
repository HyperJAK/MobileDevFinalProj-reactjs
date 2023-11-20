import React from 'react'
import FlightImg1 from '../../assets/FlightImg1.jpeg'
import FlightSearchBar from './FlightSearchBar'
import styled from 'styled-components';



export default function SearchFlight(){
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

  return (
    <div style={parentDiv_style}>
      
      <div style={childDiv_style}>
                <h1 style={{fontFamily: 'Playfair Display', color: 'whitesmoke', textShadow: '0px 0px 10px rgba(0, 0, 0, 0.75)'}}><strong>Find the right Flight today</strong></h1>

            </div>
            <div style={childDiv_style}>
                <FlightSearchBar />
            </div>

    </div>
  )
}