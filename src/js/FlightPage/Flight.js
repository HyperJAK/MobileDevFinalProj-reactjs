import React from 'react'
import SearchFlight from './SearchFlight'
import HomeBody1 from '../HomePage/HomeBody1'
import FlightBody2 from './FlightBody2'
import {SplineFlightScene} from '../App';
import {OverDesignText} from "../OverDesignText";

const FullNav_style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    maxWidth: '3000px',
    margin: '0 auto'
}

export default function Flight() {

    var title = 'Soar the sky !';
    var description = 'Feeling sick of being a reptilian ? Then book your flight right away and lead your worries away.';

  return (
      <div style={FullNav_style}>

        {SplineFlightScene}

        <OverDesignText props={{title,description}}/>

        <SearchFlight />
        <HomeBody1 />
        <FlightBody2 />
    </div>
  )
}
