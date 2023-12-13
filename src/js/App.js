import React, {useState, useEffect} from 'react';
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

export const Spline = React.lazy(() => import("@splinetool/react-spline"));
export const SplineHotelScene = <Spline scene="https://prod.spline.design/9FI0ZU1nnSTP8Xwt/scene.splinecode" />;

export const SplineFlightScene = <Spline scene="https://prod.spline.design/BOGpfRiHRnN9C-Wa/scene.splinecode" />;

export const SplineHomeScene = <Spline scene="https://prod.spline.design/kxsypMIN3S8rP06j/scene.splinecode" />;


export default function App() {

  //For SignIn/SignUp
  const [isLogIn, setIsLogIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cPassword, setCPass] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false);
  const [user, setUser] = useState({id:null, username: null, email:null, password:null, image:null});
  const [currentScreen, setCurrentScreen] = useState('login');

  const [hotelsData, setHotelsData] = useState([]);
  const [flightsData, setFlightsData] = useState([]);
  const [roomsData, setRoomsData] = useState([{}]);
  const [tripsData, setTripsData] = useState();
  const [refreshTripsData, setRefreshTripsData] = useState(true);

  const [userTrip, setUserTrip] = useState([{hotel: null, flight: null}]);


    function addHotel(hotelInfo) {
        setUserTrip(prevTrips => {
            const lastTrip = prevTrips[prevTrips.length - 1];
            if (lastTrip && lastTrip.hotel === null) {
                // Update the last hotel in the existing trips
                return prevTrips.map((trip, index) =>
                    index === prevTrips.length - 1 ? { ...trip, hotel: hotelInfo } : trip
                );
            } else {
                // Add a new trip with the hotel information
                return [...prevTrips, { hotel: hotelInfo, flight: null }];
            }
        });
    }

    function addFlight(flightInfo) {
        setUserTrip(prevTrips => {
            const lastTrip = prevTrips[prevTrips.length - 1];
            if (lastTrip && lastTrip.flight === null) {
                // Update the last flight in the existing trips
                return prevTrips.map((trip, index) =>
                    index === prevTrips.length - 1 ? { ...trip, flight: flightInfo } : trip
                );
            } else {
                // Add a new trip with the flight information
                return [...prevTrips, { hotel: null, flight: flightInfo }];
            }
        });
    }

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
    timeout: 120000,
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
    if(currentScreen === 'login'){
        setCurrentScreen('signup')
    }
    else if(currentScreen === 'signup'){
        setCurrentScreen('login')
    }


  }

  async function handleAddHotel(hotelId) {
console.log(hotelId)
      const data = {hotelId};
      try {
          const response = await axios.post('http://localhost:4000/getRooms', data);

          setRoomsData((prevRooms) => ({
              ...prevRooms,
              response
          }));

          addHotel(response.data.jsonCurrentHotelRooms[0].room.roomId);
          console.log(response.data.jsonCurrentHotelRooms);
      } catch (error) {
          console.log(error);
      }

      console.log(userTrip)

  }

    async function handleAddFlight(flightId) {
        addFlight(flightId);
        console.log(flightId);
    }

    async function addNewTrip(tripName){
      try{
          const id = user.id;
          console.log('User id: ' + user.id)

          const data = {tripName,id,userTrip}

          const response = await axios.post('http://localhost:4000/addNewTrip', data);


      }catch (error){
          console.log(error)
      }

    };

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
          <Home setCurrentScreen={setCurrentScreen}/>
          <Credits />

        </>
    );
  } else if (currentScreen==='hotel') {
    return (
      <>
          <Navigation user={user} setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
        <Hotel setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} handleAddHotel={handleAddHotel}/>
          <Credits />
      </>
    )
  } else if (currentScreen==='flight') {
    return (
      <>
        <Navigation user={user} setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
        <Flight setCurrentScreen={setCurrentScreen} currentScreen={currentScreen} handleAddFlight={handleAddFlight}/>
          <Credits />
      </>
    )
  }

  else if (currentScreen==='trip') {
      return (
          <>
              <Navigation user={user} setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
              <Trips props={{currentScreen,setCurrentScreen,user,tripsData,setTripsData,refreshTripsData,setRefreshTripsData,addNewTrip}}/>
              <Credits />
          </>
      )
  }

  else if (currentScreen==='profile') {
      return (
          <>
              <Navigation user={user} setIsLogIn={setIsLogIn} setCurrentScreen={setCurrentScreen} currentScreen={currentScreen}/>
              <UserProfile user={user} setUser={setUser}/>
              <Credits />
          </>
      )
  }
}



