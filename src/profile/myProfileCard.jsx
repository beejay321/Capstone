import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./profilepage.css";

const MyProfileCard = (props) => {
  const [user, setUser] = useState("");
  const [education, setEducation] = useState("");
  const [projects, setProject] = useState([]);
  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);

  // ${match.params.projectId}

  const editExperience = async () => {
    try {
      const response = await fetch(`http://localhost:3255/users/me/education`, {
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
      <div className=" my-3  px-1 summaryBox " style={{ minHeight: "15rem" }}>
        {props.content}
        {/* <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          <Button variant="primary" type="submit">
            Add {props.title}
          </Button>
        </div>
        <hr className=" my-2 " />
        <div>
        
          
        </div> */}
      </div>
    </>
  );
};
export default MyProfileCard;