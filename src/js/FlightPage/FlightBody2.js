import React from 'react';
import FlightImg2 from '../../assets/homeImg.jpg';
import styled from "styled-components";

const FlightBody2 = () => {
    const textFiller = 'Explore boundless horizons with our exceptional flight booking service! At [Your Website Name], we redefine the way you embark on your journeys. Offering an extensive array of flights to destinations across the globe, we pride ourselves on providing a seamless and enjoyable travel experience.';

    const containerStyle = {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        margin: '0 auto',
        gap: 10,
        flexWrap: 'wrap',
        background: 'rgba(52, 52, 52, 0.1)',
        borderRadius: '30px',
        alignItems: 'center'
    };

    const Img = styled.img`
        flex: 1;
        width: 40%;
        height: 500px;
        border-radius: 30px 0 0 30px;
    `;

    const textStyle = {
        fontSize: '1.4rem',
        fontFamily: 'Roboto',
        flex: 2,
        padding: '10px',
    };

    return (
        <div style={containerStyle}>
            <Img src={FlightImg2} alt=''></Img>
            <p style={textStyle}>{textFiller}</p>
        </div>
    );
}

export default FlightBody2;
