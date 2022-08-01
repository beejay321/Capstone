import React, { useState, useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./dashboard.module.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Search from "./Search";
import Category from "./Category";
import AllProjects from "./AllProjects";

const MY_APP_API_URL = "http://localhost:3255";
// const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const Dashboard = () => {
  const [query, setQuery] = useState("");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState("");
  const [loaders, setLoader] = useState([1, 2, 3, 4]);

  useEffect(() => {
    setIsLoading(true);
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
          setIsLoading(false);
          console.log(data);
          setProjects(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  const searchProjects = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(`${MY_APP_API_URL}/projects/search/${query}`);
      let result = await response.json();
      console.log(result);
      setIsLoading(false);
      setProjects(result);
      console.log(projects);
    } catch (error) {
      console.log("error");
    }
  };

  const searchCategory = async (category) => {
    setIsLoading(true);
    try {
      let response = await fetch(`${MY_APP_API_URL}/projects?category=${category}`);
      let result = await response.json();
      console.log(result);
      setIsLoading(false);
      setProjects(result);
      console.log(projects);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <NavBar />
      <Search query={query} searchProjects={searchProjects} setQuery={setQuery} />
      <Category searchCategory={searchCategory} />
      {isLoading ? (
        <div className={styles.projectDiv}>
          <Container className="pt-5">
            <Row>
              {loaders.map((l) => (
                <Col xs={3}>
                  <Card className={styles.projectCard}>
                  <Skeleton className={styles.projectSkeleton} height={200}  />

                    <div className={styles.cardBody}>
                      <div className={styles.cardTitle}>
                        <Skeleton width={100} />
                      </div>
                      <div className={styles.summary}>
                        <Skeleton count={2} />
                      </div>
                      <div className={styles.projectProp}>
                        <div className={styles.sellerImageDiv}>
                          <Skeleton circle height="100%" containerClassName="avatar-skeleton" />
                        </div>
                        <div className="">
                          <Skeleton count={2} width={80} />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <>
          <AllProjects projects={projects} />
        </>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
