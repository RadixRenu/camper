import './App.css';
import React from 'react';
import CampOperatorDash from './screens/camp-operator/CampOperatorDash';
import AdminDash from './screens/admin-section/AdminDash';
import Login from './screens/login/Login';
import Registration from './screens/user-screen/Registration';
import UserList from './screens/user-screen/UserList';
import React from 'react';
import DoctorDashboard from './screens/DoctorDashboard/DoctorDashboard';
import LabDashboard from './screens/LabDashboard/LabDashboard';
import Msg_Hooks from './screens/LabDashboard/testFile';

function App() {
  return (
   <React.Fragment>
     <Login/>
     {/* <CampOperatorDash/> */}
     {/* <AdminDash/> */}
    <Registration/> 
    {/* <UserList/> */}
   <LabDashboard/>
   {/* <Msg_Hooks/> */}
   {/* <DoctorDashboard /> */}
     </React.Fragment>
  );
}

export default App;
