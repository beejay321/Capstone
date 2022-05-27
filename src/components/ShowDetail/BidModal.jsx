import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";

import { loggedInAction } from "../../redux/actions";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  isLogged: ({ username, password }) => {
    dispatch(loggedInAction({ username, password }));
  },
});

const MY_APP_API_URL = "http://localhost:3255";

// const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const BidModal = (props) => {
  const [user] = useState(localStorage.getItem("id"));
  const [message, setMessage] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bid = async (event) => {
    // const form = event.currentTarget;
    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    console.log(props.match.params);
    // }

    try {
      const bidetails = {
        user: user,
        client: props.project.seller,
        projectTitle: props.project.title,
        message: message,
        cost: cost,
        duration: duration,
      };
      const response = await fetch(`${MY_APP_API_URL}/projects/${props.match.params.projectId}/bids`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(bidetails),
      });

      if (response.ok) {
        console.log(response);
        alert("bid successful");
        setShow(false);
      } else {
        alert("bid unsuccessful");
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

              <Form.Control required value={duration} onChange={(e) => setDuration(e.target.value)} type="text" placeholder="1 day" />
              <Form.Control.Feedback type="invalid">Please enter your duration.</Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={bid}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(BidModal);
