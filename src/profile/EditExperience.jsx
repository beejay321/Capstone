import React, { useState } from "react";
// import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./profilepage.css";



const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";
const EditExperience = (props) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [show, setShow] = useState(false);
  // const [LoggedIn, setLoggedIn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addExperience = async () => {
    try {
      const experience = {
        role: role,
        company: company,
        description: description,
        city: city,
        country: country,
        startDate: startDate,
      };
      console.log(experience);
      console.log(props.user._id);
      const response = await fetch(`${MY_APP_API_URL}/users/${props.user._id}/experience`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(experience),
      });

      if (response.ok) {
        console.log(response);
        alert("experience added successfully");
        handleClose();
      } else {
        alert("update not successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {props.title === "Edit" ? (
        <i className="bi bi-pencil" onClick={handleShow} style={{ fontSize: "1.25rem", color: "#2b6777", marginTop: "5px" }}></i>
      ) : (
        <i class="bi bi-plus-lg" onClick={handleShow} style={{ fontSize: "1.5rem", color: "#2b6777" }}></i>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title === "Edit" ? "Edit Experience" : "Add Experience"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={props.handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Role</Form.Label>
              <Form.Control id="role" type="text" placeholder="Role..." value={role} onChange={(e) => setRole(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company Name</Form.Label>
              <Form.Control id="company" type="text" placeholder="Company Name..." value={company} onChange={(e) => setCompany(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <Form.Control id="startDate" type="datetime-local" placeholder="Start date..." value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>description</Form.Label>
              <Form.Control id="description" type="text-area" placeholder="description..." value={description} onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control id="area" type="text" placeholder="Area..." value={city} onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control id="area" type="text" placeholder="Area..." value={country} onChange={(e) => setCountry(e.target.value)} />
            </Form.Group>
            {/* {formType === 'edit' && ( */}
            {/* <Form.Group className="mt-3">
              <Form.Control id="picture" type="file" onChange={selectImage} />
            </Form.Group> */}
            {/* )} */}
          </Modal.Body>
          <Modal.Footer>
            <Button as="input" type="submit" value="Submit" variant="outline-primary" onClick={addExperience} />
            {/* {formType === "edit" && <Button as="input" type="button" value="Delete" variant="outline-primary" onClick={handleDelete} />} */}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default EditExperience;
