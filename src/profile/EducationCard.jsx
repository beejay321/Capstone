import React from "react";
import { Card } from "react-bootstrap";
import "./profilepage.css";
// import EditModal from "./EditModal";
import EditEducation from "./EditEducation";

const EducationCard = (props) => {
  return (
    <>
      <div className=" my-2 py-2 px-1 profileColumn " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          {/* {localStorage.getItem("id") === props.user._id ? <EditModal title={props.title} /> : ""} */}
          <div className=" mx-1 d-flex gap-3 ">
            {localStorage.getItem("id") === props.user._id ? <EditEducation title="Add" user={props.user} /> : ""}
            {localStorage.getItem("id") === props.user._id ? <EditEducation title="Edit" /> : ""}
          </div>
        </div>
        <hr className=" my-2 " />
        {props.education ? (
          <div>
            {props.education &&
              props.education.map((edu) => (
                <div key={edu._id} className=" mx-2 py-2 d-flex justify-content-between ">
                  <div>
                    <Card className="profileCards" style={{ width: "18rem" }}>
                      <Card.Body className="profileCards">
                        <Card.Title>{edu.degree}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{edu.institution}</Card.Subtitle>
                        <Card.Text className="  d-flex gap-2 ">
                          <span>{edu.city}</span>
                          <span>{edu.country}</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="  mt-5 d-flex justify-content-center ">
            <p>No Experience Yet</p>
          </div>
        )}
      </div>
    </>
  );
};
export default EducationCard;
