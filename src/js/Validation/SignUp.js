import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card, Form, FloatingLabel} from 'react-bootstrap';
import axios from "axios";
import authImg from '../../assets/auth.png'
import './css/Accounts.css';
import {EncryptPassword, ValidEmail, ValidPassword, SignUpFunc} from "../Utilities";
import {EmailAndPass} from "./EmailAndPass";
import {AuthRegister} from "./AuthRegister";


export const SignUp = ({props}) => {

    const {
        email,
        password,
        cPassword,
        setEmail,
        setPass,
        setCPass,
        handleRegistring,
        setIsLogIn,
        setUser,
        setCurrentScreen,

    } = props;

    const handleSignup = async e => {
        //function to handle setCPass not being updated when calling handleSignUp
        e.preventDefault();

        console.log(password);
        console.log(cPassword);

        if((ValidEmail(email) && ValidPassword(password)) && password === cPassword) {
            const encryptedPass = await EncryptPassword(password);
            const username = null;
            const profilePic = null;

            const userInfo = {username, email, encryptedPass, profilePic};
            console.log("Signing up")

            try{
                await SignUpFunc(userInfo, setUser);
                    setCurrentScreen('home')
            }catch(error){
                //alert(error.response.data.error);
                alert(error.response.data.error)
            }


        }
        else{
            // nothin~
        }

    }


    return(
        <section style={{ backgroundColor: '#d0bec3', backgroundSize: 'cover', height: '100vh', overflow: 'auto' }}>
            <Container className="py-5 h-100">
                <Row className="d-flex justify-content-center align-items-center h-100">
                    <Col xl={10}>
                        <Card style={{borderRadius: '1rem'}}>
                            <Row className="g-0">
                                <Col md={6} lg={5} className="d-none d-md-block">
                                    <Card.Img
                                        src={authImg}
                                        alt="login form"
                                        className="img-fluid"
                                        style={{borderRadius: '1rem 0 0 1rem', height: '700'}}
                                    />
                                </Col>
                                <Col md={6} lg={7} className="d-flex align-items-center">
                                    <Card.Body className="p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3"
                                                   style={{color: '#ff6219'}}></i>
                                                <span className="h1 fw-bold mb-0">Sign Up</span>
                                            </div>
                                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>
                                                Sign into your account
                                            </h5>
                                            <div className="form-outline mb-4">

                                                <EmailAndPass email={email} password={password} setEmail={setEmail} setPass={setPass} />


                                                <FloatingLabel controlId="floatingPassword" label="Confirm Password">
                                                    <Form.Control style={{ border: cPassword === password ? '1px solid black' : '1px solid red', marginTop: '20px'}} type="password" placeholder="Confirm Password" value={cPassword} onChange={e => setCPass(e.target.value)} />
                                                </FloatingLabel>



                                            </div>
                                            <div className="pt-1 mb-4">
                                                <Button variant="dark" size="lg" onClick={handleSignup}>
                                                    SignUp
                                                </Button>
                                            </div>

                                            <AuthRegister setIsLogIn={setIsLogIn} setUser={setUser} setCurrentScreen={setCurrentScreen}/>

                                            <p className="mb-5 pb-lg-2" style={{color: 'rgba(52, 52, 52, 0.8)'}}>
                                                Have an Account? <a  id={'signIn_link'} onClick={handleRegistring}>
                                                Sign In
                                            </a>
                                            </p>
                                            <a href="#!" className="small text-muted">
                                                Terms of use.
                                            </a>
                                            <a href="#!" className="small text-muted">
                                                Privacy policy
                                            </a>
                                        </form>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );

}