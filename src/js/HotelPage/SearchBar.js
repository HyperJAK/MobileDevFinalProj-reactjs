import React from 'react';

export default function SearchBar() {
    const searchBoxStyles = {
        backgroundColor: '#08243c', // #e1d699
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        borderRadius: '20px',
        gap: '5px',
    };

    const searchSectionStyles = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
    };

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());//can someone book a flight the same day
    //Yes. For travelers making last minute plans, same-day tickets are generally available, depending upon availability
    //even if average, we aint gonna nezboul buisness people booking high cost tickets in same day now are we
    var checkInDate = currentDate.toISOString().substring(0, 10);
    currentDate.setDate(currentDate.getDate() + 1);
    var checkOutDate = currentDate.toISOString().substring(0, 10);

    return (
        <div style={searchBoxStyles}>
            <div style={searchSectionStyles}>
                <small>Where do you want to stay?</small>
                <input style={{ width: '400px' }} type='text' placeholder='Enter destination or hotel name' className='hotelSearchBox'></input>
            </div>
            <div style={searchSectionStyles}>
                <small>Check-in</small>
                <input type='date' className='hotelSearchBox' defaultValue={checkInDate}></input>
            </div>
            <div style={searchSectionStyles}>
                <small>Check-out</small>
                <input type='date' className='hotelSearchBox' defaultValue={checkOutDate}></input>
            </div>
            <div style={searchSectionStyles}>
                <small>Number of people</small>
                <input className='hotelSearchBox' type='number' defaultValue={1} min={1} max={9}></input>
            </div>

        </div>
        /*Airlines' seat reservation policies vary, but generally,
most allow passengers to reserve up to nine seats in a single booking.*/
    );
}
