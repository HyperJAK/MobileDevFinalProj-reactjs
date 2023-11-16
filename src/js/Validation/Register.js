import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col, Card} from 'react-bootstrap';
import axios from "axios";
import authImg from '../../assets/auth.png'
import '../../css/Accounts.css';


export default function Register(Email,Password,CPassword,setEmail,setPass,setCPass,handleSignup,handleRegistring,usersData){

    


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
                                                <input value={Email} type="email" id="form2Example17"
                                                       className="form-control form-control-lg"
                                                       onChange={e=>{setEmail(e.target.value)}}/>
                                                <label className="form-label" htmlFor="form2Example17">
                                                    Email address
                                                </label>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <input value={Password} type="password" id="form2Example27"
                                                       className="form-control form-control-lg"
                                                       onChange={e=>{setPass(e.target.value)}} />
                                                <label className="form-label" htmlFor="form2Example27">
                                                    Password
                                                </label>
                                                <input value={CPassword} type="password" id="form2Example30"
                                                       className="form-control form-control-lg"
                                                       onChange={e=>{setCPass(e.target.value)}} />
                                                <label className="form-label" htmlFor="form2Example30">
                                                    Confirm Password
                                                </label>
                                            </div>
                                            <div className="pt-1 mb-4">
                                                <Button variant="dark" size="lg" onClick={handleSignup}>
                                                    Register
                                                </Button>
                                            </div>
                                            <p className="mb-5 pb-lg-2" style={{color: 'whitesmoke'}}>
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