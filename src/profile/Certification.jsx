import React from "react";
import "./profilepage.css";
import EditModal from "./EditExperience";

const CertificationCard = (props) => {
  

  return (
    <>
      <div className=" my-2 py-2 px-1 profileColumn " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          <div className=" mx-1 d-flex gap-2 ">
            {localStorage.getItem("id") === props.user._id ? <EditModal title="Add" /> : ""}
            {localStorage.getItem("id") === props.user._id ? <EditModal title="Edit" /> : ""}
          </div>        </div>
        <hr className=" my-2 " />
        <div className="  mt-5 d-flex justify-content-center ">
          <p>No Certifications Yet</p>
        </div>
      </div>
    </>
  );
};
export default CertificationCard;
