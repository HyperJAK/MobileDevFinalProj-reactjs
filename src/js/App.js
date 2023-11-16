import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from "./LogIn.js";
import Register from "./Register.js";
import {useIdleTimer} from "react-idle-timer"
import axios from "axios";
import Home from "./HomePage/Home";
import {Alert} from "./HomePage/AlertFunction";


export default function App() {

  const [isLoggin, setIsLoggin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [CPassword, setCPass] = useState("");
  const [isRegistring, setIsRegistring] = useState(false);
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [user, setUser] = useState([{id:null, email:null, password:null}]);



<<<<<<< Updated upstream
  useEffect(() => {
    // Fetch table data
    axios.get('http://localhost:5174/api/get').then((response) => {
      setTableData(response.data);
    });
=======
  // useEffect(() => {
>>>>>>> Stashed changes

  //   axios.get('http://localhost:4000/getUsers').then((response) => {
  //     setUsersData(response.data);
  //   });

<<<<<<< Updated upstream
=======
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


  // }, [isLoggin] );

  //console.log(usersData);

>>>>>>> Stashed changes

  }, [isLoggin,isRegistring] );

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
    return (LogIn(email, password, setEmail, setPass, handleLoggin, handleRegistring, usersData));
  } else if (isRegistring) {
    return (Register(email, password, CPassword, setEmail, setPass, setCPass, handleSignup, handleRegistring, usersData))
  } else {
    return (<>
<<<<<<< Updated upstream
          <Home tableData={tableData} setTableData={setTableData} handleLoggin={handleLoggin} setEmail={setEmail} setPass={setPass} setCPass={setCPass}/>
=======
          <Home Email={email} tableData={tableData} setTableData={setTableData} handleLoggin={handleLoggin} setEmail={setEmail} setPass={setPass} setCPass={setCPass} userData={usersData} user={user}/>
>>>>>>> Stashed changes
          <Alert
              showSessionExpiredModal={showSessionExpiredModal}
              handleCloseSessionExpiredModal={handleCloseSessionExpiredModal}
          />
        </>
    );

  }
}



