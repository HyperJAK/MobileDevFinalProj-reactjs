import React from 'react';
import styled from "styled-components";
import {TripsData} from "./TripsData";

export const Trips = ({props}) => {


    /*const{
        currentScreen,setCurrentScreen,user,tripsData,setTripsData
    } = props;*/


    const containerStyle = {
        display: 'flex',
        padding: '20px',
        maxWidth: '3000px',
        margin: '0 auto',
        flexWrap: 'wrap'
    };




    return (
        <div style={containerStyle}>
            <TripsData props={props}/>
        </div>
    );
};
