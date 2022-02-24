import * as React from 'react';
import {useState} from 'react';
import { useForm } from "react-hook-form";
 let Campadd=()=>{

  let [campDetail,setCampDetail]=useState({
    information:{
      campname:"",
      camplocation:"",
      city:"",
      state:"",
      launchdate:"",
      enddate:"",
      campowner:"",
      camplimit:"",


  }})
 
  let updateInput=(e)=>{
    setCampDetail(
        {
            ...campDetail,
            information:{
                ...campDetail.information,
                [e.target.name]:e.target.value
            }
        }
    )

}
let {information}=campDetail;

  return (
     <React.Fragment>

           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>

<form className='container container-fluid'>

  <div className="form-group row mt-3 offset-md-2 ">
    <label for="text" className="col-md-2 col-form-label  " ><h6>Camp Name</h6></label>
    <div className="col-md-5">
      <input id="text" name="text" type="text" className="form-control" required="required"  placeholder='Enter Camp Name' name="campname" value={information.campname} onChange={updateInput}/>
    </div>
  </div>
  <div className="form-group row offset-md-2">
    <label for="text1" className="col-md-2 col-form-label "><h6>Camp Location</h6></label>
    <div className="col-md-5">
      <input id="text1" name="text1" type="text" className="form-control" required="required" placeholder='Enter Camp Location' name="camplocation" value={information.camplocation} onChange={updateInput} />
    </div>
  </div>
  <div className="form-group row offset-md-2">
    <label for="text2" className="col-md-2 col-form-label " ><h6>City</h6></label>
    <div className="col-md-5">
      <input id="text2" name="text2" type="text" className="form-control" required='required' placeholder='Enter City' name="city" value={information.city} onChange={updateInput}/>
    </div>
  </div>
  <div className="form-group row offset-md-2">
    <label for="text3" className="col-md-2 col-form-label " ><h6>State</h6></label>
    <div className="col-md-5">
      <input id="text3" name="text3" type="text" className="form-control" required="required" placeholder='Enter State' name="state" value={information.state} onChange={updateInput}/>
    </div>
  </div>
  <div className="form-group row offset-md-2">
    <label for="date" className="col-md-2 col-form-label "><h6>Launch Date</h6></label>
    <div className="col-md-5">
      <input id="date" name="date" type="date" className="form-control" required="required" name="launchdate" value={information.launchdate} onChange={updateInput}/>
    </div>
  </div>
  <div className="form-group row offset-md-2">
    <label for="text4" className="col-md-2 col-form-label  " ><h6>End Date</h6></label>
    <div className="col-md-5">
      <input id="text4" name="text4" type="date" className="form-control" required="required" name="enddate" value={information.enddate} onChange={updateInput}/>
    </div>
  </div>
  <div className="form-group row offset-md-2">
    <label for="text5" className="col-md-2 col-form-label " name="campowner" value={information.campowner} onChange={updateInput}><h6> Camp Owner</h6></label>
    <div className="col-md-5">
      <input id="text5" name="text5" type="text" className="form-control" required="true" placeholder='Enter Camp owner'/>
    </div>
  </div>
  <div className="form-group row offset-md-2">
    <label for="text6" className="col-md-2 col-form-label "  ><h6>Camp Limit</h6></label>
    <div className="col-md-5">
      <input id="num" name="num" type="number" className="form-control" required="true" placeholder='Enter limit' name="camplimit" value={information.camplimit} onChange={updateInput}/>
    </div>
  </div>
  <div className="form-group row offset-md-2">
    <div className="offset-2 col-8">

      <button name="submit" type="submit" className="btn btn-primary btn-lg o">Submit</button>
     
    </div>
  </div>
</form>
</React.Fragment>
  );}
  export default Campadd;
// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// let Campadd = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//     trigger,
//   } = useForm();
//   const onSubmit = (data) => {
//     console.log(data);
//     reset();
//   };
//   let[user,setuser]=useState(
//     {detail:{
//     campname:"",
//     city:""
//   }})

//   let updateInput=(e)=>{
//         setuser(
//             {
//                 ...user,
//                 detail:{
//                     ...user.detail,
//                     [e.target.name]:e.target.value
//                 }
//             }
//         )}
    
  
//   // console.log(watch());
//   // console.log(errors.name)
//   return (
//     <div className="container pt-5">
//       <div className="row justify-content-sm-center pt-5">
//         <div className="col-sm-6 shadow round pb-3">
//           <h1 className="text-center pt-3 text-secondary">Camp Update Form</h1>
//           <h3>{user.detail.campname}</h3>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="form-group">
//               <label className="col-form-label">Camp Name:</label>
//               <input
//               onChange={updateInput}
//               value={user.detail.campname}
//                 type="text"
//                 name="campname"
//                 className={`form-control ${errors.campname && "invalid"}`}
//                 {...register("campname", { required: "Camp Name is Required" })}
//                 onKeyUp={() => {
//                   trigger("campname");
//                 }}
//               />
//               {errors.name && (
//                 <small className="text-danger">{errors.name.message}</small>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="col-form-label">Camp Location</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.age && "invalid"}`}
//                 {...register("age", {
//                   required: "Camp Location is Required",
                  
                
                
//                 })}
//                 onKeyUp={() => {
//                   trigger("age");
//                 }}
//               />
//               {errors.age && (
//                 <small className="text-danger">{errors.age.message}</small>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="col-form-label">City</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.email && "invalid"}`}
//                 {...register("email", {
//                   required: "City is Required",
                  
//                 })}
//                 onKeyUp={() => {
//                   trigger("email");
//                 }}
//               />
//               {errors.email && (
//                 <small className="text-danger">{errors.email.message}</small>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="col-form-label">State:</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.phone && "invalid"}`}
//                 {...register("phone", {
//                   required: "State is Required",
                  
//                 })}
//                 onKeyUp={() => {
//                   trigger("phone");
//                 }}
//               />
//               {errors.phone && (
//                 <small className="text-danger">{errors.phone.message}</small>
//               )}
//             </div>
//             <div className="form-group">
//               <label className="col-form-label">Launch date</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.phone && "invalid"}`}
//                 {...register("phone", {
//                   required: "State is Required",
                  
//                 })}
//                 onKeyUp={() => {
//                   trigger("phone");
//                 }}
//               />
//               {errors.phone && (
//                 <small className="text-danger">{errors.phone.message}</small>
//               )}
//             </div>
//             <input
//               type="submit"
//               className="btn btn-primary my-3"
//               value="Send message"
//             />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Campadd;