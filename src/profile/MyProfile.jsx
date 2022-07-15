import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./profilepage.css";
import NavBar from "../components/NavBar";
import MyProfileCard from "./MyProfileCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import PublicationCard from "./PublicationCard";
import SkillsCard from "./SkillsCard";
import CertificationCard from "./Certification";
import MyProjects from "./MyProjects";
import MyBids from "./MyBids";
import Footer from "../components/Footer";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
// import Message from "../components/Message/Message";
import Reviews from "./Reviews";

// const MY_APP_API_URL = "http://localhost:3255";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const MyProfile = (props) => {
  const [user, setUser] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProject] = useState([]);
  // const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);
  const [profile, setProfile] = useState("profile");
  // const [showChatList, setShowChatList] = useState(false);
  const [myBids, setMyBids] = useState([]);
  // const [selectedRoom, setSelectedRoom] = useState(null);
  // const [roomHistory, setRoomHistory] = useState(null);
  // const [chats, setChats] = useState(null);

  let match = useRouteMatch();
  // let history = useHistory;

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await fetch(`${MY_APP_API_URL}/users/${match.params.id}`, {
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
          setMyBids(data.myBids);
          // setSkills(data.skills);
          setLanguage(data.languages);
          setEducation(data.education);
          setExperience(data.experience);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [match.params.id]);

  // const id = localStorage.getItem("id");

  // const getRooms = async () => {
  // const response = await fetch(`${MY_APP_API_URL}/users/${user._id}/chats`, {
  //   method: "GET",
  //   headers: {
  //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //   },
  // });
  // const Chats = await response.json();
  // console.log("chatsNames:", Chats);
  // setChats(Chats);
  // console.log(chats);
  // const chatsNames = Chats.map((item) => {
  //   return {
  //     ...item,
  //     title: item.members.map((item) => {
  //       if (item._id !== id) return item.username;
  //     }),
  //   };
  //   return { ...item, onClick: continueRoom }
  // });
  // console.log("chatsNames:", chatsNames);
  // setChats(chatsNames);

  // setDataSource(Chats);
  // };

  return (
    <>
      <NavBar />
      <Container fluid className="topRow">
        <div></div>
      </Container>
      <div className="py-3 profilePage">
        <Container className="py-3 profilePage" style={{ minHeight: "100vh" }}>
          <Row className="my-0">
            <Col xs={3}></Col>
          </Row>

          <Row className="d-flex gap-1">
            <Col xs={3} className="    ">
              <Row className=" my-3 py-4 profileColumn">
                <div className="d-flex justify-content-end">
                  {localStorage.getItem("id") === user._id ? (
                    <i className="bi bi-pencil-square" onClick={() => props.history.push(`/updateProfile/${user._id}`)} style={{ fontSize: "1.8rem", color: "#2b6777" }}></i>
                  ) : (
                    ""
                  )}
                </div>
                <div className="  pb-2 d-flex justify-content-center">
                  <div className="  profileImageDiv ">
                    <Image className="profileImage" src={user.avatar} fluid />
                  </div>
                </div>
                <div className=" d-flex justify-content-center">
                  <h5>{user.firstname}</h5>
                  <h5 className="px-2">{user.lastname}</h5>
                </div>
                <div className=" d-flex justify-content-center ">
                  <h6>{user.occupation}</h6>
                </div>
                <div className="py-1">
                  <p className="">{user.location}</p>
                </div>

                {language &&
                  language.map((l) => (
                    <div key={l._id} className=" py-1   ">
                      <span className="   ">
                        <strong>Languages</strong>
                      </span>
                      <p className=" py-1  summaryBox ">{user.languages}</p>
                    </div>
                  ))}
                <hr className=" my-1 " />

                <div className=" tabs p-0  " onClick={() => setProfile("profile")}>
                  <p className=" px-3  " onClick={() => setProfile("profile")}>
                    <strong>Professional Summary</strong>
                  </p>
                </div>
                <hr className=" my-1 " />
                <div className=" tabs p-0  ">
                  <p className=" px-3   " onClick={() => setProfile("projects")}>
                    <strong>Projects</strong>
                  </p>
                </div>
                <hr className=" my-1 " />

                <div className=" tabs p-0  ">
                  <p className=" px-3   " onClick={() => setProfile("bids")}>
                    <strong>Bids/Offers</strong>
                  </p>
                </div>
                <hr className=" my-1 " />
              </Row>
              <Reviews user={user} />
            </Col>
            <Col xs={7} className="">
              {profile === "projects" && <MyProfileCard title="Projects" user={user} content={<MyProjects title="Projects" projects={projects} user={user} />} />}
              {profile === "bids" && <MyProfileCard title="Projects" user={user} content={<MyBids title="Bids" myBids={myBids} user={user} />} />}
              {profile === "profile" && (
                <>
                  <MyProfileCard title="Experience" user={user} content={<ExperienceCard title="Experience" user={user} experience={experience} />} />
                  <MyProfileCard title="Education" user={user} content={<EducationCard title="Education" user={user} education={education} />} />
                  <MyProfileCard title="Skills" user={user} content={<SkillsCard title="Skills" user={user} />} />
                  <MyProfileCard title="Publication" user={user} content={<PublicationCard title="Publication" user={user} />} />
                  <MyProfileCard title="Certification" content={<CertificationCard title="Certifications" user={user} />} />
                </>
              )}
            </Col>
            {/* <i className="bi bi-pencil-square" onClick={() => props.history.push(`/updateProfile/${user._id}`)} style={{ fontSize: "1.8rem", color: "#2b6777" }}></i> */}

            {/* <Button className="chatButton" variant="primary" type="submit" onClick={() => props.history.push(`/me/messages`)}>
              Message
            </Button> */}
            {/* <Message user={user} history={props.history} /> */}

            {/* {
              localStorage.getItem("id") !== user._id && (
                <Col xs={3} className="">
                  {showButton && (
                    <Button className="chatButton" variant="primary" type="submit" onClick={showChatBox}>
                      Message
                    </Button>
                  )}
                  <ChatBox
                    selectedRoom={selectedRoom}
                    roomHistory={roomHistory}
                    showChat={showChat}
                    setShowChat={setShowChat}
                    setShowButton={setShowButton}
                    user={user}
                    firstname={user.firstname}
                    lastname={user.lastname}
                  />
                </Col>
              )
            
            } */}

            {/* {localStorage.getItem("id") === user._id ? (
              <ChatLists
                setShowChatList={setShowChatList}
                showChatList={showChatList}
                chats={chats}
                getRooms={getRooms}
                continueRoom={continueRoom}
                selectedRoom={selectedRoom}
                roomHistory={roomHistory}
                showChat={showChat}
                setShowChat={setShowChat}
                user={user}
                firstname={user.firstname}
                lastname={user.lastname}
              />
            ) : (
              ""
            )} */}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default MyProfile;
