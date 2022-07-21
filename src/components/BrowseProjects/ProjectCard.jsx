import React from "react";
import { Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";

function ProjectCard({ p }) {
  return (
    <>
      <Col xs={12} sm={6} lg={4} xl={3} key={p._id}>
        <Card className={styles.projectCard}>
          {p.files ? <Card.Img variant="top" src={p.files[0]} /> : <Card.Img variant="top" src="https://via.placeholder.com/80" />}
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>
              <Link to={`/details/${p._id}`} className={styles.projectL}>
                <span className={styles.projectName}>{p.title}</span>
              </Link>
              <div className={styles.like}>
                {/* <i className="bi bi-star like"></i> */}
                <i className="bi bi-heart-fill "></i>
              </div>
            </div>
            <div className={styles.summary}>
              <span className=""> {`${p.summary.substring(0, 69)}${p.summary.length > 68 ? "..." : ""}`}</span>
            </div>
            <hr className="m-0" />

            <div className={styles.projectProp}>
              <div className={styles.sellerImageDiv}>
                <Image className={styles.sellerImage} src={p.seller.picture} fluid />
              </div>

              <div className="">
                <div className={styles.projectOwner}>
                  {p.seller.firstname} {p.seller.lastname}
                </div>
                <div className={styles.text}>{p.location}</div>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default ProjectCard;
