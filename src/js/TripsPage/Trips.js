import React from 'react';
import {TripsData} from "./TripsData";
import {SearchHeader} from "../SearchHeader";

export const Trips = ({props}) => {


const title = 'All User Trips';

//You call SearchHeader to display results of search and pass onto it the results and the title of the bar
    return (
        <SearchHeader component={<TripsData props={props}/>} title={title}/>
    );
};
