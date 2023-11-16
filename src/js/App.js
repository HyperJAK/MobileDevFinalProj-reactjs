import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./Validation/LogIn.js";
import Register from "./Validation/Register.js";
import {useIdleTimer} from "react-idle-timer"
import axios from "axios";
import Trips from "./HomePage/Trips";
import {Alert} from "./HomePage/AlertFunction";
import Navigation from "./Nav/Navigation";


export default function App() {

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
    }catch(error){
      alert(error.response.data.error);
    }
  }

  const handleSignup = async e => {
    const userInfo = {email, password};
    if(password===CPassword){
      try {
        const response = await axios.post(
          "http://localhost:4000/signup",
          userInfo
        );
        //console.log(response.data.message)
        setUser(
          response.data.data.email,
          response.data.data.password
          )
        alert(response.data.message)
      }catch(error){
        //alert(error.response.data.error);
        alert(error)
      }
    }else{
      alert('Confirmation does not match password.')
    }
    
  }

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


  if (isLogIn && !isRegistering) {
    return (LogIn(email, password, setEmail, setPass, handleLoggin, handleRegistring, usersData));
  } else if (isRegistering) {
    return (Register(email, password, CPassword, setEmail, setPass, setCPass, handleSignup, handleRegistring, usersData))
  } else {
    return (<>
    <Navigation />
          <Trips Email={email} tableData={tableData} setTableData={setTableData} handleLoggin={handleLoggin} setEmail={setEmail} setPass={setPass} setCPass={setCPass} userData={usersData} user={user}/>
          <Alert
              showSessionExpiredModal={showSessionExpiredModal}
              handleCloseSessionExpiredModal={handleCloseSessionExpiredModal}
          />
        </>
    );

  }
}



