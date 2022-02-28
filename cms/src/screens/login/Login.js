import axios from "axios";
import React, { useState } from "react";
function Login()
{
    
    let [user,setUser]=useState({
        username:"",
        password:"",
    })
    // Method to update form values
    let update=(e)=>
    {
        setUser({
             ...user,
        [e.target.name]: [e.target.value],
        })
       
    }

    let login=(e)=>
    {
        e.preventDefault();

        setUser({
            ...user,
       [e.target.name]: [e.target.value],
       })
       
       let config={
            headers:{
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json",
            }
       }
        
        let URL = "http://healthapi.tech-radix.com/api/login";
        axios.post(URL , user , config)
        .then(function(response){
            console.log(user);
            console.log(response.data);
        })
        .catch(function(error){
            console.log(error);

        })
        
    }
    //Method to check is values are captured
    let show =(e)=>
    {
        e.preventDefault();
        console.log(user);
    }
    return(
        // <React.Fragment>    Remove it 
            <section className="vh-100">
                <div className="container-fluid h-custom ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            {/* Image */}
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid" alt="Sample image" />
                        </div>
                        
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 shadow-lg rounded-3 p-4 " >
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <h2 className=" fw-normal display-5  ">Login</h2>
                        </div>
                        <div className="divider d-flex align-items-center my-4">
                        </div>
                            {/* Form start */}
                            <form onSubmit={login}>
                                {/* Emmail field */}
                                <div className="form-outline mb-4 mt-3">
                                    <label className="form-label" >Email address</label>
                                    <input onChange={update} type="text" id="username" name="username" required className="form-control form-control-lg " placeholder="Enter a valid email address" />
                                </div>
                                {/* Password field */}
                                <div className="form-outline mb-3">
                                    <label className="form-label" >Password</label>
                                    <input onChange={update} type="password" id="password" name="password" required className="form-control form-control-lg" placeholder="Enter password" />
                                </div>
                                {/* Remember me checkbox */}
                                <div className="d-flex justify-content-between align-items-center">
                                    
                                    { /* Forgot password link */}
                                    <a href="#!" className="text-body">Forgot passwordword?</a>
                                </div>
                                <div className="text-center text-lg-start mt-4 mb-3 pt-2">
                                    <button  className="btn btn-primary btn-lg" style={{paddingLeft: '2.5rem', paddingRight: '2.5rem'}}>Login</button>
                                    
                                </div>
                            </form>
                            {/* From end */}
                        </div>
                    </div>
                </div>
                
            </section>


        // </React.Fragment>
    );


}
export default Login