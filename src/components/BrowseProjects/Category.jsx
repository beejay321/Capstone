import React  from "react";
import { Container, Row, Button} from "react-bootstrap";

function Category(props) {
  return (
    <div className="categoryButtonsDiv ">
      <Container>
        <Row xs={8} md={7}>
          <div className="categoryButtonsDiv py-2">
            <Button
              className="categoryButtons "
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Design");
              }}
            >
              Art & Design
            </Button>
            <Button
              className="categoryButtons "
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Education");
              }}
            >
              Education
            </Button>
            <Button
              className="categoryButtons "
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Beauty");
              }}
            >
              Beauty & Lifestyle
            </Button>
            <Button
              className="categoryButtons "
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Catering");
              }}
            >
              Catering{" "}
            </Button>
            <Button
              className="categoryButtons "
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Entertainment");
              }}
            >
              Entertainment
            </Button>
            <Button
              className="categoryButtons "
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Business");
              }}
            >
              Business
            </Button>
            <Button
              className="categoryButtons "
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Programming");
              }}
            >
              Programming
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default Category;
