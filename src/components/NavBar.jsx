import React, { useState } from "react";
import { Container, Navbar, Nav, Button, NavDropdown, Image } from "react-bootstrap";
import { Link, withRouter, NavLink } from "react-router-dom";
import "../styles/Login.css";
import "../styles/navbar.css";
// import { connect, useDispatch, useSelector } from "react-redux";
// import { loggedInAction } from "../redux/actions";

// const mapDispatchToProps = (dispatch) => ({
//   isLogged: (user) => dispatch(loggedInAction(user)),
// });

const NavBar = (props) => {
  const logOut = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    console.log("logged out");
    console.log(localStorage.getItem("accessToken"));
  };

  return (
    <>
      <Navbar expand="lg" id="navbox">
        <Container className="p-0">
          <Navbar.Brand className="" href="/">
            <img alt="" src="https://res.cloudinary.com/dvyids286/image/upload/v1659043493/CapstoneProjects/wvc3mfop7l7qyjtckwqy.png" height="50" className="d-inline-block align-top" />{" "}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navLink">
              <NavLink to="/projects">Browse Projects</NavLink>
              <NavLink to="/aboutUs"> About Us</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
            </Nav>

            <Nav className="justify-content-end navLink">
              <NavLink to="/postproject" className="">
                Post a Project
              </NavLink>
            </Nav>
            <Nav className="">
              {localStorage.getItem("id") ? (
                <NavDropdown
                  end
                  title={<Image src="https://gravatar.com/avatar/127ecc1066b3208f58459e4a488bd764?s=30&d=mp&r=x" height="35" width="35" className="" alt="..." roundedCircle />}
                  align="right"
                >
                  <NavDropdown.Item href={`/users/${localStorage.getItem("id")}`}>My Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/me/messages">My Messages</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" onClick={logOut}>
                    Log out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link to="/register">
                  <Button className="loginBtn"> Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default withRouter(NavBar);
