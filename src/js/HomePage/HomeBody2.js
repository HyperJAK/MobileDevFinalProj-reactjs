import imgSrc from "../../assets/4.jpg";
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    `;


const HomeImage = ()=> {
    const imgSrc = require('../../assets/4.jpg');

    const Img = styled.img`
        width: 70%;
        height: 500px;
        margin: 0 auto;
        display: block;
        border-radius: 20px;
      max-width: 1000px;
    `;

    return <Img src={imgSrc} alt="None"></Img>;
}

export default function HomeBody2(){



    return(
        <Div>
            <HomeImage />
        </Div>

    );




}