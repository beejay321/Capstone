import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";

import "../styles/HomePage.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HowItWorks from "./HowItWorks";

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
      <div id="homeDiv">
        <Container fluid>
          <Row className="d-flex">
            <Col className=" startSection ">
              <div className="  startContainer  ">
                <h2 className=" py-3 ">Find your perfect project match </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur.{" "}
                </p>
                <div className="  gap-2 homeButtonsSection ">
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
              <div className=""></div>{" "}
            </Col>{" "}
          </Row>
        </Container>
      </div>
        <HowItWorks />
        
      <Footer />
    </>
  );
};
export default LandingPage;
