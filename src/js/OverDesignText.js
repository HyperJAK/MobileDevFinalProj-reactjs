import styled from "styled-components";

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: wrap;
  max-width: 400px;
  position: absolute;
  top: 35%;
  left: 2%;
  color: white;
  font-family: Roboto;
  font-weight: bold;
`;

const H1 = styled.h1`
  font-size: 3vw; /* Use vw for responsive font size */
`;

const P = styled.p`
  font-size: 1vw; /* Use vw for responsive font size */
`;

export const OverDesignText = ({props}) => {

    const {title, description} = props;
    return (
        <LeftDiv>
            <H1>{title}</H1>
            <br></br>
            <P>{description}</P>
            <br></br>
            <P>Feel like going on a trip?</P>
            <P>We have your back!</P>
        </LeftDiv>
    );
};
