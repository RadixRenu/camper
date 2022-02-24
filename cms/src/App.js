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
  );
}

export default App;
