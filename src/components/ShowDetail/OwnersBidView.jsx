import React from "react";
import {  Button,  Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./ProjectDetail.module.css";
import { useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

function OwnersBidView({ bids }) {
  let history = useHistory();
  let match = useRouteMatch();

  return (
    <>
      <div className={styles.detailbidRow}>
        <h5 className={styles.sectionTitle}>People who have offered to work on this project</h5>
        <hr />
        {bids.length > 0 ? (
          bids.map((bid) => (
            <div key={bid._id} className={styles.eachBid}>
              <div className=" ">
                <Link to={`/users/${bid.user._id}`} className={styles.sellerLink}>
                  <div className={styles.sellerImageDiv}>
                    <Image className={styles.sellerImage} src={bid.user.picture} fluid />
                  </div>
                  <span className=" ">{bid.user.firstname}</span>
                  <span className="d-flex ">{bid.user.lastname} </span>
                </Link>
                <div className={styles.bidDescription}>
                  <span className="  pt-1">Message to Client:</span>
                  <span className="  pt-1">{bid.message}</span>
                  <span className=" pt-1">Starting From : €{bid.cost}</span>
                  <span className=" pt-1">Duration : {bid.duration}</span>
                </div>
              </div>
              <div className="">
                <Button className={styles.bidButton} variant="outline" onClick={() => history.push(`/checkout/${match.params.projectId}/${bid._id}`)}>
                  Choose this Bid
                </Button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.text}>No bids on your project</div>
        )}
      </div>
    </>
  );
}

export default OwnersBidView;
