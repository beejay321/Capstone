import React from "react";
import { Card } from "react-bootstrap";
import "./profilepage.css";
import EditExperience from "./EditExperience";
import styles from "./profile.module.css";

const ExperienceCard = (props) => {
  return (
    <>
      <div className=" p-3 " style={{ minHeight: "15rem" }}>
        <div className={`mx-2 d-flex justify-content-between ${styles.reviewTitle}`}>
          <h4>{props.title}</h4>
          <div className="mx-1 d-flex gap-3">
            {localStorage.getItem("id") === props.user._id ? <EditExperience title="Add" user={props.user} /> : ""}
            {localStorage.getItem("id") === props.user._id ? <EditExperience title="Edit" /> : ""}
          </div>
        </div>
        <div>
          {props.experience === [] ? (
            <div>
              {props.experience &&
                props.experience.map((exp) => (
                  <div key={exp._id} className="mx-2 py-2 d-flex justify-content-between">
                    <div>
                      <Card className={styles.profileCards} style={{ width: "18rem" }}>
                        <Card.Body className={styles.profileCards}>
                          <Card.Title className={styles.title}>{exp.position}</Card.Title>
                          <Card.Subtitle className={`mb-2 text-muted${styles.text}`}>{exp.company}</Card.Subtitle>
                          <Card.Text className={`${styles.text}`}>
                            <span>{exp.city}</span>
                            <span>{exp.country}</span>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <>
              <div className=" mx-2 py-3 d-flex justify-content-between ">
                <div>
                  <Card className={styles.profileCards} style={{ width: "18rem" }}>
                    <Card.Body className={styles.profileCards}>
                      <Card.Title className={styles.title}>Project manager</Card.Title>
                      <Card.Subtitle className={`mb-2 text-muted${styles.text}`}>Grayers GmbH</Card.Subtitle>
                      <Card.Text className={`${styles.text}`}>
                        <span>Barcelona Spain</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              <div className="mx-2 py-3 d-flex justify-content-between">
                <div>
                  <Card className={styles.profileCards} style={{ width: "18rem" }}>
                    <Card.Body className={styles.profileCards}>
                      <Card.Title className={styles.title}>Project designer</Card.Title>
                      <Card.Subtitle className={`mb-2 text-muted${styles.text}`}>Plink</Card.Subtitle>
                      <Card.Text className={`${styles.text}`}>
                        <span>Barcelona Spain</span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default ExperienceCard;
