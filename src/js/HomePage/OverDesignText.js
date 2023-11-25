import styled from "styled-components";


const LeftDiv = styled.div`
display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: wrap;
  max-width: 400px;
  position: absolute;
  top: 20%;
  left: 2%;
  color: white;

  font-family: Roboto;
  font-weight: bold;

`;


const H1 = styled.h1`
font-size: 56px;

`;


const P = styled.p`
  font-size: 18px;

`;


export const OverDesignText = () =>{



    return(
        <LeftDiv>
            <H1>Book Your Trip</H1><br></br>
            <P>We are a dedicated platform that allows you to book any kind of flight, hotel or even both.</P><br></br>
            <P>Feel like going on a trip ?</P>
            <P>We have your back!</P>

        </LeftDiv>


    );

}