import React, { useState } from 'react';
import './css/hotel.css'
import styled from "styled-components";
import Rating from "./Rating";
import imageHotel from '../../assets/hotelImg.jpg'


const mainDiv_style = {
    display: 'flex',
    flexDirection: 'column',
    width: '70%'
}




export default function SearchBar({destination,setDestination,searchHotels,hotelsResults,setSearching}) {

    const [isHovered, setIsHovered] = useState(false);


    const SuggestionDiv = styled.div`
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      background-color: #08243c;
      width: 100%;
      max-height: 300px;
      color: white;
      border-radius: 20px;
      overflow: auto;
    `;

    const SuggestionElementDiv = styled.div`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      border: 1px solid #61dafb;
      border-radius: 50px;
      padding: 10px;
      margin: 5px;
      gap: 50px;
      justify-content: left;
    `;

    const SuggestionElementPic = styled.div`
      width: 100px;
      height: 100%;
      border-radius: 20px;
      background-image: url(${props => props.imageUrl});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    `;

    const SuggestionElementInfoDiv = styled.div`
      display: flex;
      flex-direction: row;
      gap: 50px;
      flex-wrap: nowrap;
      border-radius: 10px;
/*      padding-right: 10px;*/
    `;

    const SuggestionElementInfo = styled.p`
      font-size: 0.9em;
      font-family: Roboto;
      padding: 10px;
    `;




    const searchBoxStyles = {
        backgroundColor: '#08243c', // #e1d699
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        borderRadius: '20px',
        gap: '10px',
        flexWrap: 'wrap',
    };

    const searchSectionStyles = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    };


    const [reservationDate, setReservationDate] = useState('');
    const [leaveDate, setLeaveDate] = useState('');
    const [numberOfPeople, setNumberOfPeople] = useState(1);

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7); // most people come in 7 days before so for better ux we do this, fuck whatever chatgpt told you
    var checkInDate = currentDate.toISOString().substring(0, 10);


    currentDate.setDate(currentDate.getDate() + 8);
    var checkOutDate = currentDate.toISOString().substring(0, 10);

    return (
        <>
            <div style={mainDiv_style}>
                <div style={searchBoxStyles}>
                    <div style={searchSectionStyles}>
                        <small>Where do you want to stay?</small>
                        <input
                            style={{ width: '400px' }}
                            type='text'
                            placeholder='Enter destination or hotel name'
                            className='hotelSearchBox'
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                                searchHotels();
                            }}
                        ></input>
                    </div>
                    <div style={searchSectionStyles}>
                        <small>Check-in</small>
                        <input type='date' className='hotelSearchBox' value={checkInDate} onChange={(e) => { setReservationDate(e.target.value); }}></input>
                    </div>
                    <div style={searchSectionStyles}>
                        <small>Check-out</small>
                        <input type='date' className='hotelSearchBox' value={checkOutDate} onChange={(e) => { setLeaveDate(e.target.value); }}></input>
                    </div>
                    <div style={searchSectionStyles}>
                        <small>Number of people</small>
                        <input
                            className='hotelSearchBox'
                            type='number'
                            defaultValue={1}
                            min={1}
                            max={9}
                            onChange={(e) => {
                                setNumberOfPeople(e.target.value);
                            }}
                        ></input>
                    </div>
                    <div style={searchSectionStyles}>
                        <small style={{ color: '#08243c' }}>.</small>
                        <input
                            className='hotelSearchBox'
                            style={{ fontFamily: 'Playfair Display', fontSize: '1.1rem', backgroundColor: 'white' }}
                            type='button'
                            value='Search'
                            onClick={() => {
                                /*console.log(`${destination} ${reservationDate} ${leaveDate} ${numberOfPeople}`);*/
                                searchHotels()
                                setSearching(true)
                            }}
                        />
                    </div>
                </div>

                <SuggestionDiv>
                    {hotelsResults !== null? hotelsResults.map((hotelObj) => {

                        return(

                            <SuggestionElementDiv key={hotelObj.hotelId} onClick={() => setDestination(hotelObj.hotelCity)}>
                                <SuggestionElementPic imageUrl={imageHotel}/>

                                <SuggestionElementInfoDiv>
                                    <SuggestionElementInfo>Name: {hotelObj.hotelName}</SuggestionElementInfo>
                                    <SuggestionElementInfo>City: {hotelObj.hotelName}</SuggestionElementInfo>
                                    <p>Rating<br/><small><Rating rating={hotelObj.rating}/></small></p>

                                </SuggestionElementInfoDiv>

                            </SuggestionElementDiv>


                        );
                    }): null}
                </SuggestionDiv>
            </div>




    </>
        /* Airlines' seat reservation policies vary, but generally,
        most allow passengers to reserve up to nine seats in a single booking. */
    );
}
