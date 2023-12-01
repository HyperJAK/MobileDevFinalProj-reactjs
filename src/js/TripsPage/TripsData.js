import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import cutePic from '../../assets/homeImg.jpg';



async function GetMainData(){

    try {
        const response = await axios.post(
            "http://localhost:4000/getAllTrips"
        );
        //console.log("RESPONSESSSS")
        //console.log(response.data.data)


        alert(response.data.message)
        console.log(response.data.jsonData)

    } catch (error) {
        //alert(error.response.data.error);
        alert(error)
    }

}

async function GetImageData(flightId, hotelId, roomId) {
    try {
        const flightImages = await GetFlightImages(flightId);
        const hotelImages = await GetHotelImages(hotelId);
        const roomImages = await GetRoomImages(roomId);


        console.log('Flight Images:', flightImages);
        console.log('Hotel Images:', hotelImages);
        console.log('Room Images:', roomImages);

        //Here fill the images in the corresponding components that can be given to function

    } catch (error) {
        console.error('Error fetching images:', error);
    }


}


async function GetFlightImages(flightId){

    const dataFlight = {flightId};

    try {
        const response = await axios.post(
            "http://localhost:4000/getFlightImages",
            dataFlight
        );


        alert(response.data.message)
        return (response.data.jsonFlightImages)

    } catch (error) {
        //alert(error.response.data.error);
        alert(error)
        return false;
    }

}

async function GetHotelImages(hotelId){

    const dataHotel = {hotelId};

    try {
        const response = await axios.post(
            "http://localhost:4000/getHotelImages",
            dataHotel
        );


        alert(response.data.message)
        return (response.data.jsonHotelImages)

    } catch (error) {
        //alert(error.response.data.error);
        alert(error)
        return false;
    }

}

async function GetRoomImages(roomId){

    const dataRoom = {roomId};

    try {
        const response = await axios.post(
            "http://localhost:4000/getRoomImages",
            dataRoom
        );


        alert(response.data.message)
        return (response.data.jsonRoomImages)

    } catch (error) {
        //alert(error.response.data.error);
        alert(error)
        return false;
    }



}


export const TripsData = ({props}) => {

    const {
        currentScreen, setCurrentScreen, user, tripsData, setTripsData, refreshData
    } = props;



    //Refreshes the data
    useEffect(() =>{

        GetMainData().then(r => {
            GetImageData(1,1,1);
        });


    },[refreshData])





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
