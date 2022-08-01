import React from "react";
import { Row, Image } from "react-bootstrap";
import "./profilepage.css";
import styles from "./profile.module.css";

function Reviews({ user }) {
  return (
    <>
      <Row className="">
        <div className="  " style={{ minHeight: "20rem" }}>
          <div className={styles.reviewHeading}>
            <h4 className={styles.reviewTitle}>Reviews</h4>
            <div className={styles.likes}>
              <span>
                <i class="bi bi-star-fill"></i>
              </span>
              <span>
                <i class="bi bi-star-fill"></i>
              </span>
              <span>
                <i class="bi bi-star-fill"></i>
              </span>
              <span>
                <i class="bi bi-star-half"></i>{" "}
              </span>

              <span>
                <i class="bi bi-star"></i>
              </span>
            </div>
          </div>{" "}
          <div className="  eachReview">
            <div className="d-flex gap-2 pt-2">
              <div className="sellerImageDiv">
                <Image className="sellerImage" src="https://via.placeholder.com/30x30" fluid roundedCircle />
              </div>
              <span className={styles.name}>Timi Savage</span>
            </div>
            <h6 className={styles.title}>Excellent Communication</h6>
            <p className={styles.text}>Project Title</p>
            <p className={styles.text}>Communication with Temmy was professional. He delivered on time, And work was excellently done. I would definitelly recommend him to anyone. </p>

            <div className="d-flex gap-2 pt-2">
              <div className="sellerImageDiv">
                <Image className="sellerImage" src="https://via.placeholder.com/30x30" fluid roundedCircle />
              </div>
              <span className={styles.name}>Timi Savage</span>
            </div>
            <h6 className={styles.title}>Excellent Communication</h6>
            <p className={styles.text}>Project Title</p>
            <p className={styles.text}>Communication with Temmy was professional. He delivered on time, And work was excellently done. I would definitelly recommend him to anyone. </p>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Reviews;
