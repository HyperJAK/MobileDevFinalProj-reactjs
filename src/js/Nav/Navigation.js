
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import {LogOut} from "../Validation/LogOut";
import {MenuDropdown} from "./MenuDropdown";
import {useState} from "react";
import {NavigationItems} from "./NavigationItems";
import {MDBCardImage} from "mdb-react-ui-kit";



const DefIconSize = "50";

const FullNav_style = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
}

const svgIcon_style = {
    width:'50px',
    height:'50px',
    borderRadius: '10px',
    border: '2px solid green'
}


const InsideTopNav_style = {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue'
}

const InsideBottomNav_style = {
    marginTop: '50px',
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'yellow'
}

const BottomNavButtons_style = {
    width: '100px',
padding: '20px',
    borderRadius: '10px'
}



export const Navigation = ({setIsLogIn,setCurrentScreen,currentScreen,user})=>{


/*    const GlobeSvg = () =>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" style={svgIcon_style} viewBox="0 0 72 72" id="language"><g data-name="24 Language"><path d="M19 58a1 1 0 0 1-.63-.23A28 28 0 0 1 36 8a27.74 27.74 0 0 1 12.35 2.86 1 1 0 0 1 .45 1.34 1 1 0 0 1-1.34.46 26 26 0 0 0-33.67 9.82 26 26 0 0 0 5.86 33.73 1 1 0 0 1 .14 1.41A1 1 0 0 1 19 58zm17 6a27.75 27.75 0 0 1-12.84-3.11 1 1 0 0 1 .92-1.78 26 26 0 0 0 34.13-36.63 26.26 26.26 0 0 0-5.84-6.68 1 1 0 0 1-.15-1.4 1 1 0 0 1 1.41-.15 28.21 28.21 0 0 1 6.28 7.19A28 28 0 0 1 36 64z"></path><path d="M35 63a1 1 0 0 1-.67-.26A30.51 30.51 0 0 1 26 50.38 39.12 39.12 0 0 1 23 36a36.4 36.4 0 0 1 3-14.39 35.7 35.7 0 0 1 8.33-12.35 1 1 0 0 1 1.34 1.48 33.77 33.77 0 0 0-7.88 11.65A34.53 34.53 0 0 0 25 36a37 37 0 0 0 2.8 13.62 28.65 28.65 0 0 0 7.87 11.64A1 1 0 0 1 35 63Z"></path><path d="M37 63a1 1 0 0 1-.67-1.74 28.65 28.65 0 0 0 7.87-11.64A37 37 0 0 0 47 36a34.53 34.53 0 0 0-2.79-13.61 33.77 33.77 0 0 0-7.88-11.65 1 1 0 1 1 1.34-1.48 35.7 35.7 0 0 1 8.38 12.35A36.4 36.4 0 0 1 49 36a39.12 39.12 0 0 1-3 14.38 30.51 30.51 0 0 1-8.37 12.36A1 1 0 0 1 37 63Z"></path><path d="M63 37H9a1 1 0 0 1 0-2h54a1 1 0 0 1 0 2zm-4-14H13a1 1 0 0 1 0-2h46a1 1 0 0 1 0 2zm0 28H13a1 1 0 0 1 0-2h46a1 1 0 0 1 0 2z"></path><path d="M36 63a1 1 0 0 1-1-1V10a1 1 0 0 1 2 0v52a1 1 0 0 1-1 1Z"></path></g></svg>
        );
    }

    const MenuSvg = () =>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" style={svgIcon_style} viewBox="0 0 24 24" id="menu"><g data-name="Layer 2"><g data-name="menu"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)"></rect><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95"></rect><rect width="18" height="2" x="3" y="16" rx=".95" ry=".95"></rect><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95"></rect></g></g></svg>
        );
    }*/


/*    const NavButtons = ({btn_name}) =>{

        return(
            <button style={BottomNavButtons_style} value={btn_name}>{btn_name}</button>
        );
    }*/
/*const TopNav = () =>{

        return(
            <div style={InsideTopNav_style}>
                <GlobeSvg />
                <div style={InsideTopNav_style}>
                    <GlobeSvg />
                    <MenuSvg />
                </div>
            </div>

        );
}

    const BottomNav = () =>{
        return(
        <div style={InsideBottomNav_style}>
            <NavButtons btn_name='Flights'/>
            <NavButtons btn_name='Hotels'/>
            <NavButtons btn_name='Cars'/>

        </div>
        );
    }*/





    return(
        <Navbar bg="primary" data-bs-theme="dark">
            <Container style={FullNav_style}>
                <Navbar.Brand style={{fontSize:'32px'}} href="#home" onClick={()=>{
                    setCurrentScreen('home');
                    var serializedString = JSON.stringify({
                        currentScreen: currentScreen
                    });
                    localStorage.setItem('currentScreen', serializedString);
                }}>Go Trip</Navbar.Brand> {/* href? bro kella 1 single page l web kello lol */}
                <Nav className="me-auto">
                    <NavigationItems setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
                </Nav>

                <Nav>

                    <MDBCardImage src={user.image}
                                  className="rounded-circle" fluid style={{ width: '50px', padding: '5px' }} />

                </Nav>

                <Nav>

                    <MenuDropdown setCurrentScreen={setCurrentScreen} setIsLogIn={setIsLogIn}/>

                </Nav>
            </Container>
        </Navbar>
    );

}
