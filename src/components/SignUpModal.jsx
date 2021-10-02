import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import { Modal, Button, Form, Col, Row, Card, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import LoginModal from "./LoginModal";

// class LoginModal extends Component {
//   state = {
//     show: false,
//   };

//   onClickButton = (e) => {
//     e.preventDefault();
//     this.setState({ openModal: true });
//   };
//   onCloseModal = () => {
//     this.setState({ openModal: false });
//   };

//   render() {

const ApiUrl = process.env.REACT_APP_API_URL;

const SignUpModal = ({ routerProps, name, closeLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const login = async (event) => {
    const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // }

    try {
      const details = {
        email: username,
        password: password,
      };
      const res = await fetch(`http://localhost:3255/users/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(details),
      });

      if (res.ok) {
        setValidated(true);
        const json = await res.json();
        localStorage.setItem("accessToken", json.accessToken);
        localStorage.setItem("refreshToken", json.refreshToken);
        localStorage.setItem("username", json.username);
        setLoggedIn(true);
        setShow(false);
        routerProps.history.push("/dashboard");
        alert("successfully logged in");
      } else {
        alert("Credentials are incorrect");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return (
    <>
      <Button variant="success" id="button-addon2" size="lg" onClick={handleShow}>
        {name}
      </Button>
      <Modal id="signupModal" show={show} onHide={handleClose}>
        <Modal.Body>
          <div className=" mt-3 d-flex justify-content-md-center">
            <Image src="https://via.placeholder.com/100" height="100" roundedCircle />
          </div>
          <div className=" mt-3 d-flex justify-content-md-center">
            <h3>Login</h3>{" "}
          </div>

          <Form className="py-4 px-4 login-container">
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Email address</Form.Label>

              <Form.Control required value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Email Address" />
              <Form.Control.Feedback type="invalid">Please enter your email address</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="password">
              <Form.Label>Password</Form.Label>

              <Form.Control required value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
              <Form.Control.Feedback type="invalid">Please enter your password.</Form.Control.Feedback>
            </Form.Group>
            <div className="d-grid gap-2 mb-4">
              <Link to="/updateProfile">
                <Button className="d-grid gap-2 " variant="primary" size="lg" onClick={login} disabled={username.length < 0 && password.length < 0 ? true : false} type="button">
                  Login{" "}
                </Button>
              </Link>
            </div>
            <Row className="d-grid justify-content-md-center mb-2">
              <p>By joining I agree to receive emails from my site</p>
            </Row>
            <Row className="d-grid justify-content-md-center mb-2">
              {/* <Link > */}
              <p>Forgot your password?</p>
              {/* </Link> */}
            </Row>
            {/* <div className="d-grid gap-2 justify-content-md-center mb-3"> */}

            <Row className="d-grid gap-2 justify-content-md-center mb-2">
              <p>
                I already have an account? Login
                <span className="m-1">
                  <LoginModal name="here" />
                </span>
              </p>
            </Row>
            {/* </div> */}
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SignUpModal;
