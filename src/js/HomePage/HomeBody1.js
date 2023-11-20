import styled from 'styled-components';
import Container from "react-bootstrap/Container";
import {Button} from "react-bootstrap";





const SwitchElementButtons = () => {

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
                <Button variant="primary" className="flex-fill">Flights</Button>
                <Button variant="secondary" className="flex-fill">Hotels</Button>
                <Button variant="success" className="flex-fill">Trips</Button>
            </div>
        </Container>

    );

}






export default function HomeBody1(){



    return(
        <div>
            <SwitchElementButtons />
        </div>

    );




}