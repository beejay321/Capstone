import React from "react";
// import "./dashboard.css";
import { Link } from "react-router-dom";
import EditModal from "./EditModal";

const MyProjects = (props) => {
 

  return (
    <>
      <div className=" my-2 py-2 px-1 profileColumn " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          <EditModal title={props.title} />
        </div>
        <hr className=" my-2 " />
        {props.projects ? (
          <div>
            {props.projects.map((p) => (
              <div className=" mx-2 d-flex justify-content-between ">
                  <div className="py-1  my-1  ">
                <Link className="projectLink" to={`/details/${p._id}`}>
                    <span>{p.title}</span>
                </Link>
                  </div>
                <div className="py-1  my-1  ">
                  <span>{p.summary} </span>
                </div>
                <div className=" py-1  my-1  ">
                  <span>Germany</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="  mt-5 d-flex justify-content-center ">
            <p>No Projects Yet</p>
          </div>
        )}
      </div>
    </>
  );
};
export default MyProjects;
