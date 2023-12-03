import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import IMG from '../../assets/4.jpg'
import Rating from './Rating.js'
import imageHotel from '../../assets/hotelImg.jpg'

export default function PopularHotels() {

    let [topPopularHotels,setTopPopularHotels] = useState([])

    useEffect( ()=>{
        async function getData(){
            try{
                const hotelInfo = await axios.post(
                    "http://localhost:4000/getTopHotels"
                );
                // console.log(hotelInfo.data.data)
                setTopPopularHotels(hotelInfo.data.data)
            }catch(error){
                // alert(error.response.data.error);
            }
        } 
        getData();  
    }, [])

    const arrayDataItems = topPopularHotels.map((hotel)=>(
        <div key={hotel.hotelId} style={{ flex: 1/3, display: 'flex', flexDirection: 'column', gap: 2, margin: 20, borderColor: 'black', borderWidth: 2, borderStyle: 'solid', borderRadius: '50px', overflow: 'hidden', padding: 20}}>
            <img width='100%' height='200px' src={imageHotel} alt='Hotel image' style={{ alignSelf: 'center', borderColor: 'black', borderWidth: 10, borderRadius: '50px'}}/>
            <hr></hr>
            <h3 style={{ textAlign: 'center' }}><strong>{hotel.hotelName}</strong></h3>
            <p>Description<br/><small>{hotel.hotelDescription}</small></p>
            <p>Location<br/><small>{hotel.hotelCity}</small></p>
            <p>Rating<br/><small><Rating rating={hotel.rating}/></small></p>
            <p>Rooms<br/><small>{hotel.rooms.length}</small></p>
        </div>
    ))

  return (
    <div>
        <ul style={{ display:'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{arrayDataItems}</ul>
        {console.log(topPopularHotels)}
    </div>
  )
}
