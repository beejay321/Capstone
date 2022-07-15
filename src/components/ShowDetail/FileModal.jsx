import React, { useState } from "react";
import { Form, Button, Modal, Image, Carousel } from "react-bootstrap";

function FileModal({ images }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div className="" onClick={handleShow}>
        <Image src="https://via.placeholder.com/30x30" height="180" rounded alt="files or images of projects" />
      </div>
      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
          <Carousel>
            {images &&
              images.map((image) => (
                <Carousel.Item>
                  <img className="d-block w-100" src={image} alt="First slide" />
                </Carousel.Item>
              ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FileModal;
