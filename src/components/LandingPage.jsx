import React from "react";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import click from "../assets/images/click.jpg";
import form from "../assets/images/fill_form.png";
import project from "../assets/images/project_icon.png";
import "../styles/HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const LandingPage = (routerProps) => {
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
          <Col className=" startSection ">
            <div className=" p-5 startContainer  ">
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

      <div id="" className=" howItWorksSection ">
        <Container>
          <Row className=" py-3 ">
            <div className=" pb-2 ">
              <h2 className="howItWorksText">How It Works</h2>
            </div>
            <div className="">
              <h4 className="howItWorksText">Its very simple, get people to work on your project in few steps. </h4>
            </div>
          </Row>
          <Row className=" py-5 d-flex justify-content-center">
            <Col className="howItWorksCard py-3 ">
              <Image src={click} width="250" />
              <p className="howItWorksText py-3">Click on Post Project</p>
            </Col>
            <Col className="howItWorksCard py-3 ">
              <Image src={form} width="250" />
              <p className="howItWorksText py-3">Fill in Project Details</p>
            </Col>
            <Col className="howItWorksCard py-3 ">
              <Image src={project} width="250" />
              <p className="howItWorksText py-3">Create Project </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default LandingPage;
