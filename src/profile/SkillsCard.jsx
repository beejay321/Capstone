import React from "react";
import "./profilepage.css";
import { Row, Col, } from "react-bootstrap";
// import styles from "./profile.module.css";
import Edit from "./Edit";

const SkillsCard = (props) => {
  return (
    <>
      <div className=" my-2 py-2 px-1 profileColumn " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          <div className=" mx-1 d-flex gap-3 ">
            {localStorage.getItem("id") === props.user._id ? <Edit title="Add" /> : ""}
            {localStorage.getItem("id") === props.user._id ? <Edit title="Edit" /> : ""}
          </div>{" "}
        </div>
        <hr className=" my-2 " />
        {/* {props.skills ? (
          <div>
            {props.skills &&
              props.skills.map((skill) => (
                <div key={skill._id}>
                  <p>{skill}</p>
                  <p>Photoshop</p>
                  <p>Adobe Indesign</p>
                </div>
              ))}
          </div>
        ) : (
          <div className="  mt-5 d-flex justify-content-center ">
            <p>Skills added will help clients choose you for their projects </p>
          </div>
        )} */}
        {/* <div className=" d-flex justify-content-center"> */}
        <Row className=" mx-2  skills">
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
        {/* </div> */}
      </div>
    </>
  );
};
export default SkillsCard;
