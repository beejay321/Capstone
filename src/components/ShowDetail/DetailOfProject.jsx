import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import BidModal from "./BidModal";
import styles from "./ProjectDetail.module.css";
import "react-multi-carousel/lib/styles.css";
import EditProject from "./EditProject";
import { useHistory } from "react-router-dom";
import FileModal from "./FileModal";

const images = [
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
  "https://via.placeholder.com/50",
];

function DetailOfProject({ project, match }) {
  let history = useHistory();

  return (
    <>
      <div className={styles.detailtopRow}>
        <div className=" py-3 d-flex justify-content-between">
          <h5 className={styles.projectTitle}>{project.summary}</h5>
          {localStorage.getItem("id") === project.seller._id && <EditProject project={project} history={history} />}
        </div>
        <div className="d-flex">
          <div>
            <Link to={`/users/${project.seller._id}`} className={styles.sellerLink}>
              <div className={styles.sellerImageDiv}>
                <Image className={styles.sellerImage} src={project.seller.picture} fluid />
              </div>
              <span className=" ">{project.seller.firstname}</span>
              <span className="d-flex ">{project.seller.lastname} </span>
            </Link>
            <p className={styles.projectText}>{project.Description} </p>
            <p className="  ">{project.skills}</p>
            <div className="d-flex ">
              <p className={styles.projectText}>{project.location}</p>
            </div>
          </div>
          <FileModal images={images} />
        </div>

        <div className={styles.bidButton}>{localStorage.getItem("id") === project.seller._id ? "" : <BidModal match={match} project={project} />}</div>
      </div>
      {/* <div className={styles.detailtopRow}>
        <div className=" py-3 d-flex justify-content-between">
          <h5 className={styles.projectTitle}>{project.summary}</h5>
          {localStorage.getItem("id") === project.seller._id && <EditProject project={project} history={history} />}
        </div>
        <Link to={`/users/${project.seller._id}`} className={styles.sellerLink}>
          <div className={styles.sellerImageDiv}>
            <Image className={styles.sellerImage} src={project.seller.picture} fluid />
          </div>
          <span className=" ">{project.seller.firstname}</span>
          <span className="d-flex ">{project.seller.lastname} </span>
        </Link>
        <Row className="d-flex justify-content-between mt-1">
          <Col xs={5}>
            <p className={styles.projectText}>{project.Description} </p>
            <p className="">{project.skills}</p>
            <p className={styles.projectText}>{project.location}</p>
          </Col>
          <Col xs={5} className="d-grid justify-content-end mx-4">
            <FileModal images={images} />
        <div className={styles.bidButton}>{localStorage.getItem("id") === project.seller._id ? "" : <BidModal match={match} project={project} />}</div>
          </Col>
        </Row>
      </div> */}
    </>
  );
}

export default DetailOfProject;
