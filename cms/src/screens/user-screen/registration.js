import React, { useState } from "react";

let Registration = () => {
  let [Registerdetail, setRegisterdetail] = useState({
    name: "",
    mobile: "",
    whatsapp: "",
    selectid: "",
    idnumber: "",
  });

  let update = (e) => {
    setRegisterdetail({
      ...Registerdetail,
      [e.target.name]: e.target.value,
    });
  };

  let show = (e) => {
    e.preventDefault();
    console.log(Registerdetail);
  };

  return (
    <React.Fragment>
      <pre>{JSON.stringify(Registerdetail)}</pre>

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <form className="container container-fluid  mt-5 " onSubmit={show}>
        <div className="form-group row mt-3 offset-md-2 ">
          <label className="col-md-2 col-form-label  ">
            <h6> Name</h6>
          </label>
          <div className="col-md-5">
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
          <label className="col-md-2 col-form-label ">
            <h6>Mobile Number</h6>
          </label>
          <div className="col-md-5">
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
          <label className="col-md-2 col-form-label ">
            <h6>Whatsapp Number</h6>
          </label>
          <div className="col-md-5">
            <input
              id="text2"
              name="whatsapp"
              maxLength="10"
              type="tel"
              className="form-control"
              required="required"
              placeholder="Enter number (optional)"
              onChange={update}
            />
          </div>
        </div>

        <div className="form-group row offset-md-2">
          <label className="col-md-2 col-form-label">
            <h6>ID Type</h6>
          </label>
          <div className="col-md-5">
            <select
              id="select"
              name="selectid"
              type="select"
              className="custom-select"
              required="required"
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
          <label className="col-md-2 col-form-label">
            <h6>ID Number</h6>
          </label>
          <div className="col-md-5">
            <input
              id="text3"
              name="idnumber"
              placeholder="ID Number"
              type="text"
              className="form-control"
              required="required"
              onChange={update}
            />
          </div>
        </div>

        <div className="form-group row offset-md-2">
          <div className="offset-2 col-8">
            <button name="submit" type="submit" className="btn btn-primary ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Registration;
