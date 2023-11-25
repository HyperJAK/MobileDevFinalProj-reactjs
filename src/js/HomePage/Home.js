import imgSrc from "../../assets/4.jpg";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import * as url from "url";
import HomeBody1 from "./HomeBody1";
import HomeBody2 from "./HomeBody2";
import {QuickPlanDiv} from "./QuickPlanDiv";
import {useState} from "react";
import Spline from '@splinetool/react-spline';
import {OverDesignText} from "./OverDesignText";


const FullNav_style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    maxWidth: '3000px',
    margin: '0 auto'
}


export default function Home(){

 return(
     <div style={FullNav_style}>
         <Spline scene="https://prod.spline.design/kxsypMIN3S8rP06j/scene.splinecode" />
         <OverDesignText />

            <QuickPlanDiv />
             <HomeBody1 />
             <HomeBody2 />

     </div>

 );




}