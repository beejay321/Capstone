import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const ADDRESS = "http://localhost:3255";

const CreateService = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [location, setLocation] = useState("");

  const createService = async (event) => {
    try {
      const service = {
        seller: ` ${localStorage.getItem("id")}`,
        title: title,
        summary: summary,
        location: location,
        Description: description,
      };
      const response = await fetch(`${ADDRESS}/users/me/projects`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(service),
      });

      if (response.ok) {
        console.log(response);
        props.history.push("/myProjects");
      } else {
        alert(" not successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <Container className=" py-5">
          <Row>
            <Col xs={{ offset: 2, span: 8 }}>
              <h2>Create a new Service</h2>

              <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control placeholder="a short summary" required value={category} onChange={(e) => setCategory(e.target.value)} type="text" />
                </Form.Group>

                <Row className="">
                  <Form.Group as={Col} controlId="">
                    <Form.Label>Pricing</Form.Label>
                  </Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="">
                    <Form.Control type="text" placeholder="A more detailed description of your projects" required value={description} onChange={(e) => setDescription(e.target.value)} />
                  </Form.Group>

                  
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control placeholder="" as="textarea" style={{ height: "100px" }} required value={summary} onChange={(e) => setSummary(e.target.value)} />
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center">
                  <Button variant="success" type="submit" onClick={createService}>
                    Save
                  </Button>
                  <Link to="/dashboard">
                    <Button variant="success" type="submit">
                      Create{" "}
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
export default CreateService;

// "d-flex justify-content-center align-items-center"
//   style={{ minHeight: "100vh" }}
