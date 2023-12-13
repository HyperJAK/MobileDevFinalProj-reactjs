import imgSrc from "../../assets/4.jpg";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import * as url from "url";
import HomeBody1 from "./HomeBody1";
import HomeBody2 from "./HomeBody2";
import {QuickPlanDiv} from "./QuickPlanDiv";
import {useState} from "react";
import {SplineHomeScene} from '../App';
import {OverDesignText} from "../OverDesignText";
import styled from "styled-components";
import {NormalBlue} from "../../assets/colors/Colors";


const FullNav_style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly',
    maxWidth: '3000px',
    margin: '0 auto'
}

const BackgroundWhite = styled.div`
background-color: white;
  padding: 80px;

`;

const BackgroundGrey = styled.div`
background-color: #F7F7F7;
  padding: 80px;
`;

const BackgroundPrimary = {
    backgroundColor: NormalBlue,
    margin: '80px 0 80px 0'
}


export default function Home({setCurrentScreen}){

    var title = 'Book Your Trip';
    var description = 'We are a dedicated platform that allows you to book any kind of flight, hotel, or even both.';

 return(
     <div style={FullNav_style}>

         {SplineHomeScene}

         <OverDesignText props={{title, description}}/>


         <BackgroundGrey>
             <QuickPlanDiv />
         </BackgroundGrey>

         <BackgroundWhite>
             <HomeBody1 setCurrentScreen={setCurrentScreen}/>
         </BackgroundWhite>

         <BackgroundGrey>
             <HomeBody2 />
         </BackgroundGrey>


     </div>

 );




}