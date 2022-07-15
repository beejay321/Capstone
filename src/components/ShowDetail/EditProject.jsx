import React, { useState } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
// import { useRouteMatch, useHistory } from "react-router-dom";

const MY_APP_API_URL = "http://localhost:3255";
// const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

function EditProject(props) {
  // const [user, setUser] = useState("");
  // const [updatedProjects, setProject] = useState("");
  const [seller] = useState(localStorage.getItem("id"));
  const [title, setTitle] = useState(props.project.title);
  const [category, setCategory] = useState(props.project.category);
  const [description, setDescription] = useState(props.project.Description);
  const [summary, setSummary] = useState(props.project.summary);
  const [location, setLocation] = useState(props.project.location);
  // const [file, setFile] = useState([]);

  const [show, setShow] = useState(false);
  // const [LoggedIn, setLoggedIn] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // let match = useRouteMatch();
  // let history = useHistory();

  const editProject = async (e) => {
    try {
      const projectDetails = {
        seller: seller,
        title: title,
        summary: summary,
        category: category,
        location: location,
        Description: description,
      };
      const response = await fetch(`${MY_APP_API_URL}/projects/${props.project._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(projectDetails),
      });
      console.log(response);
      if (response.ok) {
        console.log("Updated");
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProject = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch(`${MY_APP_API_URL}/projects/${props.project._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (response.ok) {
        alert("Deleted");
        handleClose();
        props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="editProject">
        <i className="bi bi-pencil-square " onClick={handleShow} style={{ fontSize: "1.8rem", color: "#2b6777" }}></i>
      </div>{" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Project</Modal.Title>
        </Modal.Header>
        <Form onSubmit={props.handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Title</Form.Label>
              <Form.Control required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Summary</Form.Label>
              <Form.Control placeholder="a short description of project" required value={summary} onChange={(e) => setSummary(e.target.value)} />
            </Form.Group>
            <Row className="">
              <Col>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Category</Form.Label>
                </Form.Group>

                <div className="form-row">
                  <div className="form-group ">
                    <select className="form-select" name="category" onChange={(e) => setCategory(e.target.value)}>
                      <option selected>Select Category</option>
                      <option value="Design">Design</option>
                      <option value="Education"> Education</option>
                      <option value="Beauty"> Beauty</option>
                      <option value="Programming"> Programming</option>
                      <option value="Catering"> Catering</option>
                      <option value="Entertainment"> Entertainment</option>
                      <option value="Business"> Business</option>
                      <option value="Others"> Others</option>
                    </select>
                  </div>
                </div>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="">
                  <Form.Label>Location</Form.Label>
                  <Form.Control required type="text" placeholder="Where is the project to be delivered?" value={location} onChange={(e) => setLocation(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <br />

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="A more detailed description of your project"
                  as="textarea"
                  style={{ height: "150px" }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
            </Row>
            {/* {props.formType === 'edit' && ( */}
            <Form.Group className="mt-3">
              <Form.Control id="picture" type="file" onChange={props.selectImage} />
            </Form.Group>
            {/* )} */}
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between gap-1">
            <div className="">
              <Button variant="danger" type="submit" onClick={deleteProject}>
                Delete{" "}
              </Button>
            </div>
            <div className="d-flex justify-content-end gap-1">
              <Button variant="success" type="submit" onClick={editProject}>
                Edit
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditProject;
