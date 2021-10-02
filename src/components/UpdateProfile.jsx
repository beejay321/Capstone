import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const UpdateProfile = (props) => {
  const [showProfile, setShowProfile] = useState(false);
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
      const response = await fetch(`http://localhost:3255/users/me/updateProfile`, {
        method: "POST",
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
      <div>
        <Container className=" py-5">
          <h2>Update Profile</h2>

          <Row md={6} className=" py-2">
            <span>Upload Picture</span>
            <Image src="https://via.placeholder.com/20" roundedCircle />
          </Row>

          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control required value={name} onChange={(e) => setFirstname(e.target.value)} type="text" placeholder="Firstname" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required value={lastname} onChange={(e) => setLastname(e.target.value)} type="text" placeholder="LastName" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Description</Form.Label>
              <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Talk about yourself" as="textarea" style={{ height: "100px" }} />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Languages</Form.Label>
                <Form.Control value={language} onChange={(e) => setLanguage(e.target.value)} type="text" placeholder="Select Language" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Level</Form.Label>
                <Form.Control type="lastName" placeholder="Select Level" />
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
            </Row>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Occupation</Form.Label>
              <Form.Control value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder=" " type="text" />
            </Form.Group>

            <Row className="">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Skills</Form.Label>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Add Skill" value={skill} onChange={(e) => setSkills(e.target.value)} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="lastName" placeholder="Experience Level" />
              </Form.Group>
            </Row>

            <div className="d-flex justify-content-between align-items-center">
              {/* <Link to="/myProfile"> */}
              <Button variant="success" type="submit" onClick={updateProfile}
               disabled = {name.length < 0 && lastname.length < 0 ? true : false}
>
                Save
              </Button>
              {/* </Link> */}
              <Link to="/users/me">
                <Button variant="success" type="submit">
                  Back To Profile
                </Button>
              </Link>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};
export default UpdateProfile;

// "d-flex justify-content-center align-items-center"
//   style={{ minHeight: "100vh" }}
