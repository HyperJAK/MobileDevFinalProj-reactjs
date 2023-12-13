import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";



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
`;


    return(
            <Container style={{ maxWidth: '1200px', marginTop: '50px', marginBottom: '50px'}}>
                <div className="d-flex justify-content-between gap-3">
                    <Button variant="primary" className="flex-fill" onClick={()=>{
                        setCurrentScreen('flight')
                        var serializedString = JSON.stringify({
                            lastScreen: 'flight',
                        });
                        localStorage.setItem('currentScreen', serializedString);
                    }} >Flights</Button>
                    <Button variant="secondary" className="flex-fill" onClick={()=>{
                        setCurrentScreen('hotel')
                        var serializedString = JSON.stringify({
                            lastScreen: 'hotel',
                        });
                        localStorage.setItem('currentScreen', serializedString);
                    }} >Hotels</Button>
                    <Button variant="success" className="flex-fill" onClick={()=>{
                        setCurrentScreen('trip')
                        var serializedString = JSON.stringify({
                            lastScreen: 'trip',
                        });
                        localStorage.setItem('currentScreen', serializedString);
                    }} >Trips</Button>
                </div>
            </Container>

    );




}