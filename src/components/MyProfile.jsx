import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "../styles/profilepage.css";

const MyProfile = (props) => {
  const [showProfile, setShowProfile] = useState(false);
  const [user, setuser] = useState(null);

  return (
    <>
      <Container className="py-3" style={{ minHeight: "100vh" }}>
        {/* <h2>My Profile </h2> */}

        <Row className="mt-5">
          <Col xs={4} className="   mx-3 ">
            <Row className=" my-3 py-4 profileColumn">
              <div className="pb-3 d-flex justify-content-center">
                <Image src="https://via.placeholder.com/100" fluid roundedCircle />
              </div>
              <div className="pb-3 d-flex justify-content-center">
                <span>Name</span>
                <span className="px-3">Surname</span>
              </div>
              <div className="my-3 py-1   ">
                <p className=" py-2 px-1 summaryBox ">Skills</p>
              </div>
            </Row>

            <Row className=" my-5 py-3 profileColumn">
              <div className="my-1 py-1   ">
                <span className="   ">Description</span>
                <p className="  py-2 px-1 summaryBox ">Description</p>
              </div>

              <div className="my-3 py-1   ">
                <span className="   ">Languages</span>
                <p className=" py-2 px-1 summaryBox ">Languages </p>
              </div>
            </Row>
          </Col>
          <Col></Col>

          <Col xs={7}>
            <div className=" mb-4 mt-3 projectTitle">
              <h2 className=" pt-2 px-3 projectText">My Projects </h2>
            </div>
            <Row className="mt-5 py-1 ">
              <Col xs={3}>
                <div className=" mb-4 projectBox">
                  <div>
                    <Image src="https://via.placeholder.com/290x190" fluid rounded />
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
                <div className=" mb-3 projectBox">
                  <div>
                    <Image src="https://via.placeholder.com/290x190" fluid rounded />
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
                <div className=" mb-3 projectBox">
                  <div>
                    <Image src="https://via.placeholder.com/290x190" fluid rounded />
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
                <div className="mb-3 projectBox">
                  <div>
                    <Image src="https://via.placeholder.com/290x190" fluid rounded />
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
                <div className=" mb-3 projectBox">
                  <div>
                    <Image src="https://via.placeholder.com/290x190" fluid rounded />
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
          </Col>
        </Row>
        {/* <Row className="   py-3 ">
          <Link to="/updateProfile">
            <Button variant="primary">Update Profile</Button>
          </Link>{" "}
        </Row> */}
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/updateProfile">
            <Button variant="primary" type="submit">
              Update Profile
            </Button>
          </Link>
          <Link to="/createService">
            <Button variant="primary" type="submit">
              Create a project{" "}
            </Button>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default MyProfile;
