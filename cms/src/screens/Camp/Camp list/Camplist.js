import React from "react";
import { useState,useEffect } from "react";
import axios from 'axios';
import Pagination from "./Pagination";
import { width } from "@mui/system";


function Camplist (){
  let [list,setList]=useState([])
 let [loading,setLoading]=useState(false)
// let [currentPage,setCurrentPage]=useState(1)
// let [postPerPage,setPostsPerPage]=useState(50)

useEffect(()=>{
 

  const fetchList = async()=>{
    setLoading(true)
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setList(response.data)
    setLoading(false)
  }
  fetchList()

},[]

)
console.log(list)
// let indexOfLastContact= currentPage*postPerPage;
// let indexOfFirstContact= indexOfLastContact-postPerPage;
// const currentPost = list.slice(indexOfFirstContact,indexOfLastContact)

// list=currentPost


// const paginate = (pageNumber) =>setCurrentPage(pageNumber);


    return(
       

            
         <React.Fragment>
        {/* Search Bar */}
     <div className='container col-md-3 mt-5 me-5'>
         <div className='input-group'>
             <input id="search-input" type="search" className='form-control' placeholder='search'/>
             <button id="search-button" type='button' className='btn btn-primary'>
                 <i className='fa fa-search'></i>
             </button>
        </div>
      </div>
      
      {/* Camp List Table  */}
            <div className="container mt-5  " style={{ "overflow": "scroll", "height":"100vh" ,"width":"auto"}} >
            <table class="table table-bordered  table-striped  ">
  <thead class="thead bg-primary text-white text-center tableFixHead" style={{'position': "sticky", 'top': '0', "height":"20px" ,"pt":"0"}}>
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
  { loading?"loading":<React.Fragment>
  <tbody>
  
  {
       list.length> 0 &&
      list.map(contact=>{
        return(<>
          <tr>
      <th scope="row" key={contact.id}>{contact.id}</th>
      <td></td>
      <td></td>
      <td>@mdo</td>
      <td>09/03/2021</td>
      <td>23/03/2021</td>
      <td><button className="btn btn-group-lg btn-success">Active</button></td>
    </tr>

 
        </>)
      })}
  
      {/* <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td><button className="btn btn-group-lg btn-success">Active</button></td>
    </tr> */}

    </tbody>
  

  </React.Fragment> }
  
  </table>

{/* <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
  
</nav> */}
{/* <Pagination postPerPage={postPerPage} totalList={list.length} paginate={paginate}></Pagination> */}

</div>
        </React.Fragment>
    )

}
export default Camplist;