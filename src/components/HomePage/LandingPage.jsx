import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import styles from "./LandingPage.module.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import HowItWorks from "./HowItWorks";

const LandingPage = (routerProps) => {
  const createProject = () => {
    if (localStorage.getItem("id")) {
      routerProps.history.push("/postproject");
    } else {
      routerProps.history.push("/login");
    }
  };

  return (
    <>
      <NavBar />
      <div id={styles.homeDiv}>
        <Container fluid>
          <Row className="d-flex">
            <Col className={styles.startSection}>
              <div className={styles.startContainer}>
                <h2 className=" py-3 ">Find your perfect project match </h2>

                <div className={styles.homeButtonsSection}>
                  <Button className={styles.homeButtons} variant="outline-secondary" id="button-addon2" onClick={createProject}>
                    {/* Create Project{" "} */}
                    <i class="bi bi-pencil-fill"></i>
                  </Button>
                  <Button className={styles.homeButtons} variant="outline-secondary" id="button-addon2" onClick={() => routerProps.history.push("/projects")}>
                    {/* Find Projects{" "} */}
                    <i class="bi bi-search"></i>
                  </Button>
                </div>
              </div>{" "}
            </Col>
            <Col className={styles.landingImage}>
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
