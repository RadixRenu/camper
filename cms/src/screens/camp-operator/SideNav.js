import React from "react";
//=========Imported icons from react icons==========//
import { FaUserPlus,FaSearch } from "react-icons/fa";
//================Imported icons end================//


let SideNav=()=>
{
    return(<React.Fragment>
{/* <Navbar bg="primary" expand="lg">
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



 */}




        <div className="card card border-0 " >
            <div className="card-body">        
                <ul className="list-group ">
                    <li className="list-group-item bg-secondary rounded text-white h5 mt-3"><FaUserPlus size={30}/> Add User</li>    
                    <li className="list-group-item bg-secondary rounded text-white h5 mt-3"><FaSearch size={30}/> Search User</li>    
                </ul>            
            </div>
        </div>
    </React.Fragment>)
}
export default SideNav