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
import ChatBox from "../components/chatBox";

const FreelancerProfile = (props) => {
  const [loggedInUser, setLoggedInUser] = useState("6128d7f565384b4ca09f9406");
  const [user, setUser] = useState("");
  const [showChat, setShowChat] = useState(false);
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
        // let response = await fetch(`http://localhost:3255/users/${props.match.params.projectId}`, {
        let response = await fetch(`http://localhost:3255/users/6128d2ae65384b4ca09f9404`, {
          method: "GET",
          // headers: {
          //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          // },
        });
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setUser(data);
          console.log(user);
          setSkills(data.skills);
          setLanguage(data.languages);
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
      <Container className="py-3" style={{ minHeight: "100vh" }}>
        {/* <h2>My Profile </h2> */}

        <Row className="">
          <Col xs={3} className="    ">
            <Row className=" my-3 py-4 profileColumn">
              <div className=" pb-2 d-flex justify-content-center">
                <Image src={user.picture} fluid roundedCircle />
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

              {/* {language.map((l) => ( */}
              <div className=" py-1   ">
                <span className="   ">
                  <strong>Language</strong>
                </span>
                <p className=" py-1  summaryBox ">{user.languages}</p>
              </div>
              {/* ))} */}
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
                <Button variant="primary" type="submit" onClick={() => setShowChat(true)}>
                  Message
                </Button>
              </div>
            </Row>

            <Row className="  profileColumn">
              <MyProfileCard content={<SkillsCard title="Skills" user={user} loggedInUser={loggedInUser} />} />
            </Row>
            <Row className=" my-3 profileColumn">
              <MyProfileCard title="Cert" content={<CertificationCard title="Cert" loggedInUser={loggedInUser} user={user} />} />
            </Row>
          </Col>
          <Col xs={6} className="">
            {client && <MyProfileCard title="Projects" user={user} content={<MyProjects title="Projects" user={user} />} />}
            <div className="my-3 py-2 px-1 summaryBox " style={{ minHeight: "15rem" }}>
              <div className="mx-2 ">
                <h4>Reviews</h4>
              </div>{" "}
              <hr className=" my-2 " />
              <div className="  mt-5 d-flex justify-content-center ">
                <p>No Reviews Yet</p>
              </div>
            </div>
            <MyProfileCard title="Experience" user={user} content={<ExperienceCard title="Experience" loggedInUser={loggedInUser} user={user} />} />
            <MyProfileCard title="Education" user={user} content={<EducationCard title="Education" loggedInUser={loggedInUser} user={user} />} />
            <MyProfileCard title="Publication" user={user} content={<PublicationCard title="Publication" loggedInUser={loggedInUser} user={user} />} />
          </Col>
          <Col xs={3} className="">
            <ChatBox show={showChat} setShowChat={setShowChat} firstname={user.firstname} lastname={user.lastname} />
          </Col>
          {/* <ChatBox show={true} /> */}
        </Row>
      </Container>
    </>
  );
};
export default FreelancerProfile;
