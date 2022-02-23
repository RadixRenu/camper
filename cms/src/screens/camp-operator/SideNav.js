import React from "react";
import { FaUserPlus,FaSearch } from "react-icons/fa";


let SideNav=()=>
{
    return(<React.Fragment>
        <div className=" mh-100">
            <ul className="list-group ">
                <li className="list-group-item h5 pr-3"><FaUserPlus size={30}/> Add User</li>    
                <li className="list-group-item h5 pr-3"><FaSearch size={30}/> Search User</li>    
            </ul>            
        </div>
    </React.Fragment>)
}
export default SideNav