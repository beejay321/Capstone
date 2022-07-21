import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import  styles from "./dashboard.module.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Search from "./Search";
import Category from "./Category";
import AllProjects from "./AllProjects";

const MY_APP_API_URL = "http://localhost:3255";
// const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

const Dashboard = () => {
  // const [user, setUser] = useState("");
  const [query, setQuery] = useState("");
  // const [category, setCategory] = useState("");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState("");

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
          // setUser(data[0].seller);
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
        <div className={styles.spinner}>
          <Spinner animation="border" size="sm" />
          <Spinner animation="border" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
        </div>
      ) : (
        <AllProjects projects={projects} />
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
