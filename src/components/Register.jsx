import React, { useState } from "react";
import { Card, Container, Row, Button, Form, Col, Image, FormControl } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import DetailPage from "./detailPage";
import MyLoginModal from "./Login";
import LoginModal from "./LoginModal";
import "../styles/Register.css";

const Register = (routerProps) => {
  const [modalShow, setModalShow] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <div id="registerSection">
        <Container>
          <Row className="py-5 my-5 ">
            <div className="registerSection">
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <div className=" py-2  registerSection">
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed </h3>
            </div>
            <div className=" py-2 registerSection">
              {/* <MyLoginModal show={modalShow} onHide={() => setModalShow(false)} /> */}
              {/* <LoginModal name="Register your skill" props= {routerProps} /> */}

              {LoggedIn ? (
                <Link to="/myProfile">
                  <Button variant="success" id="button-addon2">
                    Register your skill
                  </Button>
                </Link>
              ) : (
                <Link to="/login">
                  <Button variant="success" id="button-addon2">
                    Register your skill
                  </Button>
                </Link>
              )}
            </div>
          </Row>
        </Container>
      </div>
      <div id="">
        <Container>
          <Row className=" py-5 ">
            <div className="howItWorksSection">
              <h1>How It Works</h1>
            </div>
            <div className="howItWorksSection">
              <h3>Its very simple, start earning in few steps. </h3>
            </div>

            <div className="howItWorksBox py-4">
              <div className="howItWorksCard py-2">
                <Image src="https://via.placeholder.com/200" />
                <p>Step 1</p>
              </div>
              <div className="howItWorksCard py-2">
                <Image src="https://via.placeholder.com/200" />
                <p>Step 2</p>
              </div>
              <div className="howItWorksCard py-2">
                <Image src="https://via.placeholder.com/200" />
                <p>Step 3</p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Register;
