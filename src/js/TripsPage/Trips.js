import React from 'react';
import styled from "styled-components";
import {TripsData} from "./TripsData";
import {SearchHeader} from "../SearchHeader";

export const Trips = ({props}) => {


    /*const{
        currentScreen,setCurrentScreen,user,tripsData,setTripsData
    } = props;*/


    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        maxWidth: '1500px',
        margin: '0 auto',
        justifyContent: 'center'
    };




    return (
        <div style={containerStyle}>
            <SearchHeader component={<TripsData props={props}/>}/>
        </div>
    );
};
