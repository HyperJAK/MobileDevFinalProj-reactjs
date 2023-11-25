import {Button, FloatingLabel, Form} from "react-bootstrap";
import {useState} from "react";
import styled from "styled-components";

const quickInput_style = {
    border: '2px solid black',
    maxWidth: '180px',
    height: '70px'
}

const quickInputLabel_style = {
    fontWeight: 'bold'
}


const InputSearch = styled.button`
  width: 150px;
  height: 80px;
  border-radius: 10px;
  background-color: #61dafb;
`;



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
            <InputSearch variant="primary" size="lg" onClick={handleHomeQuickInputSearch}>
                {name}
            </InputSearch>{' '}
        </div>
    );
}


export const QuickPlanDiv = () =>{

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
        opacity: '0.93'
    }

    const childDiv_style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1px',
    }


    //For Home/Quick Plan Trip div
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departDate, setDepartDate] = useState("");
    const [returnDate, setReturnDate] = useState("");



    const handleHomeQuickInputSearch = async e =>{

        //The values of these fields (to, from, departDate, returnDate) will change based on the input in Home so far.
        //So use these fields to fill db

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