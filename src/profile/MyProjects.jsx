import React from "react";
import "./profilepage.css";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

// const MY_APP_API_URL = "http://localhost:3255";

const MyProjects = (props) => {
  return (
    <>
      <div className=" " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          {localStorage.getItem("id") === props.user._id ? (
            <Link to={`/postProject`}>
              <i className="bi bi-plus-lg" style={{ fontSize: "1.5rem", color: "#2b6777",  }}></i>
            </Link>
          ) : (
            ""
          )}
        </div>
        <hr className=" my-2 " />
        {props.projects ? (
          <div>
            {props.projects.map((p, i) => (
              <>
                <Row className="px-2" key={i}>
                  <Col xs={12}>
                    <Link className="projectLink" to={`/details/${p._id}`}>
                      <Row className="px-2 py-1">
                        <Col xs={4} className="py-2">
                          <span>{p.title}</span>
                        </Col>
                        <Col xs={5} className="py-2">
                          <span>{p.location}</span>
                        </Col>
                        <Col xs={3} className="py-2">
                          <span>{p.category}</span>
                        </Col>
                      </Row>
                    </Link>
                  </Col>
                </Row>
              </>
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
