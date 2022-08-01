import React from "react";
import "./profilepage.css";
import { Row, Col } from "react-bootstrap";
import Edit from "./Edit";
import styles from "./profile.module.css";

const SkillsCard = (props) => {
  return (
    <>
      <div className="p-3  " style={{ minHeight: "15rem" }}>
        <div className={`mx-2 d-flex justify-content-between ${styles.reviewTitle}`}>
          <h4>{props.title}</h4>
          <div className=" mx-1 d-flex gap-3 ">
            {localStorage.getItem("id") === props.user._id ? <Edit title="Add" /> : ""}
            {localStorage.getItem("id") === props.user._id ? <Edit title="Edit" /> : ""}
          </div>{" "}
        </div>

        <Row className={styles.skills}>
          <Col xs={2}>JavaScript</Col>
          <Col xs={2}>CSS</Col>
          <Col xs={2}>React</Col>
          <Col xs={2}>Ruby</Col>
          <Col xs={2}>Photoshop</Col>
          <Col xs={2}>Indesign</Col>
          <Col xs={2}>Node</Col>
          <Col xs={2}>JavaScript</Col>
          <Col xs={2}>CSS</Col>
          <Col xs={2}>React</Col>
          <Col xs={2}>Ruby</Col>
          <Col xs={2}>Photoshop</Col>
          <Col xs={2}>Indesign</Col>
          <Col xs={2}>Node</Col>
        </Row>
      </div>
    </>
  );
};
export default SkillsCard;
