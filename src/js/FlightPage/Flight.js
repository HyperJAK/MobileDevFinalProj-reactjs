import React from 'react'
import SearchFlight from './SearchFlight'
import HomeBody1 from '../HomePage/HomeBody1'
import FlightBody2 from './FlightBody2'
import {SplineFlightScene} from '../App';
import {OverDesignText} from "../OverDesignText";
import styled from "styled-components";
import {NormalBlue} from "../../assets/colors/Colors";

const FullNav_style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    maxWidth: '3000px',
    margin: '0 auto'
}

const BackgroundWhite = styled.div`
background-color: white;
  padding: 80px;

`;

const BackgroundGrey = styled.div`
background-color: #F7F7F7;
  padding: 80px;
`;

const BackgroundPrimary = {
    backgroundColor: NormalBlue,
    margin: '80px 0 80px 0'
}

export default function Flight({setCurrentScreen,handleAddFlight}) {

    const title = 'Soar the sky !';
    const description = 'Feeling sick of being a reptilian ? Then book your flight right away and lead your worries away.';

    return (
      <div style={FullNav_style}>

        {SplineFlightScene}

        <OverDesignText props={{title,description}}/>

          <BackgroundGrey>
              <SearchFlight handleAddFlight={handleAddFlight}/>
          </BackgroundGrey>

          <BackgroundWhite>
            <HomeBody1 setCurrentScreen={setCurrentScreen}/>
          </BackgroundWhite>

          <BackgroundGrey>
              <FlightBody2 />
          </BackgroundGrey>

    </div>
  )
}
