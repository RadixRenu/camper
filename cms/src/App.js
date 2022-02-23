import logo from './logo.svg';
import './App.css';
import React from 'react';
import CampOperatorDash from './screens/camp-operator/CampOperatorDash';
import AdminDash from './screens/admin-section/AdminDash';
function App() {
  return (
   <React.Fragment>
     {/* <CampOperatorDash/> */}
     <AdminDash/>
     </React.Fragment>
  );
}

export default App;
