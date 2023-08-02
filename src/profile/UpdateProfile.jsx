import React, { useState } from "react";
import { Form, Container, Row, Col, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "./profile.module.css";
import { useRouteMatch } from "react-router-dom";
//const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";
const MY_APP_API_URL = "https://clientconnect-b57f56bb1351.herokuapp.com";


const UpdateProfile = (props) => {
  let match = useRouteMatch();
  // const [showProfile, setShowProfile] = useState(false);
  const [name, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState([]);
  const [occupation, setOccupation] = useState("");
  const [skill, setSkills] = useState([]);

  const updateProfile = async () => {
    try {
      const profile = {
        firstname: name,
        lastname: lastname,
        bio: description,
        languages: language,
        occupation: occupation,
        skills: skill,
      };
      const response = await fetch(`${MY_APP_API_URL}/users/${match.params.id}/updateProfile`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        console.log(response);
        alert("update  successful");
        // props.history.push("/users/me");
      } else {
        alert("update not successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.topRow}></div>

      <div>
        <Container className=" my-4">
          <Row>
            <Col xs={2}></Col>
            <Col xs={8}>
              <h2>Update Profile</h2>
              <div className=" py-3">
                <p>Upload Picture *</p>
                <Image src="https://via.placeholder.com/50" height="200" roundedCircle />
              </div>
              <Form>
                <div className={styles.formRow}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control className={styles.formWindow} required value={name} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Firstname" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control className={styles.formWindow} required value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="LastName" />
                  </Form.Group>
                </div>
                <div>
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      className={styles.formWindow}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Talk about yourself"
                      as="textarea"
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </div>
                <div className={styles.formRow}>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Languages</Form.Label>
                    <Form.Control className={styles.formWindow} value={language} onChange={(e) => setLanguage(e.target.value)} type="text" placeholder="Select Language" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Level</Form.Label>
                    <Form.Control className={styles.formWindow} type="text" placeholder="Select Level" />
                  </Form.Group>

                  {/* <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                  <option value="0">Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  </Form.Select>
                </Form.Group> */}
                </div>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control className={styles.formWindow} value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder=" " type="text" />
                </Form.Group>

                <Row className="">
                  <Form.Group as={Col} controlId="formGridEmail"></Form.Group>
                </Row>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Skills</Form.Label>
                    <Form.Control className={styles.formWindow} type="text" placeholder="Add Skill" value={skill} onChange={(e) => setSkills(e.target.value)} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Level</Form.Label>
                    <Form.Control className={styles.formWindow} type="lastName" placeholder="Experience Level" />
                  </Form.Group>
                </Row>
              </Form>

              <div className="d-flex justify-content-between align-items-center">
                {/* <Link to="/myProfile"> */}
                <Button variant="success" type="submit" onClick={updateProfile} disabled={name.length < 0 && lastname.length < 0 ? true : false}>
                  Save
                </Button>
                {/* </Link> */}
                <Link to={`/users/${localStorage.getItem("id")}`}>
                  <Button variant="success" type="submit">
                    Back To Profile
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default UpdateProfile;

// "d-flex justify-content-center align-items-center"
//   style={{ minHeight: "100vh" }}


