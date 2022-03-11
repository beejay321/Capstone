import React, { useState, useEffect } from "react";
import { Container, Row, Button, Col, InputGroup, FormControl, Image, Spinner } from "react-bootstrap";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

// const ADDRESS = "http://localhost:3255";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

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

      <div id="searchDiv">
        <Container className="mt-3 mb-0">
          <Row>
            <Col className="d-flex justify-content-between mb-0 gap-2 ">
              <InputGroup className="searchInput">
                <FormControl value={query} onChange={(e) => setQuery(e.target.value)} placeholder="What are your searching for ?" aria-label="Search" aria-describedby="basic-addon2" />
              </InputGroup>

              <Button id="button-addon2" variant="outline" className="searchButton " onClick={searchProjects}>
                Search
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="categoryButtonsDiv ">
        <Container>
          <Row xs={8} md={7}>
            <div className="categoryButtonsDiv py-2">
              <Button
                className="categoryButtons "
                variant="light"
                id="button-addon2"
                onClick={() => {
                  searchCategory("Design");
                }}
              >
                Art & Design
              </Button>
              <Button
                className="categoryButtons "
                variant="light"
                id="button-addon2"
                onClick={() => {
                  searchCategory("Education");
                }}
              >
                Education
              </Button>
              <Button
                className="categoryButtons "
                variant="light"
                id="button-addon2"
                onClick={() => {
                  searchCategory("Beauty");
                }}
              >
                Beauty & Lifestyle
              </Button>
              <Button
                className="categoryButtons "
                variant="light"
                id="button-addon2"
                onClick={() => {
                  searchCategory("Catering");
                }}
              >
                Catering{" "}
              </Button>
              <Button
                className="categoryButtons "
                variant="light"
                id="button-addon2"
                onClick={() => {
                  searchCategory("Entertainment");
                }}
              >
                Entertainment
              </Button>
              <Button
                className="categoryButtons "
                variant="light"
                id="button-addon2"
                onClick={() => {
                  searchCategory("Business");
                }}
              >
                Business
              </Button>
              <Button
                className="categoryButtons "
                variant="light"
                id="button-addon2"
                onClick={() => {
                  searchCategory("Programming");
                }}
              >
                Programming
              </Button>
            </div>
          </Row>
        </Container>
      </div>
      {isLoading ? (
        <div className=" py-5 d-flex justify-content-center ">
          <Spinner animation="border" size="sm" />
          <Spinner animation="border" />
          <Spinner animation="grow" size="sm" />
          <Spinner animation="grow" />
        </div>
      ) : (
        <Container className=" mb-3">
          <Row className="projectDiv pt-5">
            {projects &&
              projects.reverse().map((p) => (
                <>
                  <Col xs={3} className="py-3" key={p._id}>
                    {/* <Link to={`/details/${p._id}`} className="projectL"> */}
                    <div className=" projectBox ">
                      <Link to={`/details/${p._id}`} className="projectL">
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
                        {/* <div className=" mt-1  ">
                          <span className="text">{p.location}</span>
                        </div> */}
                      </div>
                    </div>
                    {/* </Link> */}
                  </Col>
                </>
              ))}
          </Row>
        </Container>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
