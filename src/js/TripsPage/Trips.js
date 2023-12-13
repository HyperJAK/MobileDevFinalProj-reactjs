import React, {useState} from 'react';
import {TripsData} from "./TripsData";
import {SearchHeader} from "../SearchHeader";
import {DarkBlue} from "../../assets/colors/Colors";

export const Trips = ({props}) => {

    const [tripName, setTripName] = useState('Default Trip Name');

    const {
        setRefreshTripsData,
        addNewTrip
    } = props;


    const mainDiv_style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '50px'
    }


    const buttons_style = {
        borderRadius: '20px',
        backgroundColor: DarkBlue,
        color: 'white',
        width: '150px',
        height: '50px'
    }


const title = 'All User Trips';

//You call SearchHeader to display results of search and pass onto it the results and the title of the bar
    return (
        <>

            <div style={mainDiv_style}>
                <input type={"text"}  style={buttons_style} placeholder={'Trip name'} onInput={e => {
                    setTripName(e.target.value)
                    console.log(tripName)
                }}/>
                <input type={"button"}  style={buttons_style} value={'Push Changes'} onClick={() => addNewTrip(tripName)}/>
                <input type={"button"} style={buttons_style} value={'Refresh'} onClick={() => setRefreshTripsData(true)}/>
            </div>

            <SearchHeader component={<TripsData props={props}/>} title={title}/>
        </>
    );
};
