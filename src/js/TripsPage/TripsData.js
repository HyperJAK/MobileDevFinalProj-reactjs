import React from 'react';
import styled from "styled-components";
import axios from "axios";
import cutePic from '../../assets/homeImg.jpg';

export const TripsData = ({props}) => {


    const {
        currentScreen, setCurrentScreen, user, tripsData, setTripsData
    } = props;


    const DataStyle = styled.div`
      //flex-grow: 1, flex-shrink: 0, flex-basis: 33.33%
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 13%;
      max-width: 15%;
      min-width: 250px;
      box-sizing: border-box;
      padding: 8px;
      border: 1px solid black;
      text-align: center;
      border-radius: 30px;
      background-color: white;
    `;

    const DataPicStyle = styled.div`
      max-width: 100%;
      height: 150px;
      border-radius: 20px;
      background-image: url(${cutePic});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;

    const P = styled.p`
    font-family: Roboto;
      font-weight: bold;
      font-size: x-large;
    `;


    const ViewTrip = styled.button`
    border-radius: 30px;
      background-color: rgba(13,110,253,255);
      color: white;
      height: 20%;
    `;



    return (
        <>
            {/*<input type={"button"} value={"Click ME!"} onClick={async() =>{
                const response = await axios.post('http://localhost:4000/getAllTrips');
            }}/>*/}
            <DataStyle>

                <DataPicStyle></DataPicStyle>
                <P>Trip Name</P>
                <ViewTrip>View Trip</ViewTrip>


            </DataStyle>


            <DataStyle>

                <DataPicStyle></DataPicStyle>
                <P>Trip Name</P>
                <ViewTrip>View Trip</ViewTrip>


            </DataStyle>


            <DataStyle>

                <DataPicStyle></DataPicStyle>
                <P>Trip Name</P>
                <ViewTrip>View Trip</ViewTrip>


            </DataStyle>

        </>
    );
};
