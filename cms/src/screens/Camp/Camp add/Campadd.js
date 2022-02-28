import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';



function CampAdd  ()  {

  let [campDetail, setCampDetail] = useState({
    information: {

      admin_id:1,
      camp_name: "",
      camp_location: "",
      camp_city: "",
      camp_state: "",
      camp_launch_date: "",
      camp_end_date: "",
      camp_owner: "",
      camp_limit: 0,


    }
  })

const updateInput = (e) => {
    setCampDetail(
      {
        ...campDetail,
        information: {
          ...campDetail.information,
          [e.target.name]: e.target.value
        }
      }
    )

  }
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(information)
    let config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
      },
    };
    //let url = 'http://localhost/booking/login.php';
    let url = "http://healthapi.tech-radix.com/api/insertcamp";
    axios
      .post(url, information, config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      }); 
    /*axios.post("http://healthapi.tech-radix.com/api/insertcamp", 
    
    
    setCampDetail(
      {
        ...campDetail,
        information: {
          ...campDetail.information
         
        }
      }
    ))
    .then(response=>{
      console.log(response)

    }).catch(error=>{
      console.log(error)
    })*/
  }



  


  let {information} = campDetail;

  return (
    <React.Fragment>

      {/* <pre>{JSON.stringify(information)}</pre> */}
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className='container  container-fluid offset-md-2'>
        <div className='card col-md-10 shadow rounded-0'>
          <div className='card-body'>

            <form className='container container-fluid' onSubmit={handleSubmit} >
              <h1 className="text-md-center pt-3 text-secondary">Camp Update Form</h1>
              <br></br>
              <div className="form-group row mt-3 offset-md-2 ">
                <label for="text" className="col-md-3 col-form-label  " >
                <h6>Camp Id <span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span></h6></label>
                <div className="col-md-6">
                  <input id="text" name="camp_id"
                    type="number" className="form-control "
                    required="required" 
                    name="admin_id" value={information.admin_id}

                    onChange={updateInput} 
     />
                </div>
              </div>
              <div className="form-group row mt-3 offset-md-2 ">
                <label for="text" className="col-md-3 col-form-label  " >
                <h6>Camp Name<span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span></h6></label>
                <div className="col-md-6">
                  <input id="text" type="text"
                    className="form-control" required="required"
                    placeholder='Enter Camp Name' name="camp_name"
                    value={information.camp_name}
                    onChange={updateInput} />
                </div>
              </div>
              <div className="form-group row offset-md-2">
                <label for="text1" className="col-md-3 col-form-label "
                ><h6>Camp Location <span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span> </h6></label>
                <div className="col-md-6">
                  <input id="text1" 
                    type="text" className="form-control"
                    required="required" placeholder='Enter Camp Location'
                    name="camp_location" value={information.camp_location}
                    onChange={updateInput} />
                </div>
              </div>
              <div className="form-group row offset-md-2">
                <label for="text2" className="col-md-3 col-form-label " >
                <h6>City<span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span>  </h6></label>
                <div className="col-md-6">
                  <input id="text2" type="text"
                    className="form-control" required='required' placeholder='Enter City'
                    name="camp_city" value={information.camp_city}
                    onChange={updateInput} />
                </div>
              </div>
              <div className="form-group row offset-md-2">
                <label for="text3" className="col-md-3 col-form-label " >
                <h6>State <span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span> </h6></label>
                <div className="col-md-6">
                  <input id="text3" name="text3"
                    type="text" className="form-control border-red"
                    required="required" placeholder='Enter State'
                    name="camp_state" value={information.camp_state}
                    onChange={updateInput} />
                </div>
              </div>
              <div className="form-group row offset-md-2">
                <label for="date" className="col-md-3 col-form-label ">
                <h6>Launch Date <span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span></h6></label>
                <div className="col-md-6">
                  <input id="date" type="date"
                    className="form-control" required="required"
                    name="camp_launch_date" value={information.camp_launch_date}
                    onChange={updateInput} />
                </div>
              </div>
              <div className="form-group row offset-md-2">
                <label for="text4" className="col-md-3 col-form-label  " >
                <h6>End Date<span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span></h6></label>
                <div className="col-md-6">
                  <input id="text4"  type="date"
                    className="form-control" required="required"
                    name="camp_end_date" value={information.camp_end_date}
                    onChange={updateInput} />
                </div>
              </div>
              <div className="form-group row offset-md-2">
                <label for="text5" className="col-md-3 col-form-label ">
                <h6> Camp Owner <span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span></h6></label>
                <div className="col-md-6">
                  <input id="text5"  type="text"
                    className="form-control" required="true"
                    placeholder='Enter Camp owner'
                    name="camp_owner"
                    value={information.camp_owner}
                    onChange={updateInput}
                  />
                </div>
              </div>
              <div className="form-group row offset-md-2">
                <label for="text6" className="col-md-3 col-form-label "  >
                <h6>Camp Limit<span className='text-danger font-weight-bold ' style={{fontSize:"20px"}}> *</span></h6></label>
                <div className="col-md-6">
                  <input id="num" type="number"
                    className="form-control" required="true"
                    placeholder='Enter limit' name="camp_limit"
                    value={information.camp_limit} onChange={updateInput} />
                </div>
              </div>
              <div className="form-group row offset-md-2">
                <div className="offset-3 col-8">

                  <button name="submit" type="submit" className="btn btn-primary btn-lg o">Submit</button>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      
    </React.Fragment>
  );
}
export default CampAdd;
