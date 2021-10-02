import React, { useState, useEffect } from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import DetailPage from "./detailPage";
import MyLoginModal from "./Login";
import "../styles/HomePage.css";
import NavBar from "./NavBar";

const LandingPage = (routerProps) => {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState([]);

  const searchProject = async (query) => {
    try {
      let response = await fetch(`http://localhost:3255/projects/search/${query}`);
      console.log(response);
      let result = await response.json();
      console.log(result);
      setProjects(result);
      console.log(projects);
      routerProps.history.push("/dashboard");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      {/* <Card className="bg-dark text-white">
        <Card.Img src="https://res.cloudinary.com/dvyids286/image/upload/v1622151363/Strive/fbuminjbxhiziiulrfrg.jpg" height="800" alt="Card image" />

        <Card.ImgOverlay> */}
        {/* <NavBar/> */}
      <div className="searchSection">
        <Container id="">
          <Row className="py-5 my-5 d-flex justify-content-center">
            <Col xs={8} md={7}>
              <div className="searchContainer">
                <h1>Find the perfect freelancer to help </h1>
                {/* <h1> with your projects</h1> */}
              </div>{" "}
              <div className="searchContainer">
                <h1> with your projects</h1>
              </div>{" "}
              <div className="searchContainer">
                <h3>Just a few clicks away </h3>
              </div>{" "}
              <div className="searchContainer">
                <h3> Reliable customer service</h3>
              </div>{" "}
              <div className=" py-2  homeButtonsSection">
                <Button className="homeButtons" variant="success" id="button-addon2" onClick={() => routerProps.history.push("/postproject")}>
                  Create Project{" "}
                </Button>
                <Button className="homeButtons" variant="success" id="button-addon2" onClick={() => routerProps.history.push("/dashboard")}>
                  Find Projects{" "}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div id="">
        <Container>
          <Row className=" py-5 ">
            <div className="howItWorksSection">
              <h1>How It Works</h1>
            </div>
            <div className="howItWorksSection">
              <h3>Its very simple, start earning in few steps. </h3>
            </div>

            <div className="howItWorksBox py-4">
              <div className="howItWorksCard py-2">
                <Image src="https://via.placeholder.com/200" />
                <p>Step 1</p>
              </div>
              <div className="howItWorksCard py-2">
                <Image src="https://via.placeholder.com/200" />
                <p>Step 2</p>
              </div>
              <div className="howItWorksCard py-2">
                <Image src="https://via.placeholder.com/200" />
                <p>Step 3</p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default LandingPage;
