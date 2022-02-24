import React from "react";
//=========Imported icons from react icons==========//
import { FaUserPlus,FaSearch } from "react-icons/fa";
//================Imported icons end================//


let SideNav=()=>
{
    return(<React.Fragment>
        <div className="card card border-0 " >
            <div className="card-body">        
                <ul className="list-group ">
                    <li className="list-group-item bg-secondary rounded text-white h5 mt-3"><FaUserPlus size={30}/> Add User</li>    
                    <li className="list-group-item bg-secondary rounded text-white h5 mt-3"><FaSearch size={30}/> Search User</li>    
                </ul>            
            </div>
        </div>
    </React.Fragment>)
}
export default SideNav