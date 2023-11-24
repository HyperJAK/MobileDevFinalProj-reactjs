import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./Validation/LogIn.js";
import SignUp from "./Validation/SignUp.js";
import {useIdleTimer} from "react-idle-timer"
import axios from "axios";
import Trips from "./TripsPage/Trips";
import {Alert} from "./HomePage/AlertFunction";
import {Navigation} from "./Nav/Navigation";
import Home from "./HomePage/Home";
import Hotel from './HotelPage/Hotel.js';
import Flight from "./FlightPage/Flight";
import styled from "styled-components";
import {Credits} from "./Credits/Credits";



export default function App() {

  //For SignIn/SignUp
  const [isLogIn, setIsLogIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [CPassword, setCPass] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState([{id:null, email:null, password:null}]);



  // useEffect(() => {

  //   axios.get('http://localhost:4000/getUsers').then((response) => {
  //     setUsersData(response.data);
  //   });

  //   const findUser = usersData.find((item) => item.email === email);
  //   const userId = findUser ? findUser.id : null;
  //   console.log(userId);

  //   axios.post('http://localhost:4000/getUsers', { userId })
  //       .then(response => {
  //         setUsersData(response.data);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching users data:', error);
  //       });


  // }, [isLogIn] );

  //console.log(usersData);


  //}, [isLogIn,isRegistering] );

  const handleOnIdle = () => {
    if (!isRegistering && !isLogIn) {
      setShowSessionExpiredModal(true);
    }
  };

  const {reset} = useIdleTimer({
    timeout: 600000,
    onIdle: handleOnIdle,
  });

  // Reset the idle timer on component mount and when active state changes
  useEffect(() => {
    reset();

    return () => {
      setShowSessionExpiredModal(false)
    };
  }, [isLogIn, isRegistering, reset]);

  function handleRegistring() {
    setIsRegistering(!isRegistering);
  }

  const handleCloseSessionExpiredModal = () => {
    setIsLogIn(true);
    setIsRegistering(false);
  };

  console.log(isLogIn)
  console.log(isRegistering)


  if (isLogIn && !isRegistering) {
    return (LogIn(email, password, setEmail, setPass, handleRegistring, setIsLogIn, setUser));
  } else if (isRegistering) {
    return (SignUp(email, password, CPassword, setEmail, setPass, setCPass, handleRegistring, setIsLogIn, setUser))
  } else {
    return (<>

        <Navigation setIsLogIn={setIsLogIn}/>
          <Home />
          <Hotel />
          <Flight />
          <Credits />

        </>
    );

  }
}



