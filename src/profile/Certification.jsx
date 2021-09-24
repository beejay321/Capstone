import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./profilepage.css";
import EditModal from "./EditModal";

const CertificationCard = (props) => {
  const [user, setUser] = useState("");
  const [education, setEducation] = useState("");
  const [projects, setProject] = useState([]);
  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);

  const editExperience = async () => {
    try {
      const response = await fetch(`http://localhost:3255/users/me/experience`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(education),
      });

      if (response.ok) {
        console.log(response);
        props.history.push("/myProjects");
      } else {
        alert(" not successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="  px-1 summaryBox " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          {!props.loggedInUser && <EditModal title={props.title} />}
        </div>
        <hr className=" my-2 " />
        <div className="  mt-5 d-flex justify-content-center ">
          <p>No Certifications Yet</p>
        </div>
      </div>
    </>
  );
};
export default CertificationCard;
