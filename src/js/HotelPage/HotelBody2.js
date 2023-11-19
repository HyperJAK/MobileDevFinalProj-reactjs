import React from 'react'
import hotelImg2 from '../../assets/hotelImg2.jpg'

export default function HotelBody2() {
    const textFiller = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  return (
    <div style={{ display:'flex', flexDirection: 'row', width: '90%', margin: '0 auto', gap: 10, flexWrap: 'wrap', background: 'rgba(52, 52, 52, 0.1)', borderRadius: '30px', alignItems: 'center'}}>
      <img src={hotelImg2} width={'40%'} style={{ borderRadius: '30px 0 0 30px', flex: 1 }}></img>
      <p style={{ fontSize: '1.4rem', fontFamily: 'Roboto', flex: 2, padding:'10px' }}>{textFiller}{textFiller}</p>
    </div>
  )
}

