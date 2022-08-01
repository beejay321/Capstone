import React, { useState, useEffect } from "react";
import { Modal, Image, Carousel } from "react-bootstrap";
import styles from "./ProjectDetail.module.css";

function FileModal({ images }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(images);
  }, []);

  return (
    <>
      <Image src={images[0]} className={styles.images} onClick={handleShow} alt="files or images of projects" />

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
