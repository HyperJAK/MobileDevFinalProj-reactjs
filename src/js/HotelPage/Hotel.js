import React from 'react'
import SearchHotel from './SearchHotel'
import HomeBody1 from '../HomePage/HomeBody1'
import HotelBody2 from './HotelBody2'
import Spline from "@splinetool/react-spline";
import {OverDesignText} from "../HomePage/OverDesignText";
import HotelsData from './HotelsData';

export default function Hotel() {
  return (
    <>

        <Spline scene="https://prod.spline.design/9FI0ZU1nnSTP8Xwt/scene.splinecode" />
        <OverDesignText />

        <SearchHotel />
        <HomeBody1 />
        <HotelBody2 />
        <HotelsData />
    </>
  )
}
