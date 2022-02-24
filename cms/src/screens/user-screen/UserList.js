import React  from 'react'; 

let UserList = () => {
    return(
 <React.Fragment>
     {/* Search Bar */}
     <div className='container col-4 mt-5'>
         <div className='input-group'>
             <input id="search-input" type="search" className='form-control' placeholder='search'/>
             <button id="search-button" type='button' className='btn btn-primary'>
                 <i className='fa fa-search'></i>
             </button>
        </div>
      </div>

      {/* form table  */}

      <div className="container pt-5 offset-1 ">
  <div className="row">
    <div className="col-12">
      <table className="table table-bordered table-hover">
        <thead className='bg-info'>
          <tr className='text-center'>
            <th scope="col">S.No</th>
            <th scope="col" >USER ID</th>
            <th scope="col">USERNAME</th>
            <th scope="col" >PHOTO ID TYPE</th>
            <th scope="col" >PHOTO ID NUMBER</th>
            <th scope="col">MOBILE NO.</th>
          </tr>
        </thead>
           
        <tbody className='text-center'>
          <tr>
            <th scope="row">1</th>
            <td>0012</td>
            <td>Cristina</td>
            <td>Aadhar Card</td>
            <td>8458 9785 5584</td>
            <td>7859865895</td>
          </tr>
        

          <tr>
            <th scope="row">2</th>
            <td>0012</td>
            <td>Cristina</td>
            <td>Aadhar Card</td>
            <td>84589785558</td>
            <td>7859865895</td>
          </tr>
           
          
          
          <tr>
            <th scope="row">3</th>
            <td>0012</td>
            <td>Cristina</td>
            <td>Aadhar Card</td>
            <td>84589785558</td>
            <td>7859865895</td>
          </tr>
         

          <tr>
            <th scope="row">4</th>
            <td>0012</td>
            <td>Cristina</td>
            <td>Aadhar Card</td>
            <td>84589785558</td>
            <td>7859865895</td>
          </tr>
           

          <tr>
            <th scope="row">5</th>
            <td>0012</td>
            <td>Cristina</td>
            <td>Aadhar Card</td>
            <td>84589785558</td>
            <td>7859865895</td>
          </tr>
           

          <tr>
            <th scope="row">6</th>
            <td>0012</td>
            <td>Cristina</td>
            <td>Aadhar Card</td>
            <td>84589785558</td>
            <td>7859865895</td>
          </tr>
           

          <tr>
            <th scope="row">7</th>
            <td>0012</td>
            <td>Cristina</td>
            <td>Pan Card</td>
            <td>845EU6780TY</td>
            <td>7859865895</td>
          </tr>
           
        </tbody>
      </table>
    </div>
  </div>
</div>

 </React.Fragment>
    )
}

export default UserList

