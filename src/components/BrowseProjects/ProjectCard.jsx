import React, { useState } from "react";
import { Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./dashboard.module.css";

function ProjectCard({ p }) {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Col xs={12} sm={6} lg={4} xl={3} key={p._id}>
        <Card className={styles.projectCard}>
          <Link to={`/details/${p._id}`}>{p.files ? <Card.Img variant="top" src={p.files[0]} /> : <Card.Img variant="top" src="https://via.placeholder.com/80" />}</Link>
          <div className={styles.cardBody}>
            <div className={styles.cardTitle}>
              <Link to={`/details/${p._id}`} className={styles.projectL}>
                <span className={styles.projectName}>{p.title}</span>
              </Link>
              <div className={styles.like}>
                {!liked && <i className="bi bi-heart" onClick={() => setLiked(true)}></i>}
                {liked && <i className="bi bi-heart-fill" onClick={() => setLiked(false)}></i>}
              </div>
            </div>
            <div className={styles.summary}>
              <span className=""> {`${p.summary.substring(0, 69)}${p.summary.length > 68 ? "..." : ""}`}</span>
            </div>
            <hr className={`m-0 ${styles.hor}`} />

            <Link to={`/users/${p.seller._id}`} className={styles.projectL}>
              <div className={styles.projectProp}>
                <div className={styles.sellerImageDiv}>
                  <Image className={styles.sellerImage} src={p.seller.picture} fluid />
                </div>

                <div className={styles.projectOwnerDiv}>
                  <div className={styles.projectOwner}>
                    {p.seller.firstname} {p.seller.lastname}
                  </div>
                  <div className={styles.text}>{p.location}</div>
                </div>
              </div>
            </Link>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default ProjectCard;
