import React from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl } from "react-bootstrap";
import DetailPage from "./detailPage";
import MyLoginModal from "./Login";

const LandingPage = (routerProps) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src="https://res.cloudinary.com/dvyids286/image/upload/v1622151363/Strive/fbuminjbxhiziiulrfrg.jpg" height="800" alt="Card image" />

        <Card.ImgOverlay>
          <Container>
            <Col xs={8} md={7}>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Find the perfect freelance services for your business</Card.Text>
              <h1>Find the perfect freelance services for your business</h1>
              <InputGroup className="mb-3">
                <FormControl placeholder="What are you looking for?" aria-label="Search" aria-describedby="basic-addon2" />
                <Button variant="secondary" id="button-addon2">
                  Search
                </Button>
              </InputGroup>
            </Col>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Login{" "}
            </Button>
            <MyLoginModal show={modalShow} onHide={() => setModalShow(false)} />
          </Container>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};
export default LandingPage;
