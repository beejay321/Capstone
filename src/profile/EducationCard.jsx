import React from "react";
import { Card } from "react-bootstrap";
import "./profilepage.css";
import EditEducation from "./EditEducation";
import styles from "./profile.module.css";

const EducationCard = (props) => {
  return (
    <>
      <div className=" p-3 " style={{ minHeight: "15rem" }}>
        <div className={`mx-2 d-flex justify-content-between ${styles.reviewTitle}`}>
          <h4>{props.title}</h4>
          <div className=" mx-1 d-flex gap-3 ">
            {localStorage.getItem("id") === props.user._id ? <EditEducation title="Add" user={props.user} /> : ""}
            {localStorage.getItem("id") === props.user._id ? <EditEducation title="Edit" /> : ""}
          </div>
        </div>
        {props.education === [] ? (
          <div>
            {props.education &&
              props.education.map((edu) => (
                <div key={edu._id} className=" mx-2 py-2 d-flex justify-content-between ">
                  <div>
                    <Card className={styles.profileCards} style={{ width: "18rem" }}>
                      <Card.Body className={styles.profileCards}>
                        <Card.Title className={styles.title}>{edu.degree}</Card.Title>
                        <Card.Subtitle className={`mb-2 text-muted${styles.text}`}>{edu.institution}</Card.Subtitle>
                        <Card.Text className={`${styles.text}`}>
                          <span>
                            {edu.city} {edu.country}
                          </span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <>            
            <div className=" mx-2 py-2 d-flex justify-content-between ">
              <div>
                <Card className={styles.profileCards} style={{ width: "18rem" }}>
                  <Card.Body className={styles.profileCards}>
                    <Card.Title className={styles.title}>M.A Business</Card.Title>
                    <Card.Subtitle className={`mb-2 text-muted${styles.text}`}>University of Tarcotta</Card.Subtitle>
                    <Card.Text className={`${styles.text}`}>
                      <span>Tarcotta Oman</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
            <div className=" mx-2 py-2 d-flex justify-content-between ">
              <div>
                <Card className={styles.profileCards} style={{ width: "18rem" }}>
                  <Card.Body className={styles.profileCards}>
                    <Card.Title>B.A Business and Strategy </Card.Title>
                    <Card.Subtitle className={`mb-2 text-muted${styles.text}`}>University of Kembe</Card.Subtitle>
                    <Card.Text className={`${styles.text}`}>
                      <span>Manilla Cameroon</span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default EducationCard;
