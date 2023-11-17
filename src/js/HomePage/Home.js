import imgSrc from "../../assets/4.jpg";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import * as url from "url";
import HomeBody1 from "./HomeBody1";
import HomeBody2 from "./HomeBody2";
import styled from "styled-components";




const FullNav_style = {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-evenly'
}

const quickInput_style = {
    border: '2px solid black',
    maxWidth: '180px',
    height: '70px'
}

const quickInputLabel_style = {
    fontWeight: 'bold'
}
const quickInputSearch_style = {
    maxWidth: '180px',
    height: '70px'

}



const QuickInputField = ({name, elementToShow, elementToChange}) =>{

    return(
        <FloatingLabel style={quickInputLabel_style} controlId="floatingInput" label={name} className="mb-3">
            <Form.Control style={quickInput_style} type="text" placeholder={name} value={elementToShow} onChange={e => elementToChange(e.target.value)} />
        </FloatingLabel>
    );
}


const QuickInputSearch = ({name, handleHomeQuickInputSearch}) =>{

    return(
        <div className="mb-2">
            <Button style={quickInputSearch_style} variant="primary" size="lg" onClick={handleHomeQuickInputSearch}>
                {name}
            </Button>{' '}
        </div>
    );
}

const QuickPlanDiv = ({from, to, returnDate, departDate, setFrom, setTo, setDepartDate, setReturnDate, handleHomeQuickInputSearch}) =>{

    const parentDiv_style = {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        width: '100%',
        height: '550px',
        margin: '0 auto',
        gap: '50px',
        paddingTop: '100px',
        backgroundImage: 'url(https://i.ibb.co/RSCv84h/wallpaperflare-com-wallpaper.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }

    const childDiv_style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1px'
    }


    return(
        <div style={parentDiv_style}>

            <div style={childDiv_style}>
                <h1 style={{fontFamily: 'Playfair Display', color: 'whitesmoke'}}>Cheap flights at your fingertips.</h1>

            </div>
            <div style={childDiv_style}>
                <h2 style={{fontFamily: 'Playfair Display', color: 'whitesmoke'}}>Quick Flight Planner</h2>
            </div>

            <div style={childDiv_style}>
                <QuickInputField name='From' elementToShow={from} elementToChange={setFrom}/>
                <QuickInputField name='To' elementToShow={to} elementToChange={setTo}/>
                <QuickInputField name='Depart Date'/>
                <QuickInputField name='Return Date'/>
                <QuickInputField name='Flight Class'/>
                <QuickInputSearch name='Search' handleHomeQuickInputSearch={handleHomeQuickInputSearch}/>



            </div>

            <div style={childDiv_style}>



            </div>

        </div>


    );
}


export default function Home({from, to, returnDate, departDate, setFrom, setTo, setDepartDate, setReturnDate, handleHomeQuickInputSearch}){



 return(
     <div style={FullNav_style}>

         <QuickPlanDiv from={from} to={to} departDate={departDate} returnDate={returnDate} setFrom={setFrom} setTo={setTo} setDepartDate={setDepartDate} setReturnDate={setReturnDate} handleHomeQuickInputSearch={handleHomeQuickInputSearch}/>

             <HomeBody1 />
             <HomeBody2 />

     </div>

 );




}