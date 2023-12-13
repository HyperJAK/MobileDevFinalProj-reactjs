import React from 'react'
import SearchHotel from './SearchHotel'
import HomeBody1 from '../HomePage/HomeBody1'
import HotelBody2 from './HotelBody2'
import {SplineHotelScene} from '../App';
import {OverDesignText} from "../OverDesignText";
import HotelsData from './HotelsData';
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

export default function Hotel({setCurrentScreen,handleAddHotel}) {

    var title = 'Reserve your room !';
    var description = 'Dig deep into our multinational database of hotels that can be reserved on the spot.';

  return (
      <div style={FullNav_style}>

        {SplineHotelScene}

        <OverDesignText props={{title,description}}/>

          <BackgroundGrey>
              <SearchHotel handleAddHotel={handleAddHotel}/>
          </BackgroundGrey>
          <HotelsData />
          <div style={BackgroundPrimary}>
              <HomeBody1 setCurrentScreen={setCurrentScreen}/>
          </div>

          <BackgroundGrey>
              <HotelBody2 />
          </BackgroundGrey>



    </div>
  )
}
