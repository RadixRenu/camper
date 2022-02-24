import React from "react";

let Camplist=()=>{
    return(
        <React.Fragment>
            <div className="container mt-3 " style={{"overflow-x": "auto"}}>
            <table class="table table-bordered text-center table-striped">
  <thead class="thead bg-primary text-white text-center">
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Camp Name</th>
      <th scope="col">Camp Location</th>
      <th scope="col">Camp Owner</th>
      <th scope="col">Launch Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Action</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Blood Donation</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>09/03/2021</td>
      <td>23/03/2021</td>
      <td><button className="btn btn-group-lg btn-success">Active</button></td>
    </tr>

    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><button className="btn btn-group-lg btn-success">Active</button></td>
    </tr>
    
  </tbody>
</table>


</div>
        </React.Fragment>
    )

}
export default Camplist;