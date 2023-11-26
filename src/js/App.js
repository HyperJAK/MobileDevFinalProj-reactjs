import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LogIn} from "./Validation/LogIn.js";
import {SignUp} from "./Validation/SignUp.js";
import {useIdleTimer} from "react-idle-timer"
import axios from "axios";
import {Trips} from "./TripsPage/Trips";
import {Alert} from "./HomePage/AlertFunction";
import {Navigation} from "./Nav/Navigation";
import Home from "./HomePage/Home";
import Hotel from './HotelPage/Hotel.js';
import Flight from "./FlightPage/Flight";
import styled from "styled-components";
import {Credits} from "./Credits/Credits";
import {EncryptPassword, SignInFunc, ValidEmail, ValidPassword} from "./Utilities";
import {UserProfile} from "./Profile/UserProfile";



export default function App() {

  //For SignIn/SignUp
  const [isLogIn, setIsLogIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cPassword, setCPass] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false);
  const [user, setUser] = useState([{id:null, username: null, email:null, password:null, image:null}]);
  const [currentScreen, setCurrentScreen] = useState('login');

  const [hotelsData, setHotelsData] = useState([]);
  const [flightsData, setFlightsData] = useState([]);
  const [tripsData, setTripsData] = useState([]);



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

  const handleLoggin = async e => {
    if(e!=null){
        e.preventDefault();
    }
    console.log(email);
      console.log(password);


    if(ValidEmail(email) && ValidPassword(password)){
        try {

            const encryptedPass = await EncryptPassword(password);
            const userInfo = {email, encryptedPass};

            console.log("Logging func awaiting")
            await SignInFunc(userInfo, setUser);


            // save the user email and password to local storage and on useeffect use the data to log him back in
            var serializedObject = JSON.stringify({
                email: userInfo.email,
                password: encryptedPass,
            });
            var serializedString = JSON.stringify({
                currentScreen: 'home'
            });
            // Store the user in local storage
            localStorage.setItem('userInfo', serializedObject);
            localStorage.setItem('currentScreen', serializedString)

            setCurrentScreen('home')
            setIsLogIn(false);
        } catch (error) {
            alert(error.response.data.error);
        }
    }

    else{
        // nothin~

    }

}

  // get user info back and test them on the database to log him back in
  useEffect( () => {
    var userLocalStorage = localStorage.getItem('userInfo');
    var currentScreenLocalStorage = localStorage.getItem('currentScreen')

    if (userLocalStorage !== null && currentScreenLocalStorage !== null) {
      // The item exists, so you can proceed to remove it

        const localStorageEmail = JSON.parse(localStorage.getItem('userInfo')).email;
        const localStoragePass = JSON.parse(localStorage.getItem('userInfo')).password;

      setEmail(localStorageEmail)
      setPass(localStoragePass)
        setUser((prevUser) => ({
            ...prevUser,
            email: localStorageEmail,
            password: localStoragePass
        }));

      //handleLoggin()

      //setCurrentScreen(JSON.parse(localStorage.getItem('currentScreen')).lastScreen)

    } else {
      // The item doesn't exist or has already been removed
      console.log('Item not found in localStorage.');
    }
  }, [isLogIn])

  const handleOnIdle = () => {
    if (currentScreen!='login'||currentScreen!='signup') {
      setShowSessionExpiredModal(true);
      setCurrentScreen('login')
    }
  };

  console.log(currentScreen)

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
    setIsLogIn(!isLogIn);

  }

  const handleCloseSessionExpiredModal = () => {
    setIsLogIn(true);
    setIsRegistering(false);
  };

  console.log(isLogIn)
  console.log(isRegistering)




  if (currentScreen === 'login') {
    return (
        <LogIn props={{email,password,setEmail,setPass,handleRegistring,setIsLogIn,setUser,setCurrentScreen,handleLoggin}}/>
    )
  } else if (currentScreen === 'signup') {
    return (
        <SignUp props={{email,password,cPassword,setEmail,setPass,setCPass,handleRegistring,setIsLogIn,setUser,setCurrentScreen}}/>
    )
  } else if (currentScreen==='home') {
    return (<>

        <Navigation user={user} setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
          <Home />
          <Credits />

        </>
    );
  } else if (currentScreen==='hotel') {
    return (
      <>
          <Navigation user={user} setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
        <Hotel setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
          <Credits />
      </>
    )
  } else if (currentScreen==='flight') {
    return (
      <>
        <Navigation user={user} setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
        <Flight setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
          <Credits />
      </>
    )
  }

  else if (currentScreen==='trip') {
      return (
          <>
              <Navigation user={user} setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
              <Trips props={{currentScreen,setCurrentScreen,user,tripsData,setTripsData}}/>
              <UserProfile user={user} setUser={setUser}/>
              <Credits />
          </>
      )
  }
}



