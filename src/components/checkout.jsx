import React, { useState, useEffect } from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import PayPal from "./PayPal";

const Checkout = (props) => {
  const [user, setUser] = useState("");
  const [checkout, setCheckOut] = useState(false);

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await fetch(`http://localhost:3255/projects/612e0c102a68687fa0360db5`);

        if (response.ok) {
          let data = await response.json();
          console.log(data);
          this.setState({
            project: data,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  return (
    <>
      <Container className="  mb-5">
        <Row className="d-flex gap-3">
          <h3 className="pb-5 ">Checkout Details</h3>
          <Col xs={6}>
            <Row className=" py-5 gap-4 ">
              <div className=" projectBox py-5">
                <h3>Project details</h3>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Bid Details</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="A brief description of the the final details of the project" />
                  </Form.Group>
                </Form>
              </div>
              <div className=" projectBox py-5">
                <h3>Payment Method</h3>
                <div className="d-grid gap-2">
                  <Form>
                    <div className="mb-3">
                      <Form.Check type="radio" id="default-radio" label="Cash On Delivery" />
                    </div>
                  </Form>
                  {checkout ? (
                    <PayPal />
                  ) : (
                    // ""
                    <Button
                      variant="warning"
                      size="lg"
                      onClick={() => {
                        setCheckOut(true);
                      }}
                    >
                      PayPal{" "}
                    </Button>
                  )}

                  <Button
                    variant="warning"
                    size="lg"
                    onClick={() => {
                      setCheckOut(true);
                    }}
                  >
                    PayPal{" "}
                  </Button>
                  <Button variant="dark" size="lg">
                    Debit or Credit Card{" "}
                  </Button>
                </div>
              </div>
            </Row>
          </Col>

          <Col>
            <div className=" projectBox py-5">
              <h3>Project Summary</h3>
              <Row className="py-5">
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Bid Details</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="A brief description of the the final details of the project" />
                  </Form.Group>
                </Form>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Checkout;
