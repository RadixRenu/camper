import logo from './logo.svg';
import './App.css';
import React from 'react';
import CampOperatorDash from './screens/camp-operator/CampOperatorDash';
import AdminDash from './screens/admin-section/AdminDash';
import Login from './screens/login/Login';

function App() {
  return (
   <React.Fragment>
     {/* <Login/> */}
     {/* <CampOperatorDash/> */}
     <AdminDash/>
     </React.Fragment>
  );
}

export default App;
