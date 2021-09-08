import React, { useState, useEffect } from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import LoginModal from "./LoginModal";
import "../styles/dashboard.css";

const DetailPage = ({ match }) => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [project, setProject] = useState("");

  const AddToCart = () => {
    console.log("added to Cart");
  };

  const Login = () => {
    console.log("You need to Log in");
    alert("You need to Log in");
  };

  useEffect(() => {
    const getProject = async () => {
      try {
        let response = await fetch(`http://localhost:3255/projects/${match.params.projectId}`);
        console.log(response);
        let result = await response.json();
        console.log(result);
        setProject(result);
      } catch (error) {
        console.log("error");
      }
    };
    getProject();
  }, []);

  useEffect(() => {
    const AddToCart = () => {
      console.log("added to Cart");
      try {
        console.log("added to Cart");
      } catch (error) {
        console.log("error");
      }
    };
    AddToCart();
  }, []);

  return (
    <>
      <Container fluid className="topRow">
        <div></div>
      </Container>
      <Container>
        {/* <Col xs={{ offset: 1, span: 10 }}> */}
        <Row className="mt-2 py-5 ">
          <Col className=" projectBox">
            <h5>{project.summary}</h5>

            <div className="d-flex py-3 summary Box">
              <Image src="https://via.placeholder.com/50" height="50" roundedCircle />
              {/* <Image src={project.seller.picture} height="60" roundedCircle /> */}
              <span className="px-2 ">Leo</span>
              <span className="d-flex ">Ilant</span>
            </div>
            <div className=" py-3 ">
              <Image src={project.image} fluid />
            </div>
          </Col>

          <Col className=" px-5  d-flex justify-content-center">
            <div>
              <p>About this service</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <li>Lorem ipsum dolor sit amet</li> <li>Lorem ipsum dolor sit amet</li> <li>Lorem ipsum dolor sit amet</li> <li>Lorem ipsum dolor sit amet</li>{" "}
            </div>
          </Col>

          <Col className=" d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>{project.price}</Card.Text>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                <div>
                  <Button variant="success" onClick={LoggedIn ? AddToCart : Login}>
                    Add to Cart
                  </Button>
                </div>{" "}
                <div>
                  <Button variant="outline-success">Contact Seller</Button>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* </Col> */}
      </Container>

      <div className="peoplealsoviewed">
        <Container className="mt-3 pt-4 ">
          {/* <Col xs={{ offset: 1, span: 10 }}> */}
          <h3>People Also Viewed</h3>
          <Row className="mt-4 py-1 pb-5 ">
            <Col xs={3}>
              <div className=" projectBox">
                <div>
                  <Image src="https://via.placeholder.com/290x190" fluid rounded />
                </div>
                <div className="d-flex py-2">
                  <Image src="https://via.placeholder.com/50" roundedCircle />
                  <span className="px-2 ">Name</span>
                  <span className="d-flex ">Surname</span>
                </div>
                <div className="my-2 py-1 summaryBox ">
                  <span>Summary</span>
                </div>
                <div className=" mt-4  ">
                  <span>Price</span>
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <div className=" projectBox">
                <div>
                  <Image src="https://via.placeholder.com/290x190" fluid rounded />
                </div>
                <div className="d-flex py-2">
                  <Image src="https://via.placeholder.com/50" roundedCircle />
                  <span className="px-2 ">Name</span>
                  <span className="d-flex ">Surname</span>
                </div>
                <div className="my-2 py-1 summaryBox ">
                  <span>Summary</span>
                </div>
                <div className=" mt-4  ">
                  <span>Price</span>
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <div className=" projectBox">
                <div>
                  <Image src="https://via.placeholder.com/290x190" fluid rounded />
                </div>
                <div className="d-flex py-2">
                  <Image src="https://via.placeholder.com/50" roundedCircle />
                  <span className="px-2 ">Name</span>
                  <span className="d-flex ">Surname</span>
                </div>
                <div className="my-2 py-1 summaryBox ">
                  <span>Summary</span>
                </div>
                <div className=" mt-4  ">
                  <span>Price</span>
                </div>
              </div>
            </Col>
            <Col xs={3}>
              <div className=" projectBox">
                <div>
                  <Image src="https://via.placeholder.com/290x190" fluid rounded />
                </div>
                <div className="d-flex py-2">
                  <Image src="https://via.placeholder.com/50" roundedCircle />
                  <span className="px-2 ">Name</span>
                  <span className="d-flex ">Surname</span>
                </div>
                <div className="my-2 py-1 summaryBox ">
                  <span>Summary</span>
                </div>
                <div className=" mt-4  ">
                  <span>Price</span>
                </div>
              </div>
            </Col>
          </Row>
          {/* </Col> */}
        </Container>
      </div>
    </>
  );
};
export default DetailPage;
