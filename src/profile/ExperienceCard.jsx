import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./profilepage.css";
import EditModal from "./EditModal";

const ExperienceCard = (props) => {
  const [user, setUser] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await fetch(`http://localhost:3255/users/me`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  const editExperience = async () => {
    try {
      const response = await fetch(`http://localhost:3255/users/me/experience`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
        console.log(response);
        // props.history.push("/myProjects");
      } else {
        alert(" not successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" my-2 py-2 px-1 summaryBox " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          {localStorage.getItem("id") === props.user._id ? <EditModal title={props.title} /> : ""}
        </div>
        <hr className=" my-2 " />
        <div>
          {/* {user.experience.map((exp) => ( */}
          <Card className="profileCards" style={{ width: "18rem" }}>
            <Card.Body>
              {/* <Card.Title>{exp.position}</Card.Title> */}
              {/* <Card.Subtitle className="mb-2 text-muted">{exp.company}</Card.Subtitle> */}
              <Card.Title>Architect</Card.Title>
              <Card.Subtitle className=" text-muted">GUH Architects</Card.Subtitle>
              <Card.Text>{/* {exp.city},{exp.country} */}</Card.Text>
              <Card.Text>Sydney, Australia</Card.Text>
            </Card.Body>
          </Card>
          {/* ))} */}
        </div>
      </div>
    </>
  );
};
export default ExperienceCard;
