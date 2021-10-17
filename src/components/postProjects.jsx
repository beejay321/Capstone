import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/postProject.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

const ADDRESS = "http://localhost:3255";

const PostProject = ({ history }) => {
  const [seller] = useState(localStorage.getItem("id"));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState([]);

  const postProject = async (e) => {
    e.preventDefault();
    try {
      const service = {
        seller: seller,
        title: title,
        summary: summary,
        category: category,
        location: location,
        Description: description,
      };
      const response = await fetch(`${ADDRESS}/projects`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(service),
      });
      console.log(response);
      if (response.ok) {
        console.log("Here");

        if (file !== undefined) {
          console.log("file");
        }

        //   //   // const data = await response.json();
        //   //   // const id = data._id;
        //   //   // let newResponse = await fetch(`${ADDRESS}/projects/${id}/uploadFile`, {
        //   //   //   method: "POST",
        //   //   //   body: file,
        //   //   // });

        //   //   // if (newResponse.ok) {
        //   //   //   alert("Sucessfully posted");
        //   //   // }
        //   // } else {
        //   //   console.log("File was not uploaded!");
        //   // }

        alert("Sucessfully posted");
        //   console.log("Sucessfully posted");
        history.push("/dashboard");

        // } else {
        //   console.log("project not created!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const selectImage = (e) => {
    e.preventDefault();
    const data = e.target.files[0];
    let formData = new FormData();
    formData.append("file", data);
    setFile(formData);
  };

  return (
    <>
      <NavBar />
      <div className="postProjectSection">
        <Container className=" py-5">
          <Row>
            <Col className="postProjectForm" xs={{ offset: 2, span: 8 }}>
              <h2>Create your Project</h2>
              <Form>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Summary</Form.Label>
                  <Form.Control placeholder="a short description of project" required value={summary} onChange={(e) => setSummary(e.target.value)} />
                </Form.Group>
                <Row className="">
                  <Col>
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Category</Form.Label>
                    </Form.Group>

                    <div className="form-row">
                      <div className="form-group ">
                        <select className="form-select" name="category" onChange={(e) => setCategory(e.target.value)}>
                          <option selected>Select Category</option>
                          <option value="Design">Design</option>
                          <option value="Education"> Education</option>
                          <option value="Beauty"> Beauty</option>
                          <option value="Programming"> Programming</option>
                          <option value="Catering"> Catering</option>
                          <option value="Entertainment"> Entertainment</option>
                          <option value="Business"> Business</option>
                          <option value="Others"> Others</option>
                        </select>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <Form.Group as={Col} controlId="">
                      <Form.Label>Location</Form.Label>
                      <Form.Control required type="text" placeholder="Where is the project to be delivered?" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </Form.Group>
                  </Col>
                </Row>
                <Row></Row>
                <br />
                <Row className="">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Upload Files</Form.Label>
                  </Form.Group>
                </Row>
                {/* <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Default file input example</Form.Label>
                  <Form.Control type="file" />
                </Form.Group> */}
                <Button className="addpostfooterbtn mx-1">
                  <div id="selectimages">
                    <form enctype="multipart/form-data" method="post" name="fileinfo">
                      <input id="post-file" type="file" name="file" onChange={selectImage} required />
                      <label for="post-file">
                        <Row>
                          <Col>
                            Add File
                            {/* <i className="bi bi-card-image"></i> */}
                          </Col>
                        </Row>
                      </label>
                    </form>
                  </div>
                </Button>

                <Row className="mb-3">
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="A more detailed description of your project"
                      as="textarea"
                      style={{ height: "150px" }}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row>

                <div className="d-flex justify-content-end gap-1">
                  <Button variant="success" type="submit" onClick={postProject}>
                    Save
                  </Button>
                  <Link to="/dashboard">
                    <Button variant="success" type="submit">
                      Go To projects
                    </Button>
                  </Link>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};
export default PostProject;
