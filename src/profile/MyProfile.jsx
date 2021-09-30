import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Image, Card, ButtonGroup, ToggleButton } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import "./profilepage.css";
import MyProfileCard from "./myProfileCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import PublicationCard from "./PublicationCard";
import SkillsCard from "./SkillsCard";
import CertificationCard from "./Certification";
import MyProjects from "./MyProjects";

const MyProfile = (props) => {
  const [user, setUser] = useState("");
  const [education, setEducation] = useState("");
  const [projects, setProject] = useState([]);
  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);
  const [client, setClient] = useState(false);
  const [freelancer, setFreelancer] = useState(false);

  // ${match.params.projectId}

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
          console.log(data.projects);
          setProject(data.projects);
          setSkills(data.skills);
          setLanguage(data.languages);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, []);

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
      <Container className="py-3" style={{ minHeight: "100vh" }}>
        {/* <h2>My Profile </h2> */}
        <Row className="my-0">
          <Col xs={3}>
            <Row>
              <div className="d-flex ">
                <Button variant="outline-secondary" type="submit" onClick={() => setClient(true)}>
                  As Client
                </Button>
                <Button variant="outline-secondary" type="submit" onClick={() => setClient(false)}>
                  As Freelancer
                </Button>
              </div>
            </Row>
          </Col>
        </Row>

        <Row className="">
          <Col xs={3} className="    ">
            <Row className=" my-3 py-4 profileColumn">
             <div className="  pb-2 d-flex justify-content-center" >
                <div className="  profileImageDiv ">
                  <Image className="profileImage" src={user.picture}  fluid  />
                 
                </div>
             </div>
              <div className=" d-flex justify-content-center">
                <h5>{user.firstname}</h5>
                <h5 className="px-2">{user.lastname}</h5>
              </div>
              <div className=" d-flex justify-content-center ">
                <h6>{user.headline}</h6>
              </div>
              <div className="py-1">
                <p className="">{user.location}</p>
              </div>

              {language && language.map((l) => (
              <div className=" py-1   ">
                <span className="   ">
                  <strong>Languages</strong>
                </span>
                <p className=" py-1  summaryBox ">{user.languages}</p>
              </div>
               ))}
              <hr className=" my-1 " />
              <div className=" py-1   ">
                <div className="  d-flex justify-content-between ">
                  <span className="   ">
                    {" "}
                    <strong>Open Projects</strong>{" "}
                  </span>
                  <p className="  px-1  ">2</p>
                </div>
                <div className="  d-flex justify-content-between ">
                  <span className="   ">
                    {" "}
                    <strong>Finished Projects</strong>
                  </span>
                  <p className="  px-1  ">2</p>
                </div>
                <div className="  d-flex justify-content-between ">
                  <span className="   ">
                    {" "}
                    <strong>All Projects</strong>
                  </span>
                  <p className="  px-1  ">2</p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <Button variant="primary" type="submit" onClick={() => props.history.push("/updateProfile/613109f216858d24880aaa2a")}>
                  Edit Profile
                </Button>
              </div>
            </Row>

            <Row className="  profileColumn">
              <MyProfileCard title="Skills" content={<SkillsCard title="Skills" skills = {skills} user={user} />} />
            </Row>
            <Row className=" my-3 profileColumn">
              <MyProfileCard title="Cert" content={<CertificationCard title="Cert" user={user} />} />
            </Row>
          </Col>
          <Col xs={7} className="mx-5">
            {client && <MyProfileCard title="Projects" user={user} content={<MyProjects title="Projects" projects={projects} user={user} />} />}
            <div className="my-3 py-2 px-1 summaryBox " style={{ minHeight: "15rem" }}>
              <div className="mx-2 ">
                <h4>Reviews</h4>
              </div>{" "}
              <hr className=" my-2 " />
              <div className="  mt-5 d-flex justify-content-center ">
                <p>No Reviews Yet</p>
              </div>
            </div>
            <MyProfileCard title="Experience" user={user} content={<ExperienceCard title="Experience" user={user} />} />
            <MyProfileCard title="Education" user={user} content={<EducationCard title="Education" user={user} />} />
            <MyProfileCard title="Publication" user={user} content={<PublicationCard title="Publication" user={user} />} />
          </Col>
          {/* <Col xs={7}>
            <div className=" mb-4 mt-3 projectTitle">
              <h2 className=" pt-2 px-3 projectText">My Projects </h2>
            </div>
            <Row className="mt-5 py-1 ">
              {projects.map((p) => (
                <Col xs={4}>
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
          </Col> */}
        </Row>
      </Container>
    </>
  );
};
export default MyProfile;
