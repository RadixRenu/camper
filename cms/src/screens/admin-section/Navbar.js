import React from 'react';
//======Imported icons from react icons=========//
import { IoPersonCircleSharp } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";
//======Import end==============================//
let Navbar =()=>
{
    return(
        <React.Fragment>
            <nav class="navbar navbar-dark bg-primary">
                <div class="container-fluid">
                    {/* Navbar brand name  */}
                    <BsBuilding size={40} className="navbar-brand"/>
                    {/* Navbar text  */}
                    <h2 class="navbar-text text-white"> Admin Dashboard</h2>
                    {/* profile/Logout dropdown */}
                    <form class="d-flex me-2">
                        
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <IoPersonCircleSharp color='white' size={40}/>
                        </a>
                        <ul className="dropdown-menu" >
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>      
                    </form>
                    {/* Dropdown end */}
                </div>
            </nav>
        </React.Fragment>
    )
}
export default Navbar