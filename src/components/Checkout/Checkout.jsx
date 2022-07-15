import React, { useState, useEffect } from "react";
import { Container, Row, Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "../../styles/checkout.css";
// import PayPal from "../PayPal";
import NavBar from "../NavBar";
import Footer from "../Footer";
import PaymentMade from "./PaymentMade";
import ProjectCheckout from "./ProjectCheckout";
import ProjectSummary from "./ProjectSummary";

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

  useEffect(() => {
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
    getProject();
  }, [match.params.projectId]);

  useEffect(() => {
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
    getBid();
  }, [match.params.projectId, match.params.bidId]);

  const makePayment = () => {
    const service = {
      title: project.summary,
      email: bidder.email,
      price: price,
      details: projectDetails,
      total: parseInt(price) + 2.0,
    };
    console.log(service.total);
    setPaymentDetails(service);
    console.log(service);
    console.log(alert);
    setAlert("saved");
    console.log(alert);
    // setCheckOut(true);
    setShowPaymentDiv(true);
  };

  return (
    <>
      <NavBar />
      <div className="topRow"></div>
      {hidePaypal ? (
        <PaymentMade project={project} bidder={bidder} projectDetails={projectDetails} paymentDetails={paymentDetails} />
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
          <Row className="d-flex gap-5 py-5 ">
            <ProjectCheckout project={project} bidder={bidder} price={price} setPrice={setPrice} projectDetails={projectDetails} setProjectDetails={setProjectDetails} makePayment={makePayment} />
            <ProjectSummary
              paymentDetails={paymentDetails}
              showPaymentDiv={showPaymentDiv}
              setAlert={setAlert}
              setHidePaypal={setHidePaypal}
              project={project}
              bidder={bidder}
              price={price}
              setPrice={setPrice}
              projectDetails={projectDetails}
            />
          </Row>
        </Container>
      )}
      <Footer />
    </>
  );
};
export default Checkout;
