import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

function AllProjects(props) {
  return (
    <Container className=" mb-3">
      <Row className="projectDiv pt-5">
        {props.projects &&
          props.projects.map((p) => (
            // <>
            <ProjectCard p={p} key={p._id} />
            // </>
          ))}
      </Row>
    </Container>
  );
}

export default AllProjects;
