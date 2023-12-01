import imgSrc from "../../assets/4.jpg";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import * as url from "url";
import HomeBody1 from "./HomeBody1";
import HomeBody2 from "./HomeBody2";
import {QuickPlanDiv} from "./QuickPlanDiv";
import {useState} from "react";
import {SplineHomeScene} from '../App';
import {OverDesignText} from "../OverDesignText";


const FullNav_style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    maxWidth: '3000px',
    margin: '0 auto'
}


export default function Home(){

    var title = 'Book Your Trip';
    var description = 'We are a dedicated platform that allows you to book any kind of flight, hotel, or even both.';

 return(
     <div style={FullNav_style}>

         {SplineHomeScene}

         <OverDesignText props={{title, description}}/>

            <QuickPlanDiv />
             <HomeBody1 />
             <HomeBody2 />

     </div>

 );




}