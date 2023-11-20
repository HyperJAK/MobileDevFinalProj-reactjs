import imgSrc from "../../assets/4.jpg";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import * as url from "url";
import HomeBody1 from "./HomeBody1";
import HomeBody2 from "./HomeBody2";
import {QuickPlanDiv} from "./QuickPlanDiv";
import {useState} from "react";


const FullNav_style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly'
}



export default function Home(){

 return(
     <div style={FullNav_style}>

            <QuickPlanDiv />
             <HomeBody1 />
             <HomeBody2 />

     </div>

 );




}