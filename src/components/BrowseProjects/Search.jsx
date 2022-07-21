import React from "react";
import { Container, Row, Button, Col, InputGroup, FormControl } from "react-bootstrap";
import styles from "./dashboard.module.css";

function Search(props) {
  //   const [query, setQuery] = useState("");
  // const [category, setCategory] = useState("");
  //   const [projects, setProjects] = useState([]);

  return (
    <div id={styles.searchDiv}>
      <Container className="">
        {/* <Row> */}
        <Col className={styles.searchContainer}>
          <InputGroup className={styles.searchInput}>
            <FormControl value={props.query} onChange={(e) => props.setQuery(e.target.value)} placeholder="What are your searching for ?" aria-label="Search" aria-describedby="basic-addon2" />
          </InputGroup>

          <Button id="button-addon2" variant="outline" className={styles.searchButton} onClick={props.searchProjects}>
            Search
          </Button>
        </Col>
        {/* </Row> */}
      </Container>
    </div>
  );
}

export default Search;
