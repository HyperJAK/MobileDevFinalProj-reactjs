import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import {useAuth0} from "@auth0/auth0-react";




export const LogOut = ({setIsLogIn}) => {

    const [isHovered, setIsHovered] = useState(false);


    const button_style = {
        width: "100%",
        marginTop: "15px",
        borderRadius: "30px",
        height: "60px",
        color: isHovered ? "black" : "white",
        border: "1px solid red",
        backgroundColor: isHovered ? "#333333" : "transparent",
    };


    const { logout, isAuthenticated } = useAuth0();

    return (
        (
        <div className="pt-1 mb-4">
            <Button
                style={button_style}
                size="lg"
                onClick={() => {
                    logout({logoutParams: {returnTo: window.location.origin}}).then(r => {setIsLogIn(false);})
                 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                LogOut
            </Button>
        </div>
        )
    );
}