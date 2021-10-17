import React, { useState, useEffect } from "react";
import { Container, Row, Button, Form, Col, Alert } from "react-bootstrap";
import "../styles/checkout.css";
import PayPal from "./PayPal";
import NavBar from "./NavBar";
import Footer from "./Footer";

// const ADDRESS = "http://localhost:3255";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const Checkout = ({ match, history }) => {
  const [bidder, setBidder] = useState("");
  // const [checkout, setCheckOut] = useState(false);
  const [price, setPrice] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [project, setProject] = useState("");
  const [hidePaypal, setHidePaypal] = useState(false);
  const [showPaymentDiv, setShowPaymentDiv] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState("");
  const [alert, setAlert] = useState("confirm");

  const getProject = async () => {
    try {
      let response = await fetch(`${MY_APP_API_URL}/projects/${match.params.projectId}`);
      console.log(response);
      let result = await response.json();
      console.log(result);
      setProject(result);
      setProjectDetails(result.Description);
    } catch (error) {
      console.log(error);
    }
  };

  const getBid = async () => {
    try {
      let response = await fetch(`${MY_APP_API_URL}/projects/${match.params.projectId}/bids/${match.params.bidId}`);
      console.log(response);
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        setPrice(result.cost);
        const bidderId = result.user;

        try {
          let response = await fetch(`${MY_APP_API_URL}/users/${bidderId}`, {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            setBidder(data);
          }
        } catch (error) {}
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProject();
    getBid();
  }, []);

  const makePayment = () => {
    const service = {
      title: project.summary,
      email: bidder.email,
      price: price,
      details: projectDetails,
    };
    setPaymentDetails(service);
    setAlert("saved");
    // setCheckOut(true);
    setShowPaymentDiv(true);
  };

  return (
    <>
      <NavBar />
      <div className="topRow"></div>
      {hidePaypal ? (
        <div>
          <div className="d-flex justify-content-center py-5">
            <Col xs={3} className="py-3">
              <div className=" projectBox">
                <div className="py-1    ">
                  <span>{project.summary}</span>
                </div>

                <div className="py-1  my-1  ">
                  <span>I need to design a logo for my wedding. To use for on all both invitation and access cards.</span>
                </div>
                <div className=" mt-1  ">
                  <span>{project.location}</span>
                </div>
              </div>
            </Col>
          </div>
          <div className="d-flex justify-content-center pb-5">
            <h3>Payment has been made to the freelancer !</h3>
          </div>
        </div>
      ) : (
        <Container className=" CheckoutContainer mb-5">
          {alert === "confirm" && (
            <Alert className="my-3" variant="success">
              <Alert.Heading>Confirm details of the project with the Freelancer!!</Alert.Heading>
              <p>
                Be sure to have a chat with the freelancer about the details of the project and confirm their availability and ability to carry out the task. Payment made will be held by the platform
                until project is completed .
              </p>
            </Alert>
          )}
          {alert === "saved" && (
            <Alert className="my-3" variant="success">
              <Alert.Heading>Project details saved, you can make payment now</Alert.Heading>
            </Alert>
          )}
          {alert === "paymentMade" && (
            <Alert className="my-3" variant="success">
              <Alert.Heading>Payment made succesfully</Alert.Heading>
            </Alert>
          )}
          {alert === "emailSent" && (
            <Alert className="my-3" variant="success">
              <Alert.Heading>Confirmation email has been sent to freelancer</Alert.Heading>
            </Alert>
          )}

          <Row className="d-flex gap-5 my-5">
            <Col xs={6} className=" CheckoutBox p-3">
              <h3>Project details</h3>
              <div className="  ">
                <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label> Product Title</Form.Label>
                      <Form.Control className="fixedValue" value={project.summary} required type="text" placeholder="Final price" />
                    </Form.Group>
                  </Form>
                </div>
                <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label> Email address</Form.Label>
                      <Form.Control className="fixedValue" value={bidder.email} required type="text" placeholder="Final price" />
                    </Form.Group>
                  </Form>
                </div>

                <div>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Price</Form.Label>
                      <Form.Control className="fixedValue" value={price} required onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Final price" />
                    </Form.Group>
                  </Form>
                </div>
                <div>
                  <p className="m-1">Bid Details</p>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control
                        required
                        className="fixedValue"
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                        as="textarea"
                        rows={3}
                        placeholder="Additional details of the project"
                      />
                    </Form.Group>
                  </Form>
                </div>
                <div className="d-flex justify-content-end gap-1">
                  {/* {!checkout && */}
                  <Button variant="success" type="submit" onClick={makePayment}>
                    Proceed to payment
                  </Button>
                  {/* } */}
                </div>
              </div>
            </Col>

            {showPaymentDiv && (
              <Col className=" CheckoutBox p-3">
                <h3 className="pb-2">Payment Method</h3>

                <div>
                  {/* {checkout && ( */}
                  <PayPal setAlert={setAlert} paymentDetails={paymentDetails} setHidePaypal={setHidePaypal} project={project} bidder={bidder} price={price} projectDetails={projectDetails} />
                  {/* )} */}
                </div>
                {/* </div> */}
              </Col>
            )}
          </Row>
        </Container>
      )}
      <Footer />
    </>
  );
};
export default Checkout;
