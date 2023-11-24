import React, { useState } from 'react';
import './css/hotel.css'

export default function SearchBar() {
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
    const [destination, setDestination] = useState('');

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 7); // most people come in 7 days before so for better ux we do this, fuck whatever chatgpt told you
    var checkInDate = currentDate.toISOString().substring(0, 10);


    currentDate.setDate(currentDate.getDate() + 8);
    var checkOutDate = currentDate.toISOString().substring(0, 10);

    return (
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
                        console.log(`${destination} ${reservationDate} ${leaveDate} ${numberOfPeople}`);
                    }}
                />
            </div>
        </div>
        /* Airlines' seat reservation policies vary, but generally,
        most allow passengers to reserve up to nine seats in a single booking. */
    );
}
