import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "./profilepage.css";
import NavBar from "../components/NavBar";
import MyProfileCard from "./myProfileCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import PublicationCard from "./PublicationCard";
import SkillsCard from "./SkillsCard";
import CertificationCard from "./Certification";
import MyProjects from "./MyProjects";
import MyBids from "./MyBids";
// import ChatLists from "../components/chatLists";
// import ChatBox from "../components/chatBox";
import Footer from "../components/Footer";

// const ADDRESS = "http://localhost:3255";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const MyProfile = (props) => {
  const [user, setUser] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProject] = useState([]);
  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);
  const [client, setClient] = useState(false);
  // const [freelancer, setFreelancer] = useState(false);
  // const [showChatList, setShowChatList] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [roomHistory, setRoomHistory] = useState(null);
  // const [chats, setChats] = useState(null);
  const [myBids, setMyBids] = useState(null);

  // ${match.params.projectId}

  useEffect(() => {
    const getProfile = async () => {
      try {
        let response = await fetch(`${MY_APP_API_URL}/users/${props.match.params.id}`, {
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
          setSkills(data.skills);
          setLanguage(data.languages);
          setEducation(data.education);
          setExperience(data.experience);
        }
      } catch (error) {
        console.log(error);
        console.log(selectedRoom);
        console.log(showChat);
        console.log(roomHistory);
      }
    };
    getProfile();
  }, []);

  const id = localStorage.getItem("id");

  const createRoom = async (user) => {
    console.log("user");
    const response = await fetch(`${MY_APP_API_URL}/room/user/${props.match.params.id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (response.ok) {
      const room = await response.json();
      console.log("room:", room);
      if (room._id) {
        console.log("id:", id);

        setSelectedRoom(room);
        setRoomHistory(room.chatHistory);
      }
    }
  };

  // const continueRoom = async (room) => {
  //   setSelectedRoom(room);
  //   setRoomHistory([]);
  //   console.log("room:", room);
  //   const response = await fetch(`${MY_APP_API_URL}/room/history/${selectedRoom.id}`);
  //   const { chatHistory } = await response.json();
  //   setRoomHistory(chatHistory);
  // };

  const showChatBox = () => {
    setShowButton(false);
    setShowChat(true);
    createRoom();
  };

  // const getRooms = async () => {
  //   const response = await fetch(`${MY_APP_API_URL}/users/me/chats`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   });
  //   const Chats = await response.json();
  //   console.log("chatsNames:", Chats);
  // setChats(Chats);
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

  // const editExperience = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:3255/users/me/education`, {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //       body: JSON.stringify(education),
  //     });

  //     if (response.ok) {
  //       console.log(response);
  //       props.history.push("/myProjects");
  //     } else {
  //       alert(" not successful");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <NavBar />
      <div className="py-3 profilePage">
        <Container className="py-3 profilePage" style={{ minHeight: "100vh" }}>
          {/* <h2>My Profile </h2> */}
          <Row className="my-0">
            <Col xs={3}>
              <Row>
                <div className="d-flex ">
                  <Button variant="outline-secondary" type="submit" onClick={() => setClient(false)}>
                    As Freelancer
                  </Button>
                  <Button variant="outline-secondary" type="submit" onClick={() => setClient(true)}>
                    As Client
                  </Button>
                </div>
              </Row>
            </Col>
          </Row>

          <Row className="d-flex gap-1">
            <Col xs={3} className="    ">
              <Row className=" my-3 py-4 profileColumn">
                <div className="  pb-2 d-flex justify-content-center">
                  <div className="  profileImageDiv ">
                    <Image className="profileImage" src={user.picture} fluid />
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
                <div className=" py-1   ">
                  <div className="  d-flex justify-content-between ">
                    <span className="   ">
                      {" "}
                      <strong>Open Projects</strong>{" "}
                    </span>
                    <p className="  px-1  ">2</p>
                  </div>
                  <div className="  d-flex justify-content-between">
                    <span className="   ">
                      {" "}
                      <strong>Finished Projects</strong>
                    </span>
                    <p className="px-1">2</p>
                  </div>
                  <div className="d-flex justify-content-between ">
                    <span className="   ">
                      {" "}
                      <strong>All Projects</strong>
                    </span>
                    <p className="px-1">2</p>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  {localStorage.getItem("id") === user._id ? (
                    <Button className="editButton" variant="primary" type="submit" onClick={() => props.history.push("/updateProfile/613109f216858d24880aaa2a")}>
                      Edit Profile
                    </Button>
                  ) : (
                    ""
                    // <Button className="editButton" variant="primary" type="submit" onClick={showChatBox}>
                    //   Message
                    // </Button>
                  )}
                </div>
              </Row>

              <Row className="  profileColumn">
                <MyProfileCard title="Skills" content={<SkillsCard title="Skills" skills={skills} user={user} />} />
              </Row>
              <Row className=" my-3 profileColumn">
                <MyProfileCard title="Cert" content={<CertificationCard title="Cert" user={user} />} />
              </Row>
              <div className=" d-flex justify-content-center">
                {localStorage.getItem("id") === user._id ? (
                  <Button className="editButton" variant="primary" type="submit" onClick={() => props.history.push("/updateProfile/613109f216858d24880aaa2a")}>
                    Edit Profile
                  </Button>
                ) : (
                  ""
                  // <Button className="editButton" variant="primary" type="submit" onClick={showChatBox}>
                  //   Message
                  // </Button>
                )}
              </div>
            </Col>
            <Col xs={7} className="">
              {client ? (
                <MyProfileCard title="Projects" user={user} content={<MyProjects title="Projects" projects={projects} user={user} />} />
              ) : (
                <MyProfileCard title="Projects" user={user} content={<MyBids title="Bids" myBids={myBids} user={user} />} />
              )}

              <MyProfileCard title="Experience" user={user} content={<ExperienceCard title="Experience" user={user} experience={experience} />} />
              <MyProfileCard title="Education" user={user} content={<EducationCard title="Education" user={user} education={education} />} />
              <MyProfileCard title="Publication" user={user} content={<PublicationCard title="Publication" user={user} />} />
              <div className="my-3 py-2 px-1 profileColumn " style={{ minHeight: "15rem" }}>
                <div className="mx-2 ">
                  <h4>Reviews</h4>
                </div>{" "}
                <hr className=" my-2 " />
                <div className="    mt-5 d-flex justify-content-center ">
                  <p>No Reviews Yet</p>
                </div>
              </div>
            </Col>
            <Col xs={3} className="">
              {showButton && (
                <Button className="chatButton" variant="primary" type="submit" onClick={showChatBox}>
                  Message
                </Button>
              )}
              {/* <ChatBox
                selectedRoom={selectedRoom}
                roomHistory={roomHistory}
                showChat={showChat}
                setShowChat={setShowChat}
                setShowButton={setShowButton}
                user={user}
                firstname={user.firstname}
                lastname={user.lastname}
              /> */}
            </Col>
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
