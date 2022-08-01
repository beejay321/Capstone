import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./ProjectDetail.module.css";
const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

function SimilarProjects(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // setIsLoading(true);
    const getProjects = async () => {
      try {
        let response = await fetch(`${MY_APP_API_URL}/projects`, {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (response.ok) {
          let data = await response.json();
          // setIsLoading(false);
          console.log(data);
          setProjects(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      {projects && (
        <>
          <div className={styles.carouselTitle}>
            <h5 className={styles.sectionTitle}>People also searched for</h5>
          </div>
          <div>
            <Carousel responsive={responsive}>
              {projects &&
                projects.map((p) => (
                  <>
                    <div className={styles.carouselDiv} key={p._id}>
                      {/* <Link to={`/details/${p._id}`} className="projectL"> */}
                      <Link to={`/details/${p._id}`} className={styles.projectLink}>
                        <div className={styles.projectBox}>
                          <div className={styles.projectName}>
                            <span>{p.title}</span>
                          </div>
                          <div className={styles.text}>
                            <span>{p.summary}</span>
                          </div>
                          <div className={styles.sellerDiv}>
                            {p.seller && (
                              <div className="  d-flex  gap-1  ">
                                <div className={styles.sellerImageDiv}>
                                  <Image className={styles.sellerImage} src={p.seller.picture} fluid />
                                </div>
                                <div>
                                  <div className="d-flex  gap-1">
                                    <span className={styles.name}>
                                      {p.seller.firstname} {p.seller.lastname}
                                    </span>
                                  </div>

                                  <span className={styles.location}>{p.location}</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </>
                ))}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
}

export default SimilarProjects;
