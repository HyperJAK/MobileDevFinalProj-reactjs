import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { AES, enc } from "crypto-js";
import {EncryptPassword} from "../Utilities";

export const AuthRegister = ({setIsLogIn}) =>{
    const [isHovered, setIsHovered] = useState(false);
    const [decryptedText, setDecryptedText] = useState(null);

    const { isAuthenticated, user, loginWithPopup } = useAuth0();

    const button_style = {
        width: "100%",
        marginTop: "15px",
        borderRadius: "30px",
        height: "60px",
        color: isHovered ? "white" : "black",
        border: "1px solid red",
        backgroundColor: isHovered ? "#333333" : "transparent",
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (isAuthenticated && user?.sub) { // Check if user and user.sub are defined
                    const encrypted = await EncryptPassword(user.sub)
                    console.log(encrypted)

                    // Try comparing encrypted key and email to the database

                    // If it doesn't exist, send email and encrypted key to the user
                    // Set user pfp and username to the database

                    // Else, set user isLoggedIn
                    setIsLogIn(false);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [isAuthenticated, user, process.env.REACT_APP_ENCRYPTION_KEY]);

    return (
        (
            <div className="pt-1 mb-4">
                <Button
                    style={button_style}
                    size="lg"
                    onClick={() => loginWithPopup()}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    External Login
                </Button>
            </div>
        )
    );
};
