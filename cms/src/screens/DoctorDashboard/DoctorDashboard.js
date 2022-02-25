import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Table } from "react-bootstrap";

function DoctorDashboard() {
  return(
    <React.Fragment>
                      <div className="row">
                                <div className="col">
                                            <Navbar bg="primary" expand="lg">
                                                    <Container>
                                                    <Navbar.Brand href="#home" className="text-white" ><i class="fa fa-home"></i> Lab Dashboard</Navbar.Brand>
                                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                                    <Navbar.Collapse id="basic-navbar-nav" class="float-right">
                                                        <Nav className="me-auto float-right ">
                                                        <NavDropdown title="Menu" id="basic-nav-dropdown" >
                                                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                            <NavDropdown.Divider />
                                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                                        </NavDropdown>
                                                        </Nav>
                                                    </Navbar.Collapse>
                                                    </Container>
                                                </Navbar>
                                                </div>
                                           </div>  
                {/* <div className="container-fluid ">   */}
                        <div className="row ">
                            <div className="col-md-2" >
                            <div class="h-100">
                                <div className="row h-100 ">
                                    <aside className="col-12 p-0 bg-warning ">
                                        <nav className="navbar navbar-expand navbar-dark  flex-md-column flex-row align-items-start">
                                            <div className="collapse navbar-collapse">
                                                <ul className="flex-md-column flex-row navbar-nav w-100  justify-content-between">
                                                    <li className="nav-item ms-4 me-4">
                                                    <Button variant="warning text-white"><i class="fa fa-home"></i> Lab Samples</Button>
                                                    </li>
                                                    <li className="nav-item ms-4 me-4">
                                                    <Button variant="warning text-white"><i class="fa fa-home"></i> Lab Samples</Button>
                                                    </li>
                                                    
                                                 </ul>
                                                </div>
                                            </nav>
                                        </aside>
                                   <main class="col">    
                                </main>
                            </div>
                        </div>
                     </div>

                    <div className="col-md-10">
                        <div className="row ">
                           <div className='container col-md-4 mt-3 mb-3'>
                              <div className='input-group'>
                                  <input id="search-input" type="search" className='form-control' placeholder='search'/>
                                  <button id="search-button" type='button' className='btn btn-primary'>
                                      <i className='fa fa-search'></i>
                                  </button>
                              </div>
                            </div>
                                </div>
             
                                <div className="row">
                                        <div className="col">
                                        <Table striped bordered hover >
                                            <thead>
                                              <tr>
                                                <th>Pre Prescriptions</th>
                                                <th>Lab Reports</th>
                                                <th>final Prescriptions</th>
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
                          {/* </div>   */}
               </React.Fragment>
 )};

export default DoctorDashboard;
