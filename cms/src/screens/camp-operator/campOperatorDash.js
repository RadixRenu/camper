import React from "react";
import Cards from "./Cards";
import Navbar from "./Navbar";
import SideNav from "./SideNav";
let CampOperatorDash=()=>
{
  return(
    <React.Fragment>
      
      <Navbar/>
      <div className="container-fluid">
           <div className="row">
              <div className="col-md-3 ">
                <SideNav/>
              </div>  
              <div className="col-md-9">
              <div className="container-fluid mt-5">
                <Cards/>
              </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}
export default CampOperatorDash

