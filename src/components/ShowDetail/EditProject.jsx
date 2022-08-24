import React, { useState } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import styles from "./ProjectDetail.module.css";


const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

function EditProject(props) {
  const [seller] = useState(localStorage.getItem("id"));
  const [title, setTitle] = useState(props.project.title);
  const [category, setCategory] = useState(props.project.category);
  const [description, setDescription] = useState(props.project.Description);
  const [summary, setSummary] = useState(props.project.summary);
  const [location, setLocation] = useState(props.project.location);
  const [file, setFile] = useState([]);
  const [images, setImage] = useState("https://res.cloudinary.com/dvyids286/image/upload/v1659352336/CapstoneProjects/yquaj1vvqisfuofoxmov.jpg");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const editProject = async (e) => {
    try {
      const projectDetails = {
        seller: seller,
        title: title,
        summary: summary,
        category: category,
        location: location,
        Description: description,
      };
      const response = await fetch(`${MY_APP_API_URL}/projects/${props.project._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(projectDetails),
      });
      console.log(response);
      if (response.ok) {
        const newResponse = await fetch(`${MY_APP_API_URL}/projects/${props.project._id}/uploadFile`, {
          method: "PUT",
          body: file,
        });
        if (newResponse.ok) {
          alert("Sucessfully posted");
        } else {
          console.log("File was not uploaded!");
        }
        console.log("Updated");
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProject = async (e) => {
    // e.preventDefault();
    try {
      const response = await fetch(`${MY_APP_API_URL}/projects/${props.project._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (response.ok) {
        alert("Deleted");
        handleClose();
        props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.bidButton} onClick={handleShow}>
        <span>Edit Project</span>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title className={styles.modalTitle}>Edit Project</Modal.Title>
          <div className={styles.close} onClick={handleClose}>
            <i class="bi bi-x-lg"></i>
          </div>
        </Modal.Header>
        <Form onSubmit={props.handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className={styles.modalText}>Title</Form.Label>
              <Form.Control required placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label className={styles.modalText}>Summary</Form.Label>
              <Form.Control placeholder="a short description of project" required value={summary} onChange={(e) => setSummary(e.target.value)} />
            </Form.Group>
            <Row className="">
              <Col>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label className={styles.modalText}>Category</Form.Label>
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
            <br />

            <Row className="mb-3">
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label className={styles.modalText}>Description</Form.Label>
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
            {/* {props.formType === 'edit' && ( */}
            {/* <Form.Group className="mt-3">
              <Form.Control id="picture" type="file" onChange={props.selectImage} />
            </Form.Group> */}
            {/* )} */}
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between gap-1">
            <div className="">
              <Button variant="danger" type="submit" onClick={deleteProject}>
                <i class="bi bi-trash3-fill"></i>{" "}
              </Button>
            </div>
            <div className="d-flex justify-content-end gap-1">
              <Button className={styles.saveBtn} variant="success" type="submit" onClick={editProject}>
                Edit
              </Button>
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditProject;
