import React,{useState} from 'react'

export default function SearchBar() {

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

    var curr = new Date();
    curr.setDate(curr.getDate() + 7); // +7 cuze like on average l user comes to check out 1 week before going so men 7ottolo l default 1 week from today
    var date1 = curr.toISOString().substring(0,10);
    const [destinationState,setDestinationState]=useState('');
    const[date1state,setDate1State]=useState(date1);
    curr.setDate(curr.getDate() + 1);
    var date2 = curr.toISOString().substring(0,10);
    const[date2state,setDate2State]=useState(date2);
    const [NumberOfPeopleState,setNumberOfPeopleState]=useState(1);

  return (
    <div style={searchBox}>
      <div style={searchSection}>
        <small>Where do you want to stay?</small>
        <input style={{ width: '400px' }} type='text' placeholder='Enter destination or hotel name' 
        className='hotelSearchBox' value={destinationState} onChange={(e)=>{setDestinationState(e.target.value)}}></input>
      </div>
      <div style={searchSection}>
        <small>Check-in</small>
        <input type='date' className='hotelSearchBox' 
        value={date1state} onChange={(e)=>{setDate1State(e.target.value)}}></input>
      </div>
      <div style={searchSection}>
        <small>Check-out</small>
        <input type='date' className='hotelSearchBox'
         value={date2state} onChange={(e)=>{setDate2State(e.target.value)}}></input>
      </div>
      <div style={searchSection}>
        <small>Number of people</small>
        <input className='hotelSearchBox' type='number' value={NumberOfPeopleState} 
        onChange={(e)=>{setNumberOfPeopleState(e.target.value)}} min={1}></input>
      </div>
      <div style={searchSection}>
        <small style={{color:'#08243c'}}>.</small>
        <input className='hotelSearchBox' style={{fontFamily: 'Playfair Display',fontSize:'1.1rem,backgroundColor:white'}} 
         type='button' value='Search' onClick={()=>{console.log(`${destinationState} ${date1state} ${date2state} ${NumberOfPeopleState}`)}}
          />
      </div>
    </div>
  )
}
