import React, { useState, useEffect } from "react";
// import React, { Component } from "react";
import { Modal, Button, Form, Col, Row, Card, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./profilepage.css";


const ApiUrl = process.env.REACT_APP_API_URL;

const EditModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [LoggedIn, setLoggedIn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  

  return (
    <>
      <Button className = "editButton" variant="" id="button-addon2" onClick={handleShow}>
        Add 
        {/* {props.title} */}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.formType === "edit" ? "Edit Experience" : "Add Experience"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={props.handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control id="role" type="text" placeholder="Role..." value={props.role} onChange={props.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control id="company" type="text" placeholder="Company Name..." value={props.company} onChange={props.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <Form.Control id="startDate" type="datetime-local" placeholder="Start date..." value={props.startDate} onChange={props.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control id="description" type="text-area" placeholder="description..." value={props.description} onChange={props.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Area</Form.Label>
              <Form.Control id="area" type="text" placeholder="Area..." value={props.area} onChange={props.handleChange} />
            </Form.Group>
            {/* {props.formType === 'edit' && ( */}
            <Form.Group className="mt-3">
              <Form.Control id="picture" type="file" onChange={props.selectImage} />
            </Form.Group>
            {/* )} */}
          </Modal.Body>
          <Modal.Footer>
            <Button as="input" type="submit" value="Submit" variant="outline-primary" onClick={handleClose} />
            {props.formType === "edit" && <Button as="input" type="button" value="Delete" variant="outline-primary" onClick={props.handleDelete} />}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditModal;
