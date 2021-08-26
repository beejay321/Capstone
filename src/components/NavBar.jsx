import React from "react";
import { Container, Navbar, Nav, Col, Row } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import MyLoginModal from "./Login";
import "../styles/Login.css";

const NavBar = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/">
              <Nav.Link href="#home">Navbar</Nav.Link>
            </Link>
            <Link to="/howitworks">
              <Nav.Link href="#howItWorks"> About Us</Nav.Link>
            </Link>
            <Link to="/dashboard">
              <Nav.Link href="#dashboard">Find Projects</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar> */}

      <div className =" navBar pt-3">
        <Container >
          <Row className="d-flex justify-content-between">
            <Col xs={8} md={3}>
              <div className="d-flex justify-content-between">
                <Link to="/">
                  <p href="#home">Navbar</p>
                </Link>
                <Link to="/howitworks">
                  <p href="#home">About Us</p>
                </Link>
                <Link to="/dashboard">
                  <p href="#home">Find Projects</p>
                </Link>
              </div>
            </Col>
            <Col xs={8} md={2}>
              <div className="d-flex justify-content-between">
                <Link to="/register">
                  <p href="#home">Register Your Skill</p>
                </Link>
        
                <p onClick={() => setModalShow(true)} href="#dashboard">
                  Login
                </p>
                {/* <MyLoginModal className="loginModal" show={modalShow} onHide={() => setModalShow(false)} /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default withRouter(NavBar);
