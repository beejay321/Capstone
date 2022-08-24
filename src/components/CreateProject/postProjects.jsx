import React, { useState } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import "../../styles/postProject.css";
import styles from "./postProject.module.css";
import Footer from "../Footer";
import NavBar from "../NavBar";
import { useHistory } from "react-router-dom";

// const MY_APP_API_URL = "http://localhost:3255";
const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const PostProject = () => {
  const [seller] = useState(localStorage.getItem("id"));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  // const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(undefined);
  const [images, setImage] = useState("https://res.cloudinary.com/dvyids286/image/upload/v1659352336/CapstoneProjects/yquaj1vvqisfuofoxmov.jpg");

  let history = useHistory();

  const selectImage = (files) => {
    // e.preventDefault();
    const data = files[0];
    console.log("image", data);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(files[0]);
    const formData = new FormData();
    formData.append("file", files[0]);
    setFile(formData);
  };

  const postProject = async (e) => {
    let id = localStorage.getItem("id");
    e.preventDefault();
    try {
      const service = {
        seller: seller,
        title: title,
        summary: summary,
        category: category,
        location: location,
        // Description: description,
      };
      const response = await fetch(`${MY_APP_API_URL}/projects/${id}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(service),
      });
      console.log(response);
      if (response.ok) {
        // if (file !== undefined) {
        const newProject = await response.json();
        console.log(newProject);
        let projectId = newProject._id;
        const newResponse = await fetch(`${MY_APP_API_URL}/projects/${projectId}/uploadFile`, {
          method: "POST",
          body: file,
        });
        if (newResponse.ok) {
          alert("Sucessfully posted");
          history.push("/projects");
        } else {
          console.log("File was not uploaded!");
        }
        // alert("Sucessfully posted");
        // }
      } else {
        console.log("project not created!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className={styles.postProjectSection}>
        <Container className=" ">
          <Row>
            <Col className={styles.postProjectForm} xs={12} sm={{ offset: 1, span: 10 }} md={{ offset: 2, span: 8 }}>
              <h2 className={styles.title}>Create your Project</h2>
              <Form>
                <Form.Control className={styles.postInput} required placeholder="Project Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                <Form.Control className={styles.postInput} placeholder="A short description of project" required value={summary} onChange={(e) => setSummary(e.target.value)} />

                <div>
                  <div className={styles.postInput}>
                    <select className={styles.postInputSelect} name="category" onChange={(e) => setCategory(e.target.value)}>
                      <option selected>Select Category</option>
                      <option value="Design">Design</option>
                      <option value="Education"> Education</option>
                      <option value="Beauty"> Beauty</option>
                      <option value="Programming"> Programming</option>
                      <option value="Catering"> Catering</option>
                      <option value="Entertainment"> Entertainment</option>
                      <option value="Business"> Business</option>
                      <option value="Other"> Others</option>
                    </select>
                  </div>
                </div>

                <Form.Control className={styles.postInput} required type="text" placeholder="Where is the project to be delivered?" value={location} onChange={(e) => setLocation(e.target.value)} />

                {/* <Row className="">
                  <Form.Group className="" controlId="formGridAddress1">
                    <Form.Control
                      className={styles.postInput}
                      type="text"
                      placeholder="A more detailed description of your project"
                      as="textarea"
                      style={{ height: "100px" }}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    />
                  </Form.Group>
                </Row> */}

                <div>
                  <Button className={styles.fileInput}>
                    <div id="selectimages">
                      <form enctype="multipart/form-data" method="post" name="fileinfo">
                        <input
                          id="post-file"
                          type="file"
                          name="file"
                          onChange={(e) => {
                            selectImage(e.target.files);
                          }}
                          required
                        />
                        <label for="post-file">
                          <div className={styles.fileText}>Upload File</div>
                        </label>
                      </form>
                    </div>
                  </Button>
                </div>

                <div className={styles.fileDisplay}>
                  <img className={styles.fileDisplayImage} src={images} alt="" />
                </div>
                <br />
                <div className="d-flex justify-content-end gap-1">
                  <span className={styles.submitBtn} variant="success" type="submit" onClick={postProject}>
                    Save Project
                  </span>
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
