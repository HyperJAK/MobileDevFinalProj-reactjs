import React from 'react';
import homeInfoImg from '../../assets/4.jpg';
import styled from "styled-components";

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

export default function HotelBody2() {
    const textFiller =
        'Embark on a virtual journey to discover who we are! At [Your Company Name], we are more than just a platform – we\'re your travel companion, here to redefine the way you explore the world. With a passion for seamless travel experiences, we curate exceptional services that go beyond expectations.';

    return (
        <div style={containerStyle}>
            <Img src={homeInfoImg} alt="hotel"></Img>
            <p style={textStyle}>
                {textFiller}
            </p>
        </div>
    );
}
