import React from 'react';
import { IoPersonCircleSharp } from "react-icons/io5";
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Nav } from 'react-bootstrap';

let Navigation =()=>
{
    return(
        <React.Fragment>
          <Navbar bg="primary" expand="lg"> 
  <Container fluid> 
    <Navbar.Brand href="#" >Camp Operator</Navbar.Brand>   
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
        </React.Fragment>
    )
}
export default Navigation