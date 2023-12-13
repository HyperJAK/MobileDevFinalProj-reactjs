import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { AES, enc } from "crypto-js";
import {EncryptPassword, SignInFunc, SignUpFunc, ValidEmail, ValidPassword} from "../Utilities";
import axios from "axios";
import {DarkBlue} from "../../assets/colors/Colors";

export const AuthRegister = ({setIsLogIn, setUser, setCurrentScreen}) =>{
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
        backgroundColor: isHovered ? DarkBlue : "transparent",
    };

    useEffect(() => {
        const fetchData = async () => {

        if (isAuthenticated && user?.sub) { // Check if user and user.sub are defined

            const encryptedPass = await EncryptPassword(user.sub)
            const email = user.email
            const username = user.name
            const profilePic = user.picture

            console.log(encryptedPass)
            console.log(email)


            const userInfo = { email, encryptedPass, username, profilePic };
            // send the username and password to the server
            try {
                await SignInFunc(userInfo, setUser);
                setIsLogIn(false);
                setCurrentScreen('home');

            }finally {
                await SignUpFunc(userInfo, setUser);
                setIsLogIn(false);
                setCurrentScreen('home');
            }

            const data = {email};

            try {
                const response = await axios.post(
                    "http://localhost:4000/getUserId",
                    data
                );

                const userId =  (response.data.user.id)

                setUser((prevUser) => ({
                    ...prevUser,
                    id: userId,
                    username: username,
                    email: email,
                    password: encryptedPass,
                    image: profilePic
                }));

            } catch (error) {
                //alert(error.response.data.error);
                alert(error)
                return false;
            }




                    // Try comparing encrypted key and email to the database

                    // If it doesn't exist, send email and encrypted key to the user
                    // Set user pfp and username to the database

                    // Else, set user isLoggedIn

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
