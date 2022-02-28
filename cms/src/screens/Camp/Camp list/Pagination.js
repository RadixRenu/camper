import React from "react";
 let Pagination=({postPerPage,totalList,paginate})=>{
     const pageNumbers=[];
     for( let i=1; i<= Math.ceil(totalList/postPerPage); i++){
         pageNumbers.push(i)
}
     return(
         <>
         <nav>
             <ul className="pagination">
                 {
                     pageNumbers.map(number=>(
                         <li key={number} className="page-item">
                             <a href="/camp/list" className="page-link" onClick={()=> paginate(number)}>{number}</a>
                         </li>
                     ))
                 }
             </ul>
         </nav>

         </>
     )
 }
export default Pagination;