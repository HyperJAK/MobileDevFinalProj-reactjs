import React from 'react'
import SearchHotel from './SearchHotel'
import HomeBody1 from '../HomePage/HomeBody1'
import HotelBody2 from './HotelBody2'
import {SplineHotelScene} from '../App';
import {OverDesignText} from "../OverDesignText";
import HotelsData from './HotelsData';

export default function Hotel() {

    var title = 'Reserve your room !';
    var description = 'Dig deep into our multinational database of hotels that can be reserved on the spot.';

  return (
    <>

        {SplineHotelScene}

        <OverDesignText props={{title,description}}/>

        <SearchHotel />
        <HomeBody1 />
        <HotelBody2 />
        <HotelsData />
    </>
  )
}
