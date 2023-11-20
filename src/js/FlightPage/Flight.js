import React from 'react'
import SearchFlight from './SearchFlight'
import HomeBody1 from '../HomePage/HomeBody1'
import FlightBody2 from './FlightBody2'
import Navigation from '../Nav/Navigation'
export default function Flight() {
  return (
    <>
        <Navigation/>
        <SearchFlight />
        <HomeBody1 />
        <FlightBody2 />
    </>
  )
}
