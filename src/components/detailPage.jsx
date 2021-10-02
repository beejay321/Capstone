import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import BidModal from "./BidModal";
import "../styles/dashboard.css";

const DetailPage = ({ match, history }) => {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [project, setProject] = useState("");
  const [bids, setBids] = useState("");
  const [cart, setCart] = useState([]);

  const Login = () => {
    console.log("You need to Log in");
    alert("You need to Log in");
  };

  useEffect(() => {
    const getProject = async () => {
      try {
        let response = await fetch(`http://localhost:3255/projects/${match.params.projectId}`);
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
  }, []);

  const AddToCart = (project) => {
    try {
      let newCart = [...cart];
      newCart.push(project);
      setCart(newCart);
      console.log(cart);
      localStorage.setItem("project", cart);
      console.log("added to Cart");
    } catch (error) {
      console.log("error");
    }
  };
  const CheckOut = (project) => {
    try {
      history.push(`/checkout/${project._id}/`);
    } catch (error) {
      console.log("error");
    }
  };

  // const myCart = () => {
  //   localStorage.getItem("project", cart);
  //   return cart
  // };

  // const removeFromCart = (index) => {
  //   let newCart = [...this.state.cart.slice(0, index), ...this.state.cart.slice(index + 1)];
  //   this.setState({
  //     cart: newCart,
  //   });
  // };

  return (
    <>
      <Container fluid className="topRow">
        <div></div>
      </Container>
      <Container className="">
        <Row>
          {project && (
            <Col xs={8} className="">
              <div className="mt-3 pt-2 detailtopRow px-3 ">
                <div className="d-flex justify-content-between">
                  <h5>{project.summary}</h5>
                </div>
                <Link to={`/users/${project.seller._id}`}>
                  <div className="d-flex py-1 gap-2 summary Box">
                    <Image src={project.seller.picture} height="25" width="25" roundedCircle />
                    <span >{project.seller.firstname}</span>
                    <span >{project.seller.lastname}</span>
                  </div>
                </Link>
                <p className=" py-2 ">{project.skills}</p>
                <p className="  ">{project.Description} </p>


                <div className="d-flex my-2 summary Box">
                  <p className="py-1">{project.location}</p>
                </div>
                <hr className="my-0" />
                <div className="d-flex py-3 summary Box">
                  <Image src="https://via.placeholder.com/50" height="55" rounded alt="files or imagesof projects" />
                </div>
                <hr className="my-0" />
                <div className="py-3 d-flex justify-content-end">{localStorage.getItem("id") === project.seller._id ? "" : <BidModal match={match} history={history} />}</div>
              </div>
              {localStorage.getItem("id") === project.seller._id ? (
                <div className="mt-4 py-3 detailtopRow px-3 ">
                  <h5>People who have offered to work on this project</h5>
                  <hr />
                  {bids &&
                    bids.map((bid) => (
                      <div>
                        <Link to={`/users/${bid.user._id}`}>
                          <div className="d-flex py-1 gap-2 summary Box">
                            <Image src={bid.user.picture} height="40" width="40" roundedCircle />
                            <span >{bid.user.firstname}</span>
                            <span >{bid.user.lastname}</span>
                          </div>
                        </Link>
                        <div className="d-grid py-3 ">
                          <div className="d-grid ">
                            <span className=" pt-1">Message to Employer:</span>
                            <span className=" pt-1">{bid.message}</span>
                          </div>
                          <div className="d-flex  justify-content-between">
                            <div>
                              <span className=" pt-1">€{bid.cost}</span>
                              <span className=" pt-1">{bid.duration}</span>
                            </div>
                            <Button variant="outline-success" onClick={() => history.push(`/checkout/${match.params.projectId}`)}>
                              Choose this Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="mt-4 py-3 detailtopRow px-3 ">
                  <h5>People who have offered to work on this project</h5>
                  <hr />
                  {bids &&
                    bids.map((bid) => (
                      <div>
                        <Link to={`/freelancerProfile/${bid.user._id}`}>
                          <div className="d-flex py-1 summary Box">
                            <Image src={bid.user.picture} height="40" width="40" roundedCircle />
                            <span className="px-2 ">{bid.user.firstname}</span>
                            <span className="d-flex ">{bid.user.lastname}</span>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              )}
            </Col>
          )}
          {/* <Col></Col> */}
          <Col className=" mx-5 mt-3 detailtopRow">
            <Row className=" py-2 pb-5 ">
              <h5>Similar Projects</h5>
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
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="mt-2 py-5 ">
          {/* <Col className=" projectBox">
            <h5>{project.summary}</h5>

            <div className="d-flex py-3 summary Box">
              <Image src="https://via.placeholder.com/50" height="50" roundedCircle />
              <span className="px-2 ">Leo</span>
              <span className="d-flex ">Ilant</span>
            </div>
            <div className=" py-3 ">
              <Image src={project.image} fluid />
            </div>
          </Col> */}

          {/* <Col className=" px-5  d-flex justify-content-center">
            <div>
              <p>About this service</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <li>Lorem ipsum dolor sit amet</li> <li>Lorem ipsum dolor sit amet</li> <li>Lorem ipsum dolor sit amet</li> <li>Lorem ipsum dolor sit amet</li>{" "}
            </div>
          </Col> */}

          {/* <Col className=" d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Text>{project.price}</Card.Text>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Card.Text>
                <div>
                  <Button
                    variant="success"
                    onClick={() => {
                      CheckOut(project);
                    }}
                  >
                    Continue to complete order
                  </Button>
                </div>{" "}
                <div>
                  <Button variant="outline-success">Contact Seller</Button>
                </div>{" "}
              </Card.Body>
            </Card>
          </Col> */}
        </Row>
      </Container>

      {/* <div className="peoplealsoviewed">
        <Container className="mt-3 pt-4 ">
          <h3>People Also Viewed</h3>
          <Row className="mt-4 py-1 pb-5 ">
            <Col xs={3}>
              <div className=" projectBox">
                <div>
                  <Image src="https://via.placeholder.com/290x190" fluid rounded />
                </div>
                <div className="d-flex py-2">
                  <Image src="https://via.placeholder.com/50" roundedCircle />
                  <span className="px-2 ">Name</span>
                  <span className="d-flex ">Surname</span>
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
              <div className=" projectBox">
                <div>
                  <Image src="https://via.placeholder.com/290x190" fluid rounded />
                </div>
                <div className="d-flex py-2">
                  <Image src="https://via.placeholder.com/50" roundedCircle />
                  <span className="px-2 ">Name</span>
                  <span className="d-flex ">Surname</span>
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
              <div className=" projectBox">
                <div>
                  <Image src="https://via.placeholder.com/290x190" fluid rounded />
                </div>
                <div className="d-flex py-2">
                  <Image src="https://via.placeholder.com/50" roundedCircle />
                  <span className="px-2 ">Name</span>
                  <span className="d-flex ">Surname</span>
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
              <div className=" projectBox">
                <div>
                  <Image src="https://via.placeholder.com/290x190" fluid rounded />
                </div>
                <div className="d-flex py-2">
                  <Image src="https://via.placeholder.com/50" roundedCircle />
                  <span className="px-2 ">Name</span>
                  <span className="d-flex ">Surname</span>
                </div>
                <div className="my-2 py-1 summaryBox ">
                  <span>Summary</span>
                </div>
                <div className=" mt-4  ">
                  <span>Price</span>
                </div>
              </div> </Col>
          </Row>
        </Container>
      </div> */}
    </>
  );
};
export default DetailPage;
