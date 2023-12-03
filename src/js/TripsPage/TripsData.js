import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from "axios";
import cutePic from '../../assets/homeImg.jpg';



async function GetMainData({setTripsData}){

    try {
        const response = await axios.post(
            "http://localhost:4000/getAllTrips"
        );
        //console.log("RESPONSESSSS")
        //console.log(response.data.data)

        const data = response.data.jsonData;

        setTripsData(data);


    } catch (error) {
        //alert(error.response.data.error);
        alert(error)
    }

}

async function GetImageData({ flightId, hotelId, roomId, setTripsData }) {
    try {
        const flightImages = await GetFlightImages(flightId);
        const hotelImages = await GetHotelImages(hotelId);
        const roomImages = await GetRoomImages(roomId);

        return {
            flightImages: flightImages,
            hotelImages: hotelImages,
            roomImages: roomImages,
        };
    } catch (error) {
        console.error('Error fetching images:', error);
        return {
            flightImages: [],
            hotelImages: [],
            roomImages: [],
        };
    }
}



async function GetFlightImages(flightId){

    const dataFlight = {flightId};

    try {
        const response = await axios.post(
            "http://localhost:4000/getFlightImages",
            dataFlight
        );

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

        return (response.data.jsonRoomImages)

    } catch (error) {
        //alert(error.response.data.error);
        alert(error)
        return false;
    }



}


export const TripsData = ({props}) => {

    const {
        currentScreen,
        setCurrentScreen,
        user,
        tripsData,
        setTripsData,
        refreshTripsData,
        setRefreshTripsData
    } = props;



    //Refreshes the data
    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            if (refreshTripsData) {
                await GetMainData({setTripsData: setTripsData});
                try {
                    const newTripsData = await Promise.all(
                        tripsData.map(async (trip) => {
                            const imageData = await GetImageData({
                                flightId: trip.flight.flightId,
                                hotelId: trip.hotel.hotelId,
                                roomId: trip.room.roomId,
                                setTripsData: setTripsData,
                            });

                            return {
                                ...trip,
                                ...imageData,
                            };
                        })
                    );


                    if(tripsData !== undefined){
                        setTripsData(newTripsData);
                        setRefreshTripsData(false);
                    }


                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [refreshTripsData]);






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
      background-image: url(${props => props.imageUrl});
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

    let tripsDivs;

    if(tripsData !== undefined && (tripsData[0].flightImages !== undefined || tripsData[0].hotelImages !== undefined || tripsData[0].roomImages !== undefined)){

        console.log('entered')
        tripsDivs = tripsData.map((trip) => {
        console.log(trip)

            const flightImageUrl = trip.flightImages[0].flight.imageUrl;


            return (

                <DataStyle>

                    <DataPicStyle imageUrl={flightImageUrl}/>
                    <P>{trip.trip_name}</P>
                    <ViewTrip>View Trip</ViewTrip>


                </DataStyle>
            )
        })

    }



    return (
        <>
            {/*<input type={"button"} value={"Click ME!"} onClick={async() =>{
                const response = await axios.post('http://localhost:4000/getAllTrips');
            }}/>*/}

            {tripsDivs}

        </>
    );
};
