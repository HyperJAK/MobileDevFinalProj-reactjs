import React from 'react';
import hotelImg2 from '../../assets/hotelImg2.jpg';
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
        'Embark on a journey of unparalleled comfort with our extraordinary hotel booking service! At [Your Hotel Booking Platform], we redefine the way you experience accommodation. Offering a diverse selection of hotels worldwide, we take pride in providing a seamless and delightful stay for every traveler. Explore a range of accommodations, from cozy retreats to luxurious resorts, all designed to meet different tastes and budgets. Your perfect stay awaits – book with us for an exceptional and memorable hotel experience!';

    return (
        <div style={containerStyle}>
            <Img src={hotelImg2} alt="hotel"></Img>
            <p style={textStyle}>
                {textFiller}
            </p>
        </div>
    );
}
