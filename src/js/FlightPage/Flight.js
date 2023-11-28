import React from 'react'
import SearchFlight from './SearchFlight'
import HomeBody1 from '../HomePage/HomeBody1'
import FlightBody2 from './FlightBody2'
import Spline from "@splinetool/react-spline";
import {OverDesignText} from "../HomePage/OverDesignText";
export default function Flight() {
  return (
    <>

        <Spline scene="https://prod.spline.design/BOGpfRiHRnN9C-Wa/scene.splinecode" />
        <OverDesignText />

        <SearchFlight />
        <HomeBody1 />
        <FlightBody2 />
    </>
  )
}
