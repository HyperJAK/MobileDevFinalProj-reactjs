import {Button} from "react-bootstrap";
import React, {useState} from "react";


export const DropDownButton = ({props}) =>{

const {
    newScreen,
    setCurrentScreen,
    title
} = props;


    const [isHovered, setIsHovered] = useState(false);

    const button_style = {
        margin: '1px 0',
        width: "200px",
        height: "60px",
        fontWeight: isHovered? 'bold' : 'normal',
        color: isHovered ? "white" : "black",
        border: isHovered? "1px solid black" : "0 solid black",
        backgroundColor: isHovered ? "#333333" : "transparent",
    };



    return(

            <Button
                style={button_style}
                size="md"
                onClick={() => {
                    setCurrentScreen(newScreen);
                    var serializedString = JSON.stringify({
                        currentScreen: newScreen
                    });
                    localStorage.setItem('currentScreen', serializedString);
                    console.log(newScreen);
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {title}
            </Button>



    );
}