import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col, Alert } from "react-bootstrap";
import "../../styles/checkout.css";
import NavBar from "../NavBar";
import Footer from "../Footer";

// const ADDRESS = "http://localhost:3255";
const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const ConfirmDetails = ({ match, history }) => {
  const [bidder, setBidder] = useState("");
  const [project, setProject] = useState("");
  // const [user, setUser] = useState("");
  // const [checkout, setCheckOut] = useState(false);
  // const [freelancer, setFreelancer] = useState(false);
  // const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // const [projectDetails, setProjectDetails] = useState("");
  // const [bid, setBids] = useState("");
  // const [status, setStatus] = useState("pending");
  // const [myBids, setMyBids] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      try {
        let response = await fetch(`${MY_APP_API_URL}/projects/${match.params.projectId}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        console.log(response);
        let result = await response.json();
        console.log(result);
        setProject(result);
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

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await fetch(`${MY_APP_API_URL}/users/${match.params.bidderId}`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setBidder(data);
          // setMyBids(data.myBids);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [match.params.bidderId]);

  const confirm = () => {
    // setStatus("confirmed");
    history.push(`/users/${match.params.bidderId}`);
    // delete project from dashboard
    // update status on bidder profile
    console.log(price)

  };

  const reject = () => {
    // setStatus("rejected");
    history.push(`/users/${match.params.bidderId}`);
  };

  return (
    <>
      <NavBar />
      <div className="topRow"></div>
      <Container className=" CheckoutContainer mb-5">
        <Alert className=" my-3" variant="success">
          <Alert.Heading>Confirm Project details </Alert.Heading>
          <p>Please confirm details of the project you are to work on</p>
        </Alert>

        <Row className="d-flex gap-5 my-5">
          <Col xs={6} className=" CheckoutBox p-3">
            <h3>Project details</h3>
            <div className="  ">
              <div>
                <p className="m-1">Product Title</p>
                <p className="fixedValue">Logo Design</p>
              </div>
              <div>
                <p className="m-1">Email address</p>
                <p className="fixedValue">{bidder.email}</p>
              </div>
              <div>
                <p className="m-1">Price</p>
                <p className="fixedValue">50.00</p>
              </div>
              <div>
                <p className="m-1">Bid Details</p>
                <p className="fixedValue">{project.details}</p>
              </div>
            </div>
            <div className="d-flex gap-2 ">
              <Button onClick={confirm}>Confirm</Button>
              <Button onClick={reject}>Reject </Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};
export default ConfirmDetails;
