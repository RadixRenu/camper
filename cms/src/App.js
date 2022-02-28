<<<<<<< HEAD
import './App.css';
import React from 'react';
import CampOperatorDash from './screens/camp-operator/CampOperatorDash';
import AdminDash from './screens/admin-section/AdminDash';
import Login from './screens/login/Login';
import Registration from './screens/user-screen/Registration';
import UserList from './screens/user-screen/UserList';

function App() {
  return (
   <React.Fragment>
     <Login/>
     {/* <CampOperatorDash/> */}
     {/* <AdminDash/> */}
    <Registration/> 
    {/* <UserList/> */}
 
     </React.Fragment>
=======
import "./App.css";
import React from "react";
import Registration from "./screens/user-screen/Registration";
import UserList from "./screens/user-screen/UserList";
import Captcha from "./screens/user-screen/Captcha";

function App() {
  return (
    <React.Fragment>
      <Registration />
      {/* <UserList /> */}
      {/* <Captcha /> */}
    </React.Fragment>
>>>>>>> 33e65a2 (Registration page, captcha and integrated Api in Registration Page)
  );
}

export default App;
