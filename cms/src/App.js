import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './screens/admin-screen/common/header';
import CampAdd from './screens/Camp/Camp add/Campadd';
import Camplist from './screens/Camp/Camp list/Camplist';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
   <React.Fragment>

      <Routes>
        <Route path={'/'} element={<CampAdd></CampAdd>}/>
        
    <Route path={"/camp/add"} element={<CampAdd></CampAdd>}/>
 
   
        <Route path={"/camp/list"} element={<Camplist></Camplist>}/>
 
      </Routes>
   
     </React.Fragment>
  );
}

export default App;
