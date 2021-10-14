import React, { useState, useEffect } from "react";
import {  Container, Row, Button, Form, Col, Alert} from "react-bootstrap";
import "../styles/checkout.css";
import PayPal from "./PayPal";
import NavBar from "./NavBar";
import Footer from "./Footer";

const ADDRESS = "http://localhost:3255";

const Checkout = ({ match, history }) => {
  const [bidder, setBidder] = useState("");
  const [checkout, setCheckOut] = useState(false);
  // const [freelancer, setFreelancer] = useState(false);
  // const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [project, setProject] = useState("");
  // const [bid, setBids] = useState("");
  const [hidePaypal, setHidePaypal] = useState(false);

  const getProject = async () => {
    try {
      let response = await fetch(`${ADDRESS}/projects/${match.params.projectId}`);
      console.log(response);
      let result = await response.json();
      console.log(result);
      setProject(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getBid = async () => {
    try {
      let response = await fetch(`${ADDRESS}/projects/${match.params.projectId}/bids/${match.params.bidId}`);
      console.log(response);
      if (response.ok) {
        let result = await response.json();
        console.log(result);
        console.log(result[0].user);
        // setBids(result);
        const bidderId = result[0].user;

        try {
          let response = await fetch(`${ADDRESS}/users/${bidderId}`, {
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
          <Alert className="my-3" variant="danger">
            <Alert.Heading>Confirm details of the project with the Freelancer!!</Alert.Heading>
            <p>
              Be sure to have a chat with the freelancer about the details of the project and confirm their availability and ability to carry out the task. Payment made will be held by the platform
              until project is completed .
            </p>
            {/* <hr />
            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p> */}
          </Alert>

          <Row className="d-flex gap-5 my-5">
            <Col xs={6} className=" CheckoutBox p-3">
              <h3>Project details</h3>
              <div className="  ">
                <div>
                  <p className="m-1">Product Title</p>
                  <p className="fixedValue">{project.summary} </p>
                </div>
                <div>
                  <p className="m-1">Email address</p>
                  <p className="fixedValue">{bidder.email}</p>
                </div>
                <div>
                  <p className="m-1">Price</p>
                  <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Control className="fixedValue" required  onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Final price" />
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
                        onChange={(e) => setProjectDetails(e.target.value)}
                        as="textarea"
                        rows={3}
                        placeholder="Additional details of the project"
                      />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </Col>

            <Col className=" CheckoutBox p-3">
              <h3>Payment Method</h3>
              {/* <div className=""> */}
              <Form>
                <div className="mb-3">
                  <Form.Check type="radio" id="default-radio" label="Cash On Delivery" />
                </div>
              </Form>
              <div>
                {checkout ? (
                  <PayPal setHidePaypal={setHidePaypal} project={project} bidder={bidder} price={price} projectDetails={projectDetails} />
                ) : (
                  <Button
                    onClick={() => {
                      setCheckOut(true);
                    }}
                  >
                    Make Payment
                  </Button>
                )}
              </div>
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      )}

      <Footer />
    </>
  );
};
export default Checkout;
