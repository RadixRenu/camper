import React from 'react';
import { GiBarracksTent } from "react-icons/gi";
import { IoPersonCircleSharp } from "react-icons/io5";
let Navbar =()=>
{
    return(
        <React.Fragment>
           <div className=''>
                <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div class="container-fluid">
                         <h2 class=" .h2 navbar-brand "> <GiBarracksTent size={40} className="mr-4"/> Admin Dash</h2>
                     </div>
                     <div className='row me-3'>
                         <div className='col-6'>
                         <p className='text-bold text-center text-white'>Welcome Admin</p>
                         </div>
                         <div className='col-6'>
                             <div className='dropdown'>
                                 <button className='btn' type='btn'>
                                 <IoPersonCircleSharp className=" dropdown-toggle" type='button' color='white' size={40}/>
                                 </button>
                                 <ul class="dropdown-menu" >
                                 <li><a class="dropdown-item" href="#">Action</a></li>
                                 <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </nav>
            </div>
        </React.Fragment>
    )
}
export default Navbar