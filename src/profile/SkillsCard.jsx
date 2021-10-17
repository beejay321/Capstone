import React from "react";
import "./profilepage.css";
import EditModal from "./EditModal";

const SkillsCard = (props) => {
  return (
    <>
      <div className="  px-1 summaryBox " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          {localStorage.getItem("id") === props.user._id ? <EditModal title={props.title} /> : ""}
        </div>
        <hr className=" my-2 " />
        {props.skills ? (
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
            <p>No Skills Yet</p>
          </div>
        )}
      </div>
    </>
  );
};
export default SkillsCard;
