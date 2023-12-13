import React from 'react'
import styled from "styled-components";
import axios from "axios";
import Container from "react-bootstrap/Container";
import PopularHotels from './PopularHotels';

export default function HotelsData(props) {
    const {
        currentScreen, setCurrentScreen, user, tripsData, setTripsData
    } = props;

    return (
        <Container style={{ marginTop: 20 }}>
            <h1>Popular Hotels</h1>
           <div>
                <PopularHotels />
            </div>
        </Container>
    );
}
