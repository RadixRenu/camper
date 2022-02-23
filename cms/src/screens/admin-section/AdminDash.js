import React from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
let AdminDash=()=>
{
  return(
    <React.Fragment>
      
      <Navbar/>
      <div className="row">
        <div className="col-3">
          <SideNav/>
        </div>
        <div className="col-9">
          <div className="container mt-5">
          <Cards/>
          </div>
        </div>

      </div>
      
    </React.Fragment>
  )
}
export default AdminDash

