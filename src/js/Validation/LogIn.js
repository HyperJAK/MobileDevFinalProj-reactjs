import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card, FloatingLabel} from 'react-bootstrap';
import authImg from '../../assets/auth.png'
import './css/Accounts.css';
import { Form } from 'react-bootstrap';
import axios from "axios";

const EmailAndPass = ({ Email, Password, setEmail, setPass }) => {
    return (
        <>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" value={Email} onChange={e => setEmail(e.target.value)} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" value={Password} onChange={e => setPass(e.target.value)} />
            </FloatingLabel>
        </>
    );
};



export default function LogIn(email,password,setEmail,setPass,handleRegistring,setIsLogIn,setUser){







    const handleLoggin = async e => {
        e.preventDefault();
        const userInfo = { email, password };
        // send the username and password to the server
        try {
            const response = await axios.post(
                "http://localhost:4000/login",
                userInfo
            );
            console.log(response);
            setUser(
                response.data.data.id,
                response.data.data.username,
                response.data.data.password
            )
            alert(response.data.message)
            setIsLogIn();
        }catch(error){
            alert(error.response.data.error);
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
                                                <span className="h1 fw-bold mb-0">Sign In</span>
                                            </div>
                                            <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>
                                                Sign into your account
                                            </h5>
                                            <div className="form-outline mb-4">

                                            </div>

                                            <EmailAndPass Email={email} Password={password} setEmail={setEmail} setPass={setPass} />

                                            <div className="pt-1 mb-4">
                                                <Button variant="dark" size="lg" onClick={handleLoggin}>
                                                    Login
                                                </Button>
                                            </div>
                                            <p className="mb-5 pb-lg-2" style={{color: 'rgba(52, 52, 52, 0.8)'}}>
                                                Don't have an account? <a id={'signUp_link'} onClick={handleRegistring}>
                                                Register here
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
        </section>);

}