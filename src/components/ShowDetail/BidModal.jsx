import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { loggedInAction } from "../../redux/actions";
import styles from "./ProjectDetail.module.css";

const mapStateToProps = (state) => ({
  isLoggedIn: state.users.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  isLogged: ({ username, password }) => {
    dispatch(loggedInAction({ username, password }));
  },
});

//const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";
const MY_APP_API_URL = "https://clientconnect-b57f56bb1351.herokuapp.com";


const BidModal = (props) => {
  const [user] = useState(localStorage.getItem("id"));
  const [message, setMessage] = useState("");
  const [cost, setCost] = useState("");
  const [duration, setDuration] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const bid = async (event) => {
    // event.preventDefault();
    let userId = localStorage.getItem("id");
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
      const response = await fetch(`${MY_APP_API_URL}/projects/${props.match.params.projectId}/${userId}/bids`, {
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
        window.location.reload();
      } else {
        alert("Please check all fields");
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

 

  return (
    <>
      {localStorage.getItem("id") ? (
        <div className={styles.bidButton} onClick={handleShow}>
          <span>Make an Offer</span>
        </div>
      ) : (
        <div className={styles.bidButton} onClick={() => props.history.push("/register")}>
          <span>Make an Offer</span>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Bid for this Project</Modal.Title>
          <div onClick={handleClose} className={styles.close}>
            <i className="bi bi-x-lg close"></i>
          </div>
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
          <Button className={styles.saveBtn} variant="primary" onClick={bid}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(BidModal);
