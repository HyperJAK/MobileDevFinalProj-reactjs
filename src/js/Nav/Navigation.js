
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import {LogOut} from "../Validation/LogOut";
import {MenuDropdown} from "./MenuDropdown";
import {useState} from "react";
import {NavigationItems} from "./NavigationItems";
import {MDBCardImage} from "mdb-react-ui-kit";


const FullNav_style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
}



export const Navigation = ({setIsLogIn,setCurrentScreen,currentScreen,user})=>{


    return(
        <Navbar bg="primary" data-bs-theme="dark">
            <Container style={FullNav_style}>
                <Navbar.Brand style={{fontSize:'32px'}} href="#home" onClick={()=>{
                    setCurrentScreen('home');
                    var serializedString = JSON.stringify({
                        currentScreen: currentScreen
                    });
                    localStorage.setItem('currentScreen', serializedString);
                }}>Go Trip</Navbar.Brand>
                <Nav className="me-auto">
                    <NavigationItems setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
                </Nav>

                <Nav>

                    <MDBCardImage src={user.image}
                                  className="rounded-circle" fluid style={{ width: '50px', padding: '5px' }} onClick={() => setCurrentScreen('profile')}/>

                </Nav>

                <Nav>

                    <MenuDropdown setCurrentScreen={setCurrentScreen} setIsLogIn={setIsLogIn}/>

                </Nav>
            </Container>
        </Navbar>
    );

}
