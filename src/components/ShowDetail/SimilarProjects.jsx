import React, { useState, useEffect } from "react";
import {  Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import styles from "./ProjectDetail.module.css";
const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

function SimilarProjects(props) {
  const [projects, setProjects] = useState([]);
  // const [isLoading, setIsLoading] = useState("");

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
          // setUser(data[0].seller);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
        <div className={styles.carousel}>
          <div>
            <h5 className={styles.sectionTitle}>People also searched for</h5>
            <hr />
          </div>

          <Carousel responsive={responsive}>
            {projects &&
              projects.map((p) => (
                <>
                  <div className={styles.carouselDiv} key={p._id}>
                    {/* <Link to={`/details/${p._id}`} className="projectL"> */}
                    <div className={styles.projectBox}>
                      <Link to={`/details/${p._id}`} className={styles.projectLink}>
                        <div className="py-1 px-2 ">
                          <span className="projectName">{p.title}</span>
                        </div>
                      </Link>
                      <div className="py-1  my-1 px-2  ">
                        <span className="text">{p.summary}</span>
                      </div>
                      <div className=" sellerDiv px-2 ">
                        {p.seller && (
                          <div className="  d-flex  gap-1  ">
                            <div className="sellerImageDiv mt-2">
                              <Image className="sellerImage" src={p.seller.picture} fluid />
                            </div>
                            <div>
                              <div className="  d-flex  gap-1 ">
                                <span className="text  ">{p.seller.firstname}</span>
                                <span className="d-flex text ">{p.seller.lastname} </span>
                              </div>

                              <span className="text">{p.location}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ))}
          </Carousel>
        </div>
      )}
    </>
  );
}

export default SimilarProjects;
