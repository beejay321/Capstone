import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BidModal from "./BidModal";
import styles from "./ProjectDetail.module.css";
import "react-multi-carousel/lib/styles.css";
import EditProject from "./EditProject";
import { useHistory } from "react-router-dom";
import FileModal from "./FileModal";
let userId = localStorage.getItem("id");
function DetailOfProject({ project, match }) {
  const [bidExists, setBidExists] = useState(true);

  let history = useHistory();

  useEffect(() => {
    console.log(project.bids);
    let bidded = project.bids.filter((b) => b.user._id === userId);
    console.log(bidded.length)
    if (bidded.length === 0) {
      setBidExists(false);
    }
  }, []);

  return (
    <>
      <div className={styles.detailtopRow}>
        <div className={styles.files}>
          <div className={styles.imageFill}>
            <FileModal images={project.files} />
          </div>{" "}
        </div>
        {/*  */}
        <div className={styles.projectDetails}>
          <div className={styles.projectHead}>
            <Link to={`/users/${project.seller._id}`} className={styles.sellerLink}>
              <div className={styles.sellerImageDiv}>
                <Image className={styles.sellerImage} src={project.seller.picture} fluid />
              </div>
              <div>
                <span className=" ">
                  {project.seller.firstname} {project.seller.lastname}
                </span>
              </div>
            </Link>
          </div>
          <div className={styles.projectHead}>
            <h5 className={styles.projectTitle}>{project.summary}</h5>
          </div>{" "}
          <div>
            <div className={styles.projectText}>
              <p>{project.Description} </p>
            </div>

            <p className={styles.projectLocation}>{project.location}</p>
          </div>
          <div className={styles.bidOffer}>
            {localStorage.getItem("id") === project.seller._id ? <EditProject project={project} history={history} /> : <div>{!bidExists && <BidModal match={match} project={project} />}</div>}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default DetailOfProject;
