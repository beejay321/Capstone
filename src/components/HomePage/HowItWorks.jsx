import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./LandingPage.module.css";

function HowItWorks(props) {
  return (
    <div id="" className={styles.howItWorksSection}>
      <Container>
        <Row className="">
          <div className="">
            <h2 className={styles.howItWorksTitle}>How It Works</h2>
          </div>
          <div className="">
            <h4 className={styles.howItWorksText}>It's very simple, get people to work on your project in few steps. </h4>
          </div>
        </Row>
        <Row className={styles.howItWorksCardDiv}>
          <Col xs={8} md={6} xl={3} className={styles.howItWorksCard}>
            <div className={styles.howItWorksIconDiv}>
              <span className={styles.howItWorksIcon}>
                <i class="bi bi-hand-index"></i>
              </span>
            </div>{" "}
            <p className={styles.howItWorksText}>Click on Post Project</p>
          </Col>
          <Col xs={8} md={6} xl={3} className={styles.howItWorksCard}>
            <div className={styles.howItWorksIconDiv}>
              <span className={styles.howItWorksIcon}>
                <i class="bi bi-ui-checks"></i>
              </span>
            </div>{" "}
            <p className={styles.howItWorksText}>Fill in Project Details</p>
          </Col>
          <Col xs={8} md={6} xl={3} className={styles.howItWorksCard}>
            <div className={styles.howItWorksIconDiv}>
              <span className={styles.howItWorksIcon}>
                <i class="bi bi-send-check"></i>{" "}
              </span>
            </div>{" "}
            <p className={styles.howItWorksText}>Create Project </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HowItWorks;
