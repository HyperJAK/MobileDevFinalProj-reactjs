import React from 'react'

export default function SearchBar() {

    const searchBox = {
        backgroundColor: '#08243c',//#e1d699
        display: 'flex',
        flexDirection: 'row',
        padding: '20px',
        borderRadius: '20px',
        gap: '5px'
    }
    const searchSection = {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px'
    }

    var curr = new Date();
    curr.setDate(curr.getDate() + 7); // +7 cuze like on average l user comes to check out 1 week before going so men 7ottolo l default 1 week from today
    var date1 = curr.toISOString().substring(0,10);
    curr.setDate(curr.getDate() + 1);
    var date2 = curr.toISOString().substring(0,10);

  return (
    <div style={searchBox}>
      <div style={searchSection}>
        <small>Where do you want to stay?</small>
        <input style={{ width: '400px' }} type='text' placeholder='Enter destination or hotel name' className='hotelSearchBox'></input>
      </div>
      <div style={searchSection}>
        <small>Check-in</small>
        <input type='date' className='hotelSearchBox' defaultValue={date1}></input>
      </div>
      <div style={searchSection}>
        <small>Check-out</small>
        <input type='date' className='hotelSearchBox' defaultValue={date2}></input>
      </div>
      <div style={searchSection}>
        <small>Number of people</small>
        <input className='hotelSearchBox' type='number' defaultValue={1} min={1}></input>
      </div>
    </div>
  )
}
