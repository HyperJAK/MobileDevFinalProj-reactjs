import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./Validation/LogIn.js";
import Register from "./Validation/Register.js";
import {useIdleTimer} from "react-idle-timer"
import axios from "axios";
import Home from "./HomePage/Home";
import {Alert} from "./HomePage/AlertFunction";


export default function App() {

  const [isLoggin, setIsLoggin] = useState(true);
  const [Email, setEmail] = useState("");
  const [Password, setPass] = useState("");
  const [CPassword, setCPass] = useState("");
  const [isRegistring, setIsRegistring] = useState(false);
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [usersData, setUsersData] = useState([]);



  useEffect(() => {

    axios.get('http://localhost:5174/api/getUsers').then((response) => {
      setUsersData(response.data);
    });


    // Fetch table data
    axios.get('http://localhost:5174/api/get').then((response) => {
      setTableData(response.data);
    });


  }, [isLoggin] );

  function handleLoggin() {
    if (Email === "jak" && Password === "jak1") {
      setIsLoggin(!isLoggin);
    } else {
      setIsLoggin(!isLoggin);
    }
  }

  const handleOnIdle = () => {
    if (!isRegistring && !isLoggin) {
      setShowSessionExpiredModal(true);
    }
  };

  const {reset} = useIdleTimer({
    timeout: 60000,
    onIdle: handleOnIdle,
  });

  // Reset the idle timer on component mount and when active state changes
  useEffect(() => {
    reset();

    return () => {
      setShowSessionExpiredModal(false)
    };
  }, [isLoggin, isRegistring, reset]);

  function handleRegistring() {
    setIsRegistring(!isRegistring);
  }

  const handleCloseSessionExpiredModal = () => {
    setIsLoggin(true);
    setIsRegistring(false);
  };


  if (isLoggin && !isRegistring) {
    return (LogIn(Email, Password, setEmail, setPass, handleLoggin, handleRegistring, usersData));
  } else if (isRegistring) {
    return (Register(Email, Password, CPassword, setEmail, setPass, setCPass, handleLoggin, handleRegistring, usersData))
  } else {
    return (<>
          <Home Email={Email} tableData={tableData} setTableData={setTableData} handleLoggin={handleLoggin} setEmail={setEmail} setPass={setPass} setCPass={setCPass} userData={usersData} />
          <Alert
              showSessionExpiredModal={showSessionExpiredModal}
              handleCloseSessionExpiredModal={handleCloseSessionExpiredModal}
          />
        </>
    );

  }
}



