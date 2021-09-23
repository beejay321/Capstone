import React, { useState } from "react";
import { Form, Container, Row, Col, Button, Card, Image, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

import { loggedInAction } from "../redux/actions";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  isLogged: ({ username, password }) => {
    dispatch(loggedInAction({ username, password }));
  },
});

const BidModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
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
        alert("successfully logged in");
        // console.log(routerProps);
        // routerProps.history.push("/dashboard");
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
      <Button variant="outline-success" onClick={handleShow}>
        Bid On this Job{" "}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Bid for this Project</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="py-4 px-4 ">
            <Form.Group className="mb-3" controlId="message">
              <Form.Label>Message</Form.Label>

              <Form.Control required value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="What are you offering?" />
              <Form.Control.Feedback type="invalid">Please enter a message</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="cost">
              <Form.Label>How much are you willing to bid?</Form.Label>

              <Form.Control required value={cost} onChange={(e) => setCost(e.target.value)} type="text" placeholder="0.00" />
              <Form.Control.Feedback type="invalid">Please enter your cost.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-4" controlId="duration">
              <Form.Label>How long will it take you to deliver?</Form.Label>

              <Form.Control required value={cost} onChange={(e) => setCost(e.target.value)} type="text" placeholder="1 day" />
              <Form.Control.Feedback type="invalid">Please enter your duration.</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(BidModal);
