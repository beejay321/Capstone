import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
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
  const [isLoading, setIsLoading] = useState("");

  const projectId = match.params.projectId;
  useEffect(() => {
    setIsLoading(true);
    const getProject = async () => {
      try {
        let response = await fetch(`${MY_APP_API_URL}/projects/${projectId}`);
        console.log(response);
        if (response.ok) {
          let result = await response.json();
          setIsLoading(false);
          setProject(result);
          console.log(result.bids);
          setBids(result.bids);
        }
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
      {isLoading ? (
        <div className={styles.detailDiv}>
          <Container className=" ">
            <Row className="">
              <Col xs={1}></Col>
              <Col xs={10}>
                <div className={styles.detailtopRow}>
                  <div className={styles.files}>
                    <div className={styles.imageFill}>
                      <Skeleton className={styles.projectSkeleton} height={750} width={750} />
                    </div>{" "}
                  </div>
                  {/*  */}
                  <div className={styles.projectDetails}>
                    <div className={styles.projectHead}>
                      <div className={styles.sellerImageDiv}>
                        <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
                      </div>
                      <div>
                        <span className=" ">
                          <Skeleton width={80} />
                        </span>
                      </div>
                      <div className={styles.projectHead}>
                        <h5 className={styles.projectTitle}>
                          <Skeleton count={2} width={120} />
                        </h5>
                      </div>{" "}
                      <div>
                        <div className={styles.projectText}>
                          <Skeleton count={5} width={180} />{" "}
                        </div>

                        <p className={styles.projectLocation}>
                          <Skeleton count={2} width={100} />
                        </p>
                      </div>
                      <div className={styles.bidOffer}>
                        <Skeleton height={30} width={80} />
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <div className={styles.detailDiv}>
          {project && (
            <>
              <Container className=" mb-5">
                <Row className="">
                  <Col xs={1}></Col>
                  <Col xs={10}>
                    <DetailOfProject project={project} match={match} />
                  </Col>
                </Row>

                <Row>
                  <Col xs={1}></Col>
                  <Col xs={10}>
                    <div>{localStorage.getItem("id") === project.seller._id ? <OwnersBidView bids={bids} project={project} /> : <FreelancersBidView bids={bids} project={project} />}</div>{" "}
                  </Col>
                </Row>
              </Container>
              <div className={styles.similarProjectRow}>
                <Container className="">
                  <Row className="py-5">
                    <Col xs={1}></Col>
                    <Col xs={10}>
                      <SimilarProjects />
                    </Col>
                  </Row>
                </Container>
              </div>
            </>
          )}
        </div>
      )}

      <Footer />
    </>
  );
};
export default DetailPage;
