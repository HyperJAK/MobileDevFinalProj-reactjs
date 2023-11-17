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
        max-width: 65%;
        margin: 0 auto;
        display: block;
        border-radius: 20px;
    `;

    return <Img src={imgSrc} alt="None"></Img>;
}

export default function HomeBody1({from, to, returnDate, departDate, setFrom, setTo, setDepartDate, setReturnDate, handleHomeQuickInputSearch}){



    return(
        <Div>

            <HomeImage />
        </Div>

    );




}