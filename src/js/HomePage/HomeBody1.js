import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { animateScroll as scroll } from 'react-scroll';

import planeImg from '../../assets/FlightImg1.jpeg'
import HotelImg from '../../assets/hotelImg2.jpg'
import TripsImg from '../../assets/hotelImg2.jpg'


export default function HomeBody1({setCurrentScreen}){

    const Button = styled.button`
    height: 80px;
      border-radius: 10px;
      border: 1px solid black;
      background-color: #08243c;
      color: whitesmoke;
      font-family: Roboto;
      font-size: large;
      max-width: 600px;
      width: 100%;
      margin-bottom: 3%;
      z-index: 1000;
`;

    const carouselElement_style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const images_style = {
        maxWidth: '800px',
        maxHeight: '600px',
        borderRadius: '30px',
        filter: 'brightness(70%)',
        marginBottom: '10%'

    }

    const title_text_style = {
        fontFamily: 'roboto',
        fontSize: '26px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',

    }

    const paragraph_text_style = {
            fontFamily: 'Open Sans',
            fontSize: '18px',
        marginBottom: '10%'
    }

    const carousel_style = {
        display: 'flex',
        flexDirection: 'column'
    }


    return(

        <Carousel data-bs-theme="dark" slide={true}>
            <Carousel.Item>
                <div style={carouselElement_style}>
                    <img
                        style={images_style}
                        className="d-block w-100"
                        src={HotelImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h5 style={title_text_style}>Check out Hotels</h5>
                        <p style={paragraph_text_style}>Dig deep into our multinational database of hotels that can be reserved on the spot.</p>
                    </Carousel.Caption>

                    <Button variant="secondary" className="flex-fill" onClick={()=>{
                        setCurrentScreen('hotel')
                        var serializedString = JSON.stringify({
                            lastScreen: 'hotel',
                        });
                        localStorage.setItem('currentScreen', serializedString);
                        scroll.scrollToTop({
                            duration: 500, // Adjust the duration as needed
                            smooth: 'easeInOutQuad', // You can experiment with other easing functions
                        });
                    }} >Hotels</Button>
                </div>

            </Carousel.Item>
            <Carousel.Item>
                <div style={carouselElement_style}>
                <img
                    style={images_style}
                    className="d-block w-100"
                    src={planeImg}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5 style={title_text_style}>Check out Flights</h5>
                    <p style={paragraph_text_style}>Feeling sick of being a reptilian ?
                        <br></br>Then book your flight right away and lead your worries away.</p>
                </Carousel.Caption>

                    <Button variant="primary" className="flex-fill" onClick={()=>{
                        setCurrentScreen('flight')
                        var serializedString = JSON.stringify({
                            lastScreen: 'flight',
                        });
                        localStorage.setItem('currentScreen', serializedString);
                        scroll.scrollToTop({
                            duration: 500, // Adjust the duration as needed
                            smooth: 'easeInOutQuad', // You can experiment with other easing functions
                        });
                    }} >Flights</Button>

                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={carouselElement_style}>
                <img
                    style={images_style}
                    className="d-block w-100"
                    src={TripsImg}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h5 style={title_text_style}>See your Trips</h5>
                    <p style={paragraph_text_style}>
                        Your trips in a click of a button
                    </p>
                </Carousel.Caption>

                    <Button variant="success" className="flex-fill" onClick={()=>{
                        setCurrentScreen('trip')
                        var serializedString = JSON.stringify({
                            lastScreen: 'trip',
                        });
                        localStorage.setItem('currentScreen', serializedString);
                        scroll.scrollToTop({
                            duration: 500, // Adjust the duration as needed
                            smooth: 'easeInOutQuad', // You can experiment with other easing functions
                        });
                    }} >Trips</Button>

                </div>

            </Carousel.Item>
        </Carousel>





);




}