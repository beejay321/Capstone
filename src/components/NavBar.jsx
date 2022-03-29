import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../styles/Login.css";
import "../styles/navbar.css";
// import { connect, useDispatch, useSelector } from "react-redux";
// import { loggedInAction } from "../redux/actions";

// const mapDispatchToProps = (dispatch) => ({
//   isLogged: (user) => dispatch(loggedInAction(user)),
// });

const NavBar = (props) => {
  const [userName, setUserName] = useState("");

  // const users = useSelector((s) => s.users);
  useEffect(() => {
    const setUser = async () => {
      let user = "";
      if (localStorage.getItem("username") === null) {
        user = "Guest";
      } else {
        user = localStorage.getItem("username");
      }
      setUserName(user);
    };
    setUser();
  }, []);

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
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://res.cloudinary.com/dvyids286/image/upload/v1633950808/Capstone/sqpxzpmoq4nq0hpcbjpc.jpg
"
              width="45"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>{" "}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Find Projects</Nav.Link>
              <Nav.Link href="/aboutUs"> About Us</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>

            <Nav className="justify-content-end">
              <Nav.Link href="/postproject">Post a Project</Nav.Link>
              <NavDropdown title={`${userName}`} id="basic-nav-dropdown">
                <NavDropdown.Item href={`/users/${localStorage.getItem("id")}`}>My Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/register">Register a Skill</NavDropdown.Item>
                <NavDropdown.Item href="/myProjects">My Projects</NavDropdown.Item>
                <NavDropdown.Item href="/" onClick={logOut}>
                  Log out
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default withRouter(NavBar);
