import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col, InputGroup, FormControl, Image, Spinner } from "react-bootstrap";

function Search(props) {
//   const [query, setQuery] = useState("");
  // const [category, setCategory] = useState("");
//   const [projects, setProjects] = useState([]);

  return (
    <div id="searchDiv">
      <Container className="mt-3 mb-0">
        <Row>
          <Col className="d-flex justify-content-between mb-0 gap-2 ">
            <InputGroup className="searchInput">
              <FormControl value={props.query} onChange={(e) => props.setQuery(e.target.value)} placeholder="What are your searching for ?" aria-label="Search" aria-describedby="basic-addon2" />
            </InputGroup>

            <Button id="button-addon2" variant="outline" className="searchButton " onClick={props.searchProjects}>
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
