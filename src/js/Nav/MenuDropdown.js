import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {LogOut} from "../Validation/LogOut";
import {DropDownButton} from "./DropDownButton";
import styled from "styled-components";


export const MenuDropdown = ({setCurrentScreen,setIsLogIn}) =>{

    const hotel = 'hotel';
    const trip = 'trip';
    const flight = 'flight';

    const title_1 = 'About Us'
    const title_2 = 'Dark Mode'
    const title_3 = 'Help'



    return (

        <Dropdown data-bs-theme="light">
            <Dropdown.Toggle id="dropdown-basic-button">

                <svg width="40px" height="40px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-darkreader-inline-stroke=""
                    style={{ '--darkreader-inline-stroke': '#ffffff' }}
                /> </g></svg>


            </Dropdown.Toggle>

            <Dropdown.Menu>

                <DropDownButton props={{hotel,setCurrentScreen,title: title_1}}/>
                <DropDownButton props={{trip,setCurrentScreen,title: title_2}}/>
                <DropDownButton props={{flight,setCurrentScreen,title: title_3}}/>

                <Dropdown.Divider />
                <LogOut setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen}/>
            </Dropdown.Menu>
        </Dropdown>

    );
}