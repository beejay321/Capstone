import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BidModal from "./BidModal";
import styles from "./ProjectDetail.module.css";
import "react-multi-carousel/lib/styles.css";
import EditProject from "./EditProject";
import { useHistory } from "react-router-dom";
import FileModal from "./FileModal";

function DetailOfProject({ project, match }) {
  const [showBids, setShowBids] = useState(true);
 
  let history = useHistory();

  useEffect(() => {
    console.log(project);
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
              <p className={styles.projectLocation}>{project.location}</p>
            </div>
          </div>
          <div className={styles.bidOffer}>
            {localStorage.getItem("id") === project.seller._id ? <EditProject project={project} history={history} /> : <BidModal match={match} project={project} />}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default DetailOfProject;
