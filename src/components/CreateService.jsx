import React from "react";
import { Form, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const CreateService = (props) => {
  return (
    <>
      <div>
        <Container className=" py-5">
          <h2>Create your first Service</h2>

          <Form>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Title" />
            </Form.Group>

            {/* <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Category</Form.Label>
                <Form.Control type="email" placeholder="Select Language" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Level</Form.Label>
                <Form.Control type="lastName" placeholder="Select Level" />
              </Form.Group>
            </Row> */}

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Category</Form.Label>
              <Form.Control placeholder="Select Category" />
            </Form.Group>

            <Row className="">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Pricing</Form.Label>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="email" placeholder="Add Skill" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="lastName" placeholder="Experience Level" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Summary</Form.Label>
              <Form.Control placeholder="" as="textarea" style={{ height: "100px" }} />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <Button variant="success" type="submit">
                Save
              </Button>
              <Link to="/myProfile">
                <Button variant="success" type="submit">
                  Create{" "}
                </Button>
              </Link>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};
export default CreateService;

// "d-flex justify-content-center align-items-center"
//   style={{ minHeight: "100vh" }}
