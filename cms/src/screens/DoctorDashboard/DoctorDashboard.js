import React from "react";
import { Button, Form, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import "./DoctorDashboard.css"
import { IoPersonCircleSharp } from "react-icons/io5";
import Dropdown from 'react-bootstrap/Dropdown';

function TestDashboard() {
  return(
    <React.Fragment>
                      <div className="row">
                                <div className="col nav_css">
                                <Navbar bg="primary" expand="lg"> 
                                    <Container fluid> 
                                    <Navbar.Brand href="#home" className="text-white" ><i className="fa fa-home"></i> Doctor Dashboard</Navbar.Brand>  
                                        <Form >  
                                          <Dropdown >
                                            <Dropdown.Toggle  variant="light"  id="dropdown-basic" size="sm">
                                            <IoPersonCircleSharp color='black' size={40}/> Welcome User 
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                              <Dropdown.Item href="#/action-1">View Profile</Dropdown.Item> 
                                              <Dropdown.Item href="#/action-2">Log out</Dropdown.Item>       
                                            </Dropdown.Menu>
                                          </Dropdown>      
                                          </Form>  
                                          </Container>
                                          </Navbar>
                                       </div>
                                     </div> 
                        <div className="row">
                            <div className="col-md-3" >
                            <div className="sidebar_css">
                                <div className="row  ">
                                    <aside className="col-12 p-0 bg-warning sidebar_css1">
                                        <nav className="navbar navbar-expand navbar-dark  flex-md-column flex-row align-items-start">
                                            <div className="collapse navbar-collapse">
                                                <ul className="flex-md-column flex-row navbar-nav w-100 justify-content-between">
                                                    <li>
                                                    <div className='container searchbar_css'>
                                                            <div className='input-group searchbar1_css'>
                                                                <input id="search-input" type="search" className='form-control' placeholder='search'/>
                                                                <button id="search-button" type='button' className='btn btn-success'>
                                                                    <i className='fa fa-search'></i>
                                                                </button>
                                                            </div>
                                                          </div>
                                                    </li>
                                                    <li className="nav-item ms-4 me-4">
                                                    <Button variant="warning text-white"><i className="fa fa-home"></i>Samples</Button>
                                                    </li>
                                                    <li className="nav-item ms-4 me-4">
                                                    <Button variant="warning text-white"><i className="fa fa-home"></i>Reports</Button>
                                                    </li>
                                                 </ul>
                                                </div>
                                            </nav>
                                        </aside>
                                   <main className="col">    
                                </main>
                            </div>
                        </div>
                     </div>
                    
                    <div className="col-md-8">
                                <div className="row mt-3">
                                        <div className="col">
                                        <Table striped bordered hover className="table_css"  >
                                            <thead>
                                              <tr>
                                                <th>ID</th>
                                                <th>NAME</th>
                                                <th className="d-flex justify-content-center" >Action</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                                    <tr>          
                                                             <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</td>
                                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</td>
                                                            <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</td>
                                                            </tr>
                                                   </tbody>
                                          </Table>
                                         </div>
                                     </div>
                                 </div>
                            </div> 
               </React.Fragment>
 )};
export default TestDashboard;
