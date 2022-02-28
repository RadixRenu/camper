import React, { useState } from "react";
import Captcha from "./Captcha";
import axios from "axios";


function Registration () {
  let [Registerdetail, setRegisterdetail] = useState({
    name: "",
    mobile: "",
    whatsup_mobile: "",
    id_proofe_type: "",
    id_proof_no: "",
  });

  let update = (e) => {
    // setRegisterdetail({
    //   ...Registerdetail,
    //   [e.target.name]: e.target.value,
    // });
  };

  let show = (e) => {
    e.preventDefault();
      setRegisterdetail({
      ...Registerdetail,
      [e.target.name]: e.target.value,
    });
    console.log(Registerdetail);
    if (e.target[5].value != e.target[6].value) {
      alert("Captcha is Wrong");
    } else {
      e.preventDefault();
      let user = {};
      user["name"] = e.target[0].value; 
      user["mobile"] = e.target[1].value; 
      user["whatsup_mobile"] = e.target[2].value; 
      user["id_proofe_type"] = e.target[3].value; 
      user["id_proof_no"] = e.target[4].value; 
  
      console.log(user);
      let config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json",
        },
      };
     
      let url = "http://healthapi.tech-radix.com/api/insertuserself";
      axios
        .post(url, user, config)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
   
  };


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-info fw-bold">
        <h3 className="text-white navbar-text" href="#">
          Health Camp Registration
        </h3>
      </nav>
      {/* Registration Form */}
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="container container-fluid offset-md-2 mt-5">
        <div className="card col-md-10 shadow rounded-0">
          <div className="card-body">
            <h1 className="text-center text-secondary">Registration Form</h1>
            <form className="container container-fluid mt-5 " onSubmit={show}>
              <div className="form-group row mt-3 offset-md-2 ">
                <label className="col-md-3 col-form-label  ">
                  <h6> Name<span style={{color:"red"}}>*</span></h6>
                </label>
                <div className="col-md-6">
                  <input
                    id="text"
                    name="name"
                    type="text"
                    className="form-control"
                    required="required"
                    placeholder="Enter Name"
                    onChange={update}
                  />
                </div>
              </div>

              <div className="form-group row offset-md-2">
                <label className="col-md-3 col-form-label ">
                  <h6>Mobile Number<span style={{color:"red"}}>*</span></h6>
                </label>
                <div className="col-md-6">
                  <input
                    id="text1"
                    maxLength="10"
                    name="mobile"
                    type="tel"
                    className="form-control"
                    required="required"
                    placeholder="Mobile number"
                    onChange={update}
                  />
                </div>
              </div>

              <div className="form-group row offset-md-2">
                <label className="col-md-3 col-form-label ">
                  <h6>whatsapp Number</h6>
                </label>
                <div className="col-md-6">
                  <input
                    id="text2"
                    name="whatsup_mobile"
                    maxLength="10"
                    type="tel"
                    className="form-control"
                    // required="required"
                    placeholder="Enter number (optional)"
                    onChange={update}
                  />
                </div>
              </div>

              <div className="form-group row offset-md-2">
                <label className="col-md-3 col-form-label">
                  <h6>ID Type</h6>
                </label>
                <div className="col-md-6">
                  <select
                    id="select"
                    name="id_proofe_type"
                    type="select"
                    className="custom-select"
                    // required="required"
                    onChange={update}
                  >
                    <option value="">Select type (optional)</option>
                    <option value="Aadhar">Aadhar</option>
                    <option value="Pan Card">Pan Card</option>
                    <option value="Voter ID">Voter ID</option>
                    <option value="Driving License">Driving License</option>
                  </select>
                </div>
              </div>

              <div className="form-group row offset-md-2">
                <label className="col-md-3 col-form-label">
                  <h6>ID Number</h6>
                </label>
                <div className="col-md-6">
                  <input
                    id="text3"
                    name="id_proof_no"
                    placeholder="ID Number (optional)"
                    type="text"
                    className="form-control"
                    // required="required"
                    onChange={update}
                  />
                </div>
              </div>

              {/* Captcha Code */}
               <div className="form-group row offset-md-2">
                <label className="col-md-3 col-form-label">
                 {/* To fill captcha  */}
                </label>
                <div className="col-md-6">
                  <Captcha />
                </div>
              </div>  

           
              <div className="form-group row offset-md-2">
                <div className="offset-3 col-8">
                  <button
                    name="submit"
                    type="submit"
                    className="btn btn-success "
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
