import React from 'react';
import FlightImg2 from '../../assets/homeImg.jpg';
import styled from "styled-components";

const FlightBody2 = () => {
    const textFiller = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

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
