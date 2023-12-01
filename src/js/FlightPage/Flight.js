import React from 'react'
import SearchFlight from './SearchFlight'
import HomeBody1 from '../HomePage/HomeBody1'
import FlightBody2 from './FlightBody2'
import {SplineFlightScene} from '../App';
import {OverDesignText} from "../OverDesignText";
export default function Flight() {

    var title = 'Soar the sky !';
    var description = 'Feeling sick of being a reptilian ? Then book your flight right away and lead your worries away.';

  return (
    <>
        {SplineFlightScene}

        <OverDesignText props={{title,description}}/>

        <SearchFlight />
        <HomeBody1 />
        <FlightBody2 />
    </>
  )
}
