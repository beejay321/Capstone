import React from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl } from "react-bootstrap";
import DetailPage from "./detailPage";
import MyLoginModal from "./Login";
import "../styles/HomePage.css";

const LandingPage = (routerProps) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
  
      {/* <Card className="bg-dark text-white">
        <Card.Img src="https://res.cloudinary.com/dvyids286/image/upload/v1622151363/Strive/fbuminjbxhiziiulrfrg.jpg" height="800" alt="Card image" />

        <Card.ImgOverlay> */}
      <div id="searchSection">
        <Container id="searchContainer">
          <Row className="py-5 my-5">
            <Col xs={8} md={7}>
              <h1>Find the perfect freelance services for your business</h1>
              <InputGroup className="py-3">
                <FormControl placeholder="What are you looking for?" aria-label="Search" aria-describedby="basic-addon2" />
                <Button variant="secondary" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
              <Row>
                <div className="categoryButtons pt-3">
                  <em>
                    <h4>Popular:</h4>
                  </em>
                  <Button variant="secondary" id="button-addon2">
                    Categories
                  </Button>

                  <Button variant="secondary" id="button-addon2">
                    Categories
                  </Button>

                  <Button variant="secondary" id="button-addon2">
                    Categories
                  </Button>

                  <Button variant="secondary" id="button-addon2">
                    Categories
                  </Button>
                  <Button variant="secondary" id="button-addon2">
                    Categories
                  </Button>
                </div>
              </Row>

              {/* <MyLoginModal show={modalShow} onHide={() => setModalShow(false)} /> */}
            </Col>
          </Row>
        </Container>
      </div>

      <div id="howItWorksSection">
        <Container>
          {/* <Row> */}
          <div className="justify-content-md-center">
            <h1>How It Works</h1>
          </div>
          {/* </Row> */}

          <Row className="py-3 ">
            <Col xs={8} md={4}>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>{" "}
            </Col>
            <Col xs={8} md={4}>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>{" "}
            </Col>
            <Col xs={8} md={4}>
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>{" "}
            </Col>
          </Row>
        </Container>
      </div>
      {/* </Card.ImgOverlay>
      </Card> */}
    </>
  );
};
export default LandingPage;
