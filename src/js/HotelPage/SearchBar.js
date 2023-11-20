import {React, useState} from 'react';

export default function SearchBar() {
    const searchBoxStyles = {
const searchBox = {
        backgroundColor: '#08243c',//#e1d699
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        borderRadius: '20px',
        gap: '10px',
        flexWrap:'wrap'
    }

const searchSection = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    }


    
    const[date1state,setDate1State]=useState(date1);
    const[date2state,setDate2State]=useState(date2);
    const [NumberOfPeopleState,setNumberOfPeopleState]=useState(1);

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());//can someone book a flight the same day
    //Yes. For travelers making last minute plans, same-day tickets are generally available, depending upon availability
const [destinationState,setDestinationState]=useState('');
    currentDate.setDate(currentDate.getDate() + 1);
    var checkOutDate = currentDate.toISOString().substring(0, 10);
    const[date2state,setDate2State]=useState(date2);
    const [NumberOfPeopleState,setNumberOfPeopleState]=useState(1);

    return (
        <div style={searchBoxStyles}>
            <div style={searchSectionStyles}>
                <small>Where do you want to stay?</small>
<input style={{ width: '400px' }} type='text' placeholder='Enter destination or hotel name'
        className='hotelSearchBox' value={destinationState} onChange={(e)=>{setDestinationState(e.target.value)}}></input>
            </div>
            <div style={searchSectionStyles}>
                <small>Check-in</small>
<input type='date'
        value={date1state} onChange={(e)=>{setDate1State(e.target.value)}}></input>
            </div>
            <div style={searchSectionStyles}>
                <small>Check-out</small>
<input type='date'
         value={date2state} onChange={(e)=>{setDate2State(e.target.value)}}></input>
            </div>
            <div style={searchSectionStyles}>
                <small>Number of people</small>
<input className='hotelSearchBox' type='number' defaultValue={1} min={1} max={9}
        onChange={(e)=>{setNumberOfPeopleState(e.target.value)}} min={1}></input>
      </div>
      <div style={searchSection}>
        <small style={{color:'#08243c'}}>.</small>
        <input className='hotelSearchBox' style={{fontFamily: 'Playfair Display',fontSize:'1.1rem,backgroundColor:white'}} 
         type='button' value='Search' onClick={()=>{console.log(`${destinationState} ${date1state} ${date2state} ${NumberOfPeopleState}`)}}
          />
            </div>

        </div>
        /*Airlines' seat reservation policies vary, but generally,
most allow passengers to reserve up to nine seats in a single booking.*/
    );
}
