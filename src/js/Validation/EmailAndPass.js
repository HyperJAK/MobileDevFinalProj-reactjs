import {FloatingLabel, Form} from "react-bootstrap";
import {ValidEmail, ValidPassword} from "../Utilities";

export const EmailAndPass = ({props}) => {

    const { email, password, setEmail, setPass } = props;


    return (
        <>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control style={{ border: ValidEmail(email) ? '1px solid black' : '1px solid red' }} type="email" value={email} onChange={e => {

                    if(e.target.value.length < 60){
                        setEmail(e.target.value)
                    }}} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control style={{ border: ValidPassword(password) ? '1px solid black' : '1px solid red' }} type="password" placeholder="Password" value={password} onChange={e => {

                    if(e.target.value.length < 50){
                        setPass(e.target.value)
                    }}} />
            </FloatingLabel>
        </>
    );
};