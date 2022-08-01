import React from "react";
import { Button, Image, Table } from "react-bootstrap";
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

        {bids.length > 0 ? (
          bids.map((bid) => (
            <>
              <div key={bid._id} className={styles.eachBid}>
                <div className=" ">
                  <Table className={styles.bidDetails}>
                    <tbody>
                      <tr>
                        <td className={styles.bidDescriptionTitle}>
                          <Link to={`/users/${bid.user._id}`} className={styles.bidderLink}>
                            <div className={styles.sellerImageDiv}>
                              <Image className={styles.sellerImage} src={bid.user.picture} fluid />
                            </div>
                            <span className=" ">{bid.user.firstname} </span>
                            <span className="d-flex ">{bid.user.lastname} </span>
                          </Link>
                        </td>
                      </tr>
                      <tr>
                        <td className={styles.bidDescriptionTitle}>Message</td>
                        <td>{bid.message} </td>
                      </tr>
                      <tr>
                        <td className={styles.bidDescriptionTitle}>Cost</td>
                        <td className={styles.bidDescription}>{bid.cost} </td>
                      </tr>
                      <tr>
                        <td className={styles.bidDescriptionTitle}>Duration</td>
                        <td className={styles.bidDescription}>{bid.duration} </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <div className={styles.chooseBtn} onClick={() => history.push(`/checkout/${match.params.projectId}/${bid._id}`)}>
                  <Button className={styles.chooseBtn} variant="outline">
                    Choose this Bid
                  </Button>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className={styles.noBidDiv}>
            <div className={styles.noBid}>
              <div className="d-flex justify-content-center">
                <img alt="" src="https://res.cloudinary.com/dvyids286/image/upload/v1659270002/CapstoneProjects/yph7svcuonyrag3tidyb.png" srcset="" />
              </div>{" "}
              <span className="d-flex justify-content-center">No offers on your project yet</span>
            </div>{" "}
          </div>
        )}
      </div>
    </>
  );
}

export default OwnersBidView;
