import React from 'react';
import styled from "styled-components";

export const TripsData = ({props}) => {


    const{
        currentScreen,setCurrentScreen,user,tripsData,setTripsData
    } = props;


    const DataStyle = styled.div`
      //flex-grow: 1, flex-shrink: 0, flex-basis: 33.33%
      flex: 1 0 33.33%;
      max-width: 33.33%;
      box-sizing: border-box;
      padding: 8px;
      background-color: red;
      border: 1px solid black;
      text-align: center;
    
    `;




    return (
        <>
            <DataStyle>Item 1</DataStyle>
            <DataStyle>Item 2</DataStyle>
            <DataStyle>Item 3</DataStyle>

        </>
    );
};
