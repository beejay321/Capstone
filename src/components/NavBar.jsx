import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Button, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import LoginModal from "./LoginModal";
import "../styles/Login.css";
import "../styles/navbar.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { loggedInAction } from "../redux/actions";

const mapDispatchToProps = (dispatch) => ({
  isLogged: (user) => dispatch(loggedInAction(user)),
});

const NavBar = (props) => {
  const users = useSelector((s) => s.users);

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
      <Navbar id="navbox">
        <Container>
          <Link to="/" id="navlogo">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="https://res.cloudinary.com/dvyids286/image/upload/v1633950808/Capstone/sqpxzpmoq4nq0hpcbjpc.jpg
"
                width="45"
                height="50"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
          </Link>

          <Link className="navLink" to="/aboutUs">
            <Nav.Link href="#howItWorks"> About Us</Nav.Link>
          </Link>

          <Link to="/dashboard" className="navLink">
            <Nav.Link href="#dashboard">Find Projects</Nav.Link>
          </Link>

          <Link to="/" className="navLink">
            <Nav.Link href="#dashboard">FAQ</Nav.Link>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link to="/postproject" className="navLink">
              <Nav.Link href="#dashboard">Post a Project</Nav.Link>
            </Link>
            {/* {`${localStorage.getItem("accessToken")}`  ? ( */}
            <NavDropdown title={`${localStorage.getItem("username")}`} id="basic-nav-dropdown">
              <Link to={`/users/${localStorage.getItem("id")}`} className="navLink">
                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              </Link>{" "}
              <NavDropdown.Divider />
              <Link to="/register" className="navLink">
                <NavDropdown.Item href="#action/3.4">Register a Skill</NavDropdown.Item>
              </Link>{" "}
              <Link to="/myProjects" className="navLink">
                <NavDropdown.Item href="#action/3.4">My Projects</NavDropdown.Item>
              </Link>{" "}
              <Link to="/" className="navLink">
                <NavDropdown.Item href="#action/3.4" onClick={logOut}>
                  Log out
                </NavDropdown.Item>
              </Link>{" "}
            </NavDropdown>
            {/* ) : ( */}
            {/* <Link to="/login">
              <Button>
                Login
              </Button>
            </Link> */}
            {/* )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default withRouter(NavBar);
