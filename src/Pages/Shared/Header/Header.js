import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


import "./Header.css";
const Header = () => {
  const { user, logOut, isAdmin } = useAuth();
  const { displayName } = user;

  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  return (

<div>
<Navbar bg="light" expand="lg" className={(isSticky) ? "navbar  navbar-expand-lg navbar-dark bg-dark fixed-top" : "navbar  navbar-expand-lg navbar-light color text-dark"}>
    <Container>
        <Nav.Link as={NavLink} to="/"><Navbar.Brand href="#home"> Black Dragon HALL </Navbar.Brand></Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
                <Nav.Link as={NavLink} to="/">HOME</Nav.Link>


                <Nav.Link as={NavLink} to="/about">ABOUT</Nav.Link>
                <Nav.Link as={NavLink} to="/allpackages">PACKAGES</Nav.Link>

                <Nav.Link as={NavLink} to="/galary">GALARY</Nav.Link>

                <Nav.Link as={NavLink} to="/bookCenter">BOOK CENTER</Nav.Link>
                <Nav.Link as={NavLink} to="/contact">CONTACT</Nav.Link>
                <Nav.Link as={NavLink} to="/customerDashboard">DASHBOARD</Nav.Link>
                <Nav.Link as={NavLink} to="/admin">ADMIN DASHBOARD</Nav.Link>



                {/* {
                    isAdmin ?

                        <>
                          
                            <Nav.Link as={NavLink} to="/admin"> DASHBOARD</Nav.Link>
                        </> :

                        <Nav.Link as={NavLink} to="/customerDashboard"> DASHBOARD</Nav.Link>
                } */}


                {!displayName ? (<>

                    <Nav.Link as={NavLink} to="/login">LOGIN</Nav.Link></>) : (
                    <>
                        {isAdmin ?
                            <Nav.Link className='text-danger' ><h4>{displayName} <i className="fas fa-users-cog"></i></h4></Nav.Link>
                            :
                            <Nav.Link className='text-danger' ><h4>{displayName}</h4></Nav.Link>
                        }


                        <button className='btn-danger p-2 text-light   rounded-pill btn-block' onClick={logOut}> LOGOUT</button></>
                )}

            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
</div >










  );
};

export default Header;
