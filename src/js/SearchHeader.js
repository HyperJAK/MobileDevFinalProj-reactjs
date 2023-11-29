import React, {useState} from 'react';
import styled from "styled-components";
import downArrow from '../assets/icons/down.png';
import rightArrow from '../assets/icons/next.png';

export const SearchHeader = ({component, title}) => {


    const [isDropped, setIsDropped] = useState(true);
    /*const{
        currentScreen,setCurrentScreen,user,tripsData,setTripsData
    } = props;*/

    const ResultsWrapper = styled.div`
      display: flex;
      flex-direction: column;
      padding: 20px;
      max-width: 1500px;
      margin: 0 auto;
      justify-content: center;

    `;


    const ResultsHeader = styled.div`
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      background-color: #08243c;
      border-radius: 20px;
      color: white;
    `;

    const ResultsHeaderTop = styled.div`
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;
    `;

    const ResultsTitle = styled.h2`
    font-family: "Font Awesome 6 Pro", "Font Awesome 6 Free";
      font-weight: bold;
      padding: 10px;
    `;

    const ResultsIcon = styled.button`
      max-width: 50px;
      width: 50px;
      height: 50px;
      max-height: 50px;
      margin: 7px 10px 0 0;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      background-image: ${(isDropped ? `url(${downArrow})` : `url(${rightArrow})`)};
      cursor: pointer;
      border-radius: 10px;
    `;

    const ResultsSeparator = styled.button`
      height: 1px;
      background-color: #282c34;
    `;

    const ResultsDisplayer = styled.div`
      display: ${(isDropped ? `flex` : `none`)};
      flex-wrap: wrap;
      flex-direction: row;
      gap: 20px;
      background-color: whitesmoke;
      padding: 20px;
      border-radius: 0 0 30px 30px;
      max-width: 95%;
      margin-left: 2.5%;
    
    `;






    return (
        <ResultsWrapper>
            <ResultsHeader>

                <ResultsHeaderTop>
                    <ResultsTitle>{title}</ResultsTitle>
                    <ResultsIcon  onClick={() => setIsDropped(!isDropped)}/>

                </ResultsHeaderTop>

            </ResultsHeader>

            <ResultsDisplayer>
                {component}
            </ResultsDisplayer>

        </ResultsWrapper>

    );
};
