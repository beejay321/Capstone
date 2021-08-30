import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import LoginModal from "./LoginModal";
import "../styles/Login.css";

const NavBar = (props) => {
  const [LoggedIn, setLoggedIn] = useState(false);

  const check = () => {
    console.log(props);
  };

  return (
    <>
      <Navbar>
        {/* <Navbar.Brand href="#home" onClick={check}>
          Navbar with text
        </Navbar.Brand> */}

        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          </Link>
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to="/aboutUs">
            <Nav.Link href="#howItWorks"> About Us</Nav.Link>
          </Link>
          <Link to="/dashboard">
            <Nav.Link href="#dashboard">Find Projects</Nav.Link>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Link to="/register">
              <Nav.Link href="#register">Register Your Skill</Nav.Link>
            </Link>

            {LoggedIn ? (
              <Link to="/myProfile">
                <Navbar.Text>
                  Signed in as: <a href="#login">Mark Otto</a>
                </Navbar.Text>
              </Link>
            ) : (
              // <LoginModal name="Login" props={props} />
              <Link to="/login">
                <Nav.Link href="#login">Login</Nav.Link>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default withRouter(NavBar);
