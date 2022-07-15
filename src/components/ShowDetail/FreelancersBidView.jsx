import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./ProjectDetail.module.css";
const MY_APP_API_URL = "http://localhost:3255";
// const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

function FreelancersBidView({ bids, project, match, history }) {
  const deleteBid = async (bid) => {
    // e.preventDefault();
    try {
      const response = await fetch(`${MY_APP_API_URL}/projects/${project._id}/bids/${bid._id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (response.ok) {
        alert("Deleted");
        // props.history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {bids.length > 0 ? (
        <div className={styles.detailbidRow}>
          <h5 className={styles.projectTitle}>People who have offered to work on this project</h5>
          <hr />
          <Row>
            {bids &&
              bids.map((bid) => (
                <>
                  {/* <Col xs={3}> */}
                  {/* <div className="d-flex gap-5 ">
                      <Link to={`/users/${bid.user._id}`} className={styles.bidders}>
                        <div className={styles.sellerImageDiv}>
                          <Image className={styles.sellerImage} src={bid.user.picture} fluid />
                        </div>
                        <span className=" ">{bid.user.firstname}</span>
                        <span className="d-flex ">{bid.user.lastname} </span>
                      </Link>
                      <div>
                        {localStorage.getItem("id") === bid.user._id && (
                          <div className="mt-3" onClick={() => deleteBid(bid)}>
                            <i className="bi bi-trash-fill  " style={{ fontSize: "1.4rem", color: "rgb(200, 19, 19)", marginTop: "50px" }}></i>
                          </div>
                        )}
                      </div>
                    </div> */}
                  {/* </Col> */}
                  <Col xs={3} className={styles.bids}>
                    <div className="d-flex justify-content-between">
                      <Link to={`/users/${bid.user._id}`} className={styles.bidders}>
                        <div className={styles.sellerImageDiv}>
                          <Image className={styles.sellerImage} src={bid.user.picture} fluid />
                        </div>
                        <span className=" ">{bid.user.firstname}</span>
                        <span className="d-flex ">{bid.user.lastname} </span>
                      </Link>
                      {localStorage.getItem("id") === bid.user._id && (
                        <div className="mt-1" onClick={() => deleteBid(bid)}>
                          <i className="bi bi-trash-fill  " style={{ fontSize: "1.4rem", color: "rgb(200, 19, 19)", marginTop: "50px" }}></i>
                        </div>
                      )}
                    </div>
                  </Col>
                </>
              ))}
          </Row>
        </div>
      ) : (
        <div className={styles.text}>
          <span>Be the first to bid on this project</span>
        </div>
      )}
    </>
  );
}

export default FreelancersBidView;
