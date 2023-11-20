import React from 'react'
import SearchHotel from './SearchHotel'
import HomeBody1 from '../HomePage/HomeBody1'
import HotelBody2 from './HotelBody2'
import Navigation from '../Nav/Navigation'
export default function Hotel() {
  return (
    <>
        <Navigation/>
        <SearchHotel />
        <HomeBody1 />
        <HotelBody2 />
    </>
  )
}
