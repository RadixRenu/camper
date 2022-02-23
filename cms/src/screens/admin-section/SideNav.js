import React from "react";
//Imported all the icons form React Icons
import { FaUserPlus,FaSearch,FaHandHoldingMedical ,FaFileMedicalAlt } from "react-icons/fa";
import { GiBarracksTent } from "react-icons/gi";
import { VscTypeHierarchy } from "react-icons/vsc";
import { ImUsers } from "react-icons/im";
import { MdPermContactCalendar } from "react-icons/md";


let SideNav=()=>
{
    return(<React.Fragment>
         <div className=" mh-100">
            <ul className="list-group ">
                <li className="list-group-item h5 "><GiBarracksTent size={30}/> Camps</li>    
                <li className="list-group-item h5 "><VscTypeHierarchy size={30}/>Process</li>    
                <li className="list-group-item h5 "><ImUsers size={30}/>Users</li>    
                <li className="list-group-item h5 "><FaHandHoldingMedical size={30}/>Doctors</li>    
                <li className="list-group-item h5 "><FaFileMedicalAlt size={30}/>Lab Reports</li>    
                <li className="list-group-item h5 "><MdPermContactCalendar size={30}/>Contact</li>    
            </ul>            
        </div>
    </React.Fragment>)
}
export default SideNav