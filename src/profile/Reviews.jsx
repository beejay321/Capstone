import React from "react";
import { Row, Image } from "react-bootstrap";
import "./profilepage.css";
function Reviews({ user }) {
  return (
    <>
      <Row className="profileColumn">
        <div className=" py-2 px-1 profileColumn " style={{ minHeight: "20rem" }}>
          <div className="mx-2 ">
            <h4>Reviews</h4>
          </div>{" "}
          <hr className="my-2" />
          <div className=" eachReview">
            <div className="d-flex gap-2">
              <div className="sellerImageDiv">
                <Image className="sellerImage" src="https://via.placeholder.com/30x30" fluid />
              </div>
              <span className="mb-3 ">Timi Savage</span>
            </div>
            <h6 className="">Excellent Communication</h6>
            <p className="">Project Title</p>
            <p className="">Communication with Temmy was professional. He delivered on time, And work was excellently done. I would definitelly recommend him to anyone. </p>
          </div>
          <div className="eachReview">
            <div className="d-flex gap-2">
              <div className="sellerImageDiv">
                <Image className="sellerImage" src="https://via.placeholder.com/30x30" fluid />
              </div>
              <span className="mb-3">Timi Savage</span>
            </div>
            <h6 className="">Excellent Communication</h6>
            <p className="">Project Title</p>
            <p className="">Communication with Temmy was professional. He delivered on time, And work was excellently done. I would definitelly recommend him to anyone. </p>
          </div>
        </div>
      </Row>
    </>
  );
}

export default Reviews;
