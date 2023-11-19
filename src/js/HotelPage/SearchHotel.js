import React from 'react'
import hotelImg1 from '../../assets/hotelImg.jpg'

import './hotel.css'
import SearchBar from './SearchBar'
import styled from 'styled-components';

export default function SearchHotel() {

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

  return (
    <div style={parentDiv_style}>
      
      <div style={childDiv_style}>
                <h1 style={{fontFamily: 'Playfair Display', color: 'whitesmoke', textShadow: '0px 0px 10px rgba(0, 0, 0, 0.75)'}}><strong>Find the right hotel today</strong></h1>

            </div>
            <div style={childDiv_style}>
                <SearchBar />
            </div>

    </div>
  )
}
