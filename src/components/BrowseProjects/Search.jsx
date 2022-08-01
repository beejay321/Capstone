import React from "react";
import { Container, Row } from "react-bootstrap";
import styles from "./dashboard.module.css";

function Search(props) {
  return (
    <>
      <div className={styles.searchDiv}>
        <Container className={styles.searchContainer}>
          <Row className={styles.searchInputDiv}>
            <input
              className={styles.searchInput}
              value={props.query}
              onChange={(e) => props.setQuery(e.target.value)}
              placeholder="What are your searching for?"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className={styles.searchButton} onClick={props.searchProjects}>
              Search
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Search;
