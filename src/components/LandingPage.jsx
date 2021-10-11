import React, { useState, useEffect } from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

import DetailPage from "./detailPage";
import MyLoginModal from "./Login";
import "../styles/HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

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

  const createProject = () => {
    if (localStorage.getItem("username")) {
      routerProps.history.push("/postproject");
    } else {
      routerProps.history.push("/login");
    }
  };

  return (
    <>
      <NavBar />
      <Container fluid>
        <Row className="d-flex">
          <Col className="searchSection  ">
            <div className=" p-5 searchContainer  ">
              <h2 className=" py-3 ">Find your perfect project match </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.{" "}
              </p>
              <div className=" d-flex gap-1 ">
                <Button className="homeButtons" variant="outline-secondary" id="button-addon2" onClick={createProject}>
                  Create Project{" "}
                </Button>
                <Button className="homeButtons" variant="outline-secondary" id="button-addon2" onClick={() => routerProps.history.push("/dashboard")}>
                  Find Projects{" "}
                </Button>
              </div>
            </div>{" "}
          </Col>
          <Col className="landingImage">
            <div className="landingImage"></div>{" "}
          </Col>{" "}
        </Row>
      </Container>

      <div id="">
        <Container>
          <Row className=" py-5 ">
            <div className=" py-3 howItWorksSection">
              <h2 className="howItWorksText">How It Works</h2>
            </div>
            <div className="howItWorksSection">
              <h4 className="howItWorksText">Its very simple, get people to work on your project in few steps. </h4>
            </div>

            <div className="howItWorksBox py-4">
              <div className="howItWorksCard py-3">
                <Image src="https://via.placeholder.com/200" />
                <p className="howItWorksText py-3">Click on Post Project</p>
              </div>
              <div className="howItWorksCard py-3">
                <Image src="https://via.placeholder.com/200" />
                <p className="howItWorksText py-3">Fill in Project Details</p>
              </div>
              <div className="howItWorksCard py-3">
                <Image src="https://via.placeholder.com/200" />
                <p className="howItWorksText py-3">Create Project </p>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default LandingPage;
