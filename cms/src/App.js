import logo from './logo.svg';
import './App.css';
import React from 'react';
import header from './screens/admin-screen/common/header';
import Header from './screens/admin-screen/common/header';
import campOperatorDash from './screens/camp-operator/campOperatorDash';
import { Button } from '@mui/material';
import ResponsiveDrawer from './screens/camp-operator/campOperatorDash';
function App() {
  return (
   <React.Fragment>
     {/* <Header/> */}
     <ResponsiveDrawer/>
     </React.Fragment>
  );
}

export default App;
