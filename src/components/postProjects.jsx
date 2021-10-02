import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../styles/postProject.css";

const ADDRESS = "http://localhost:3255";

const PostProject = (props) => {
  const [seller, setSeller] = useState(localStorage.getItem("id"));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [location, setLocation] = useState("");

  const postProject = async (event) => {
    try {
      console.log(localStorage.getItem("id"));
      const service = {
        seller: seller,
        title: title,
        summary: summary,
        location: location,
        Description: description,
      };
      const response = await fetch(`${ADDRESS}/projects`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(service),
      });

      if (response.ok) {
        console.log(response);
        alert(" project successfully created");
        // props.history.push("/myProjects");
      } else {
        alert(" not successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="postProjectSection">
        <Container className=" py-5">
          <Row>
            <Col className="postProjectForm" xs={{ offset: 2, span: 8 }}>
              <h2>Create your Project</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control placeholder="a short description of project" value={summary} onChange={(e) => setSummary(e.target.value)} />
                </Form.Group>
                <Row className="">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Location</Form.Label>
                  </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Control type="text" placeholder="Where is the project to be delivered?" value={location} onChange={(e) => setLocation(e.target.value)} />
                </Form.Group>
                <br />
                <Row className="">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Upload Files</Form.Label>
                  </Form.Group>
                </Row>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Summary</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="A more detailed description of your projects"
                      as="textarea"
                      style={{ height: "150px" }}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Group>
                </Row>

                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="success" type="submit" onClick={postProject}>
                    Save
                  </Button>
                  <Link to="/users/me">
                    <Button variant="success" type="submit">
                      My Profile{" "}
                    </Button>
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default PostProject;

// "d-flex justify-content-center align-items-center"
//   style={{ minHeight: "100vh" }}
