import React, { useState, useEffect } from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
// import "./dashboard.css";
import { Link } from "react-router-dom";
import EditModal from "./EditModal";

const MyProjects = (props) => {
  const [user, setUser] = useState("");
  const [client, setClient] = useState(false);
  const [freelancer, setFreelancer] = useState(false);
  const [projects, setProject] = useState([]);

  // ${match.params.projectId}

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await fetch(`http://localhost:3255/users/6128d7f565384b4ca09f9406`, {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setUser(data);
          console.log(user);
          setProject(data.projects);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

  return (
    <>
      <div className=" my-2 py-2 px-1 summaryBox " style={{ minHeight: "15rem" }}>
        <div className=" mx-2 d-flex justify-content-between ">
          <h4>{props.title}</h4>
          <EditModal title={props.title} />
        </div>
        <hr className=" my-2 " />
        <div>
          {/* <div className="  mt-5 d-flex justify-content-center ">
            <p>No Projects Yet</p>
          </div> */}
          {props.projects &&
            props.projects.map((p) => {
              // <Link to={`/details/${p._id}`}>
              <Link to={`/details/614daaf05a7f4f615c11f748`}>
                <div className=" mx-2 d-flex justify-content-between ">
                  <div className="py-1  my-1 summaryBox ">
                    <span>{p.title}</span>
                  </div>
                  <div className="py-1  my-1  ">
                    <span>{p.summary} </span>
                  </div>
                  <div className=" py-1  my-1  ">
                    <span>Germany</span>
                  </div>
                  {/* <div className=" py-1  my-1  ">
                  <Button></Button>
                </div> */}
                </div>{" "}
                ;
              </Link>;
            })}

          <Link to={`/details/614daa143b03bf280c66cef1`}>
            <div className=" mx-2 d-flex justify-content-between ">
              <div className="py-1  my-1 summaryBox ">
                <span>Logo Design</span>
              </div>
              <div className="py-1  my-1  d-flex justify-content-start ">
                <span>A logo for my business</span>
              </div>
              <div className=" mt-1  ">
                <span>Italy</span>
              </div>
              <div className=" py-1  my-1  ">
                <Button></Button>
              </div>
            </div>
          </Link>
          {/* {projects.map((p) => (
            // <Col xs={3}>
            <div className=" projectBox">
              <Link to={`/details/${p._id}`}>
                <div>
                  <Image src={p.image} rounded fluid />
                </div>
              </Link>

              <div className="py-1  my-2 summaryBox ">
                <span>Web Design</span>
              </div>
              <div className=" mt-4  ">
                <span>€{p.price}</span>
              </div>
            </div>
            // </Col>
          ))} */}
        </div>
      </div>
      {/* <Container className="py-3" style={{ minHeight: "100vh" }}>
        <Col>
          <div className=" mb-4 mt-3 projectTitle">
            <h2 className=" pt-2 px-3 projectText">My Projects </h2>
          </div>
          <Row className="mt-5 py-1 ">
            {projects.map((p) => (
              <Col xs={3}>
                <div className=" projectBox">
                  <Link to={`/details/${p._id}`}>
                    <div>
                      <Image src={p.image} rounded fluid />
                    </div>
                  </Link>

                  <div className="py-1  my-2 summaryBox ">
                    <span>{p.summary}</span>
                  </div>
                  <div className=" mt-4  ">
                    <span>€{p.price}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Container> */}
    </>
  );
};
export default MyProjects;
