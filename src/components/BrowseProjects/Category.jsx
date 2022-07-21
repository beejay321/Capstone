import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import styles from "./dashboard.module.css";

function Category(props) {
  return (
    <div className={styles.categoryButtonsDiv}>
      <Container>
        <Row xs={8} md={7}>
          <div className=" ">
            <Button
              className={styles.categoryButtons}
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Design");
              }}
            >
              Art & Design
            </Button>
            <Button
              className={styles.categoryButtons}
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Education");
              }}
            >
              Education
            </Button>
            <Button
              className={styles.categoryButtons}
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Beauty");
              }}
            >
              Beauty & Lifestyle
            </Button>
            <Button
              className={styles.categoryButtons}
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Catering");
              }}
            >
              Catering{" "}
            </Button>
            <Button
              className={styles.categoryButtons}
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Entertainment");
              }}
            >
              Entertainment
            </Button>
            <Button
              className={styles.categoryButtons}
              variant="light"
              id="button-addon2"
              onClick={() => {
                props.searchCategory("Business");
              }}
            >
              Business
            </Button>
            <Button
              className={styles.categoryButtons}
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
