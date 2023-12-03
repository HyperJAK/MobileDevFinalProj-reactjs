import React from 'react'
import SearchHotel from './SearchHotel'
import HomeBody1 from '../HomePage/HomeBody1'
import HotelBody2 from './HotelBody2'
import {SplineHotelScene} from '../App';
import {OverDesignText} from "../OverDesignText";
import HotelsData from './HotelsData';

const FullNav_style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    maxWidth: '3000px',
    margin: '0 auto'
}

export default function Hotel() {

    var title = 'Reserve your room !';
    var description = 'Dig deep into our multinational database of hotels that can be reserved on the spot.';

  return (
      <div style={FullNav_style}>

        {SplineHotelScene}

        <OverDesignText props={{title,description}}/>

        <SearchHotel />
          <HotelsData />
        <HomeBody1 />
        <HotelBody2 />

    </div>
  )
}
