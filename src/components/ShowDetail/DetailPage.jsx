import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "../../styles/detail.css";
import styles from "./ProjectDetail.module.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import SimilarProjects from "./SimilarProjects";
import DetailOfProject from "./DetailOfProject";
import FreelancersBidView from "./FreelancersBidView";
import OwnersBidView from "./OwnersBidView";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const DetailPage = ({ match, history }) => {
  const [project, setProject] = useState("");
  const [bids, setBids] = useState([]);

  const projectId = match.params.projectId;
  useEffect(() => {
    const getProject = async () => {
      try {
        let response = await fetch(`${MY_APP_API_URL}/projects/${projectId}`);
        console.log(response);
        let result = await response.json();
        console.log(result);
        setProject(result);
        console.log(result.bids);
        setBids(result.bids);
      } catch (error) {
        console.log("error");
      }
    };
    getProject();
  }, [projectId]);

  return (
    <>
      <NavBar />
      <Container fluid className={styles.topRow}>
        <div></div>
      </Container>
      <div className={styles.detailDiv}>
        <Container className="">
          {project && (
            <>
              <Row className="py-3">
                <Col xs={2}></Col>
                <Col xs={8}>
                  <DetailOfProject project={project} match={match} />
                </Col>
              </Row>
              <Row className="py-3">
                <Col xs={2}></Col>

                <Col xs={8}>{localStorage.getItem("id") === project.seller._id ? <OwnersBidView bids={bids} project={project} /> : <FreelancersBidView bids={bids} project={project} />}</Col>
              </Row>
              <Row className="py-3">
                <Col xs={2}></Col>

                <Col xs={8}>
                  <SimilarProjects />
                </Col>
              </Row>
            </>
          )}
        </Container>
      </div>
      {/* <Container>
        <Row className="">
          <Col xs={10}>
            <SimilarProjects />
          </Col>
        </Row>
      </Container> */}

      <Footer />
    </>
  );
};
export default DetailPage;
