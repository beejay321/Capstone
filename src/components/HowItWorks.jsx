import React from 'react';
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import click from "../assets/images/click.jpg";
import form from "../assets/images/fill_form.png";
import project from "../assets/images/project_icon.png";
import "../styles/HomePage.css";

function HowItWorks(props) {
    return (
        <div id="" className=" howItWorksSection  my-3">
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
    );
}

export default HowItWorks;