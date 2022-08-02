import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import styles from "./dashboard.module.css";

function AllProjects(props) {
  return (
    <div className={styles.projectDiv}>
      <Container className="">
        <Row className="pt-5">
          {props.projects &&
            props.projects.reverse().map((p) => (
              // <>
              <ProjectCard p={p} key={p._id} />
              // </>
            ))}
        </Row>
      </Container>
    </div>
  );
}

export default AllProjects;
