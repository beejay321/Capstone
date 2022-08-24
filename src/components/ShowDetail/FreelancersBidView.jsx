import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./ProjectDetail.module.css";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";
function FreelancersBidView({ bids, project }) {
  const [showBids, setShowBids] = useState(true);

  let history = useHistory();
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
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {bids.length > 0 ? (
        <div className={styles.detailbidRow}>
          <div className="d-flex justify-content-between">
            <h5 className={styles.projectSubHeading}>People who have offered to work on this project</h5>
            {showBids && <i class="bi bi-arrow-up-short" onClick={() => setShowBids(false)} style={{ fontSize: "1.8rem", color: "green", paddingTop: "5px" }}></i>}
            {!showBids && <i class="bi bi-arrow-down-short" onClick={() => setShowBids(true)} style={{ fontSize: "1.8rem", color: "green", paddingTop: "5px" }}></i>}
          </div>{" "}
          {showBids && (
            <>
              <div className={styles.bidsDiv}>
                {bids &&
                  bids.map((bid) => (
                    <>
                      <div className={styles.bids}>
                        <Link to={`/users/${bid.user._id}`} className={styles.bidLink}>
                          <div className={styles.bidders}>
                            <div className={styles.bidderImageDiv}>
                              <Image className={styles.bidderImage} src={bid.user.picture} fluid />
                            </div>
                          </div>
                          <div className={styles.bidders}>
                            {bid.user.firstname} {bid.user.lastname}
                          </div>
                        </Link>
                        {localStorage.getItem("id") === bid.user._id && (
                          <div className={styles.deleteBtn} onClick={() => deleteBid(bid)}>
                            <i class="bi bi-x-circle-fill"></i>
                          </div>
                        )}
                      </div>
                    </>
                  ))}
              </div>
            </>
          )}
        </div>
      ) : (
        <>
          <div className={styles.detailbidRow}>
            <div className="d-flex justify-content-between">
              <h5 className={styles.projectSubHeading}>People who have offered to work on this project</h5>
            </div>{" "}
            <>
              {/* <div className={styles.bidsDiv}> */}
              <div className={styles.noBidDiv}>
                <div className={styles.noBid}>
                  <div className="d-flex justify-content-center">
                    <img alt="" src="https://res.cloudinary.com/dvyids286/image/upload/v1659270002/CapstoneProjects/yph7svcuonyrag3tidyb.png" srcset="" />
                  </div>{" "}
                  <span className="d-flex justify-content-center">Be the first to make an on offer this project</span>
                </div>{" "}
              </div>
              {/* </div> */}
            </>
          </div>
        </>
      )}
    </>
  );
}

export default FreelancersBidView;
