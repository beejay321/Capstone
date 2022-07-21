import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./profilepage.css";
const MY_APP_API_URL = "http://localhost:3255";

// const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";
function EditEducation(props) {
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [startDate, setStartDate] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addEducation = async () => {
    try {
      const education = {
        degree: degree,
        institution: institution,
        city: city,
        country: country,
        startDate: startDate,
      };
      console.log(education);
      console.log(props.user._id);
      const response = await fetch(`${MY_APP_API_URL}/users/${props.user._id}/education`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(education),
      });

      if (response.ok) {
        console.log(response);
        alert("education added successfully");
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
          <Modal.Title>{props.title === "Edit" ? "Edit Education" : "Add Education"}</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Degree</Form.Label>
              <Form.Control id="role" type="text" placeholder="Degree" value={degree} onChange={(e) => setDegree(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Institution</Form.Label>
              <Form.Control id="company" type="text" placeholder="Name of Institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Start date</Form.Label>
              <Form.Control id="startDate" type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control id="area" type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Country</Form.Label>
              <Form.Control id="area" type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button as="input" type="submit" value="Submit" variant="outline-primary" onClick={addEducation} />
            {/* {props.formType === "edit" && <Button as="input" type="button" value="Delete" variant="outline-primary" onClick={props.handleDelete} />} */}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditEducation;
