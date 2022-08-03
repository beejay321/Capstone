import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./profilepage.css";
import Skeleton from "react-loading-skeleton";
import styles from "./profile.module.css";
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
import Message from "../components/Message/Message";
import Reviews from "./Reviews";
// import Messages from "../components/Message/Messages";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

// const MY_APP_API_URL = "http://localhost:3255";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const MyProfile = (props) => {
  const [user, setUser] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProject] = useState([]);
  const [profile, setProfile] = useState("profile");
  const [myBids, setMyBids] = useState([]);
  const [isLoading, setIsLoading] = useState("");

  // const [skills, setSkills] = useState([]);
  // const [showChatList, setShowChatList] = useState(false);
  // const [language, setLanguage] = useState([]);
  // const [selectedRoom, setSelectedRoom] = useState(null);
  // const [roomHistory, setRoomHistory] = useState(null);
  // const [chats, setChats] = useState(null);

  let match = useRouteMatch();

  useEffect(() => {
    setIsLoading(true);

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
          setEducation(data.education);
          setExperience(data.experience);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [match.params.id]);

  return (
    <>
      <NavBar />
      <Container fluid className={styles.topRow}>
        <div></div>
      </Container>
      <div className={styles.profilePage}>
        <Container className="" style={{ minHeight: "100vh" }}>
          <Row className={styles.profileRow}>
            {isLoading ? (
              <>
                {" "}
                <div className={styles.profileDashboard}>
                  <div className={styles.profileOwner}>
                    <div className={styles.profileOwnerImage}>
                      <div className={styles.profileImageDiv}>
                        <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
                      </div>
                    </div>
                    <div className={`d-flex justify-content-center ${styles.title}`}>
                      <h5>
                        <Skeleton width={120} height={18} />
                      </h5>
                    </div>
                    <div className={`d-flex justify-content-center ${styles.text}`}>
                      <Skeleton width={150} height={18} />
                    </div>
                    <div className={`d-flex justify-content-center ${styles.name}`}>
                      {" "}
                      <Skeleton width={100} height={18} />
                    </div>
                  </div>
                  <div className={styles.tabsDiv}>
                    <div className={styles.tabs} onClick={() => setProfile("profile")}>
                      <Skeleton width={180} height={18} />
                    </div>
                    <div className={styles.tabs} onClick={() => setProfile("projects")}>
                      <Skeleton width={180} height={18} />
                    </div>
                    <div className={styles.tabs} onClick={() => setProfile("bids")}>
                      <Skeleton width={180} height={18} />
                    </div>
                    <div className="m-3">
                      <Skeleton width={320} height={400} />
                    </div>
                  </div>
                </div>
                <div className={styles.profileColumn}></div>
              </>
            ) : (
              <>
                <div className={styles.profileDashboard}>
                  <div className={styles.profileOwner}>
                    <div className={styles.profileOwnerImage}>
                      <div className={styles.profileImageDiv}>
                        <Image className={styles.profileImage} src={user.avatar} fluid />
                      </div>
                    </div>
                    <div className={`d-flex justify-content-center ${styles.title}`}>
                      <h5>
                        {user.firstname} {user.lastname}
                      </h5>
                    </div>
                    <div className={`d-flex justify-content-center ${styles.text}`}>
                      <h6>{user.occupation}</h6>
                    </div>
                    <div className={`d-flex justify-content-center ${styles.name}`}>{user.location}</div>
                    <div className={styles.editBtn}>
                      <i className="bi bi-pencil-fill" onClick={() => props.history.push(`/updateProfile/${user._id}`)}></i>
                    </div>
                  </div>
                  {/*                Thetabs                 */}

                  <div className={styles.tabsDiv}>
                    <div className={styles.tabs} onClick={() => setProfile("profile")}>
                      <p className="">Professional Summary</p>
                    </div>
                    <div className={styles.tabs} onClick={() => setProfile("projects")}>
                      <p className="">Projects</p>
                    </div>
                    <div className={styles.tabs} onClick={() => setProfile("bids")}>
                      <p className="">Offers</p>
                    </div>
                  </div>
                  {/*            Reviews               */}
                  <div>
                    <Reviews user={user} />
                  </div>

                  <div className={styles.mapouter}>
                    <div className={styles.gmapCanvas}>
                      <iframe
                        width="370"
                        height="500"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                      ></iframe>
                      <br />
                    </div>
                  </div>
                </div>

                {/* </>
           

            <> */}
                {/* Loaders */}
                {/********************** Profile details *************************/}
                <div className={styles.profileColumn}>
                  {profile === "projects" && <MyProfileCard title="Projects" user={user} content={<MyProjects title="Projects" projects={projects} user={user} />} />}
                  {profile === "bids" && <MyProfileCard title="Projects" user={user} content={<MyBids title="Bids" myBids={myBids} user={user} />} />}
                  {profile === "profile" && (
                    <>
                      <MyProfileCard title="Experience" user={user} content={<ExperienceCard title="Experience" user={user} experience={experience} />} />
                      <hr className="" />
                      <MyProfileCard title="Education" user={user} content={<EducationCard title="Education" user={user} education={education} />} />
                      <hr className="" />
                      <MyProfileCard title="Skills" user={user} content={<SkillsCard title="Skills" user={user} />} />
                      <hr className="" />
                      <MyProfileCard title="Publication" user={user} content={<PublicationCard title="Publication" user={user} />} />
                      <hr className="" />
                      <MyProfileCard title="Certification" content={<CertificationCard title="Certifications" user={user} />} />
                    </>
                  )}
                  {/* {profile === "messages" && <Messages />} */}
                </div>
              </>
            )}
          </Row>

          <Message user={user} history={props.history} />
          <Row></Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default MyProfile;
