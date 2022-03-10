import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button, Col, Image } from "react-bootstrap";
import BidModal from "./BidModal";
import "../styles/detail.css";
import NavBar from "./NavBar";
import Footer from "./Footer";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const DetailPage = ({ match, history }) => {
  // const [LoggedIn, setLoggedIn] = useState(false);
  const [project, setProject] = useState("");
  const [bids, setBids] = useState("");
  // const [cart, setCart] = useState([]);

  // const Login = () => {
  //   console.log("You need to Log in");
  //   alert("You need to Log in");
  // };

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
      <Container fluid className="topRow">
        <div></div>
      </Container>
      <div className="detail-div">
        <Container className="">
          <Row className="py-5">
            {project && (
              <Col xs={8}>
                <div className="mt-3 pt-2 detailtopRow px-3 ">
                  <div className=" py-3 d-flex justify-content-between">
                    <h5 className="projectTitle">{project.summary}</h5>
                  </div>
                  <Link to={`/users/${project.seller._id}`} className="sellerLink">
                    <div className="  d-flex  gap-1  ">
                      <div className="sellerImageDiv">
                        <Image className="sellerImage" src={project.seller.picture} fluid />
                      </div>
                      <span className=" ">{project.seller.firstname}</span>
                      <span className="d-flex ">{project.seller.lastname} </span>
                    </div>
                  </Link>
                  <p className=" pt-3 projectText">{project.Description} </p>
                  <p className="  ">{project.skills}</p>

                  <div className="d-flex ">
                    <p className="py-1 projectText">{project.location}</p>
                  </div>
                  <hr className="my-0" />
                  <div className="d-flex py-3 summary Box">
                    <Image src="https://via.placeholder.com/50" height="55" rounded alt="files or imagesof projects" />
                  </div>
                  <hr className="my-0" />
                  <div className="py-3 d-flex justify-content-end">{localStorage.getItem("id") === project.seller._id ? "" : <BidModal match={match} history={history} project={project} />}</div>
                </div>
                {localStorage.getItem("id") === project.seller._id ? (
                  <div className="mt-4 py-3 detailtopRow px-3 ">
                    <h5 className="projectTitle">People who have offered to work on this project</h5>
                    <hr />
                    {bids &&
                      bids.map((bid) => (
                        <div key={bid._id}>
                          <Link to={`/users/${bid.user._id}`} className="sellerLink">
                            <div className="  d-flex  gap-1 ">
                              <div className="sellerImageDiv">
                                <Image className="sellerImage" src={bid.user.picture} fluid />
                              </div>
                              <span className=" ">{bid.user.firstname}</span>
                              <span className="d-flex ">{bid.user.lastname} </span>
                            </div>
                          </Link>
                          <div className="d-grid py-3 ">
                            <div className="d-grid projectText py-2">
                              <span className="  pt-1">Message to Client:</span>
                              <span className="  pt-1">{bid.message}</span>
                            </div>
                            <div className="d-flex  justify-content-between">
                              <div>
                                <div className=" projectText d-flex  gap-2">
                                  <span className=" pt-1">Starting From :</span>
                                  <span className=" pt-1">€{bid.cost}</span>
                                </div>
                                <div className=" projectText d-flex  gap-2">
                                  <span className=" pt-1">Duration :</span>
                                  <span className=" pt-1">{bid.duration}</span>
                                </div>
                              </div>
                              <Button className=" bidButton" variant="outline" onClick={() => history.push(`/checkout/${match.params.projectId}/${bid._id}`)}>
                                Choose this Bid
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="mb-5 mt-4 py-3 detailtopRow px-3 ">
                    <h5 className="projectTitle">People who have offered to work on this project</h5>
                    <hr />
                    {bids &&
                      bids.map((bid) => (
                        <div>
                          <Link to={`/users/${bid.user._id}`} className="sellerLink">
                            <div className="  d-flex  gap-1 ">
                              <div className="sellerImageDiv">
                                <Image className="sellerImage" src={bid.user.picture} fluid />
                              </div>
                              <span className=" ">{bid.user.firstname}</span>
                              <span className="d-flex ">{bid.user.lastname} </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                )}
              </Col>
            )}

            <Col>
              <div className="mt-3 mx-5 py-2 similarProjectRow px-3 ">
                <h5 className="projectTitle">Similar Projects</h5>
                <hr />

                <div className=" ">
                  <div>
                    <p className=" pt-2 ">Title</p>
                    <p className=" pt-2 ">Short description</p>
                    <p className=" pt-2 ">Cost and Duration</p>
                  </div>{" "}
                  <div className="my-2 py-1 summaryBox ">
                    <span>Summary</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="mt-2 py-5 "></Row>
      </Container>

      <Footer />
    </>
  );
};
export default DetailPage;
