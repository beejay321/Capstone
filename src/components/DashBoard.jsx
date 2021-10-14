import React from "react";
import { Container, Row, Button, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

// const ADDRESS = "http://localhost:3255";

const MY_APP_API_URL = "https://clientconnectapp.herokuapp.com";

class Dashboard extends React.Component {
  state = {
    user: "",
    projects: [],
    query: null,
    category: null,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(`${MY_APP_API_URL}/projects`, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          projects: data,
          user: data[0].seller,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  searchProjects = async () => {
    try {
      let response = await fetch(`${MY_APP_API_URL}/projects/search/${this.state.query}`);
      let result = await response.json();
      console.log(result);
      this.setState({
        projects: result,
      });
      console.log(this.state.projects);
    } catch (error) {
      console.log("error");
    }
  };

  searchCategory = async (category) => {
    try {
      let response = await fetch(`${MY_APP_API_URL}/projects?category=${category}`);
      let result = await response.json();
      console.log(result);
      this.setState({
        projects: result,
      });
      console.log(this.state.projects);
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    return (
      <>
        <NavBar />

        <div id="searchDiv">
          <Container className="mt-3 mb-0">
            <Row>
              <Col className="d-flex justify-content-between mb-0 gap-2 ">
                <InputGroup className="searchInput">
                  <FormControl
                    value={this.state.query}
                    onChange={(e) =>
                      this.setState({
                        query: e.target.value,
                      })
                    }
                    placeholder="What are your searching for ?"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                </InputGroup>

                <Button id="button-addon2" variant="outline" className="searchButton " onClick={this.searchProjects}>
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
                    this.searchCategory("Design");
                  }}
                >
                  Art & Design
                </Button>
                <Button
                  className="categoryButtons "
                  variant="light"
                  id="button-addon2"
                  onClick={() => {
                    this.searchCategory("Education");
                  }}
                >
                  Education
                </Button>
                <Button
                  className="categoryButtons "
                  variant="light"
                  id="button-addon2"
                  onClick={() => {
                    this.searchCategory("Beauty");
                  }}
                >
                  Beauty & Lifestyle
                </Button>
                <Button
                  className="categoryButtons "
                  variant="light"
                  id="button-addon2"
                  onClick={() => {
                    this.searchCategory("Catering");
                  }}
                >
                  Catering{" "}
                </Button>
                <Button
                  className="categoryButtons "
                  variant="light"
                  id="button-addon2"
                  onClick={() => {
                    this.searchCategory("Entertainment");
                  }}
                >
                  Entertainment
                </Button>
                <Button
                  className="categoryButtons "
                  variant="light"
                  id="button-addon2"
                  onClick={() => {
                    this.searchCategory("Business");
                  }}
                >
                  Business
                </Button>
                <Button
                  className="categoryButtons "
                  variant="light"
                  id="button-addon2"
                  onClick={() => {
                    this.searchCategory("Programming");
                  }}
                >
                  Programming
                </Button>
              </div>
            </Row>
          </Container>
        </div>

        <Container className=" mb-3">
          <Row className="projectDiv pt-5">
            {this.state.projects &&
              this.state.projects.reverse().map((p) => (
                <Col xs={3} className="py-3" key={p._id}>
                  <div className=" projectBox">
                    <Link to={`/details/${p._id}`} className="projectLink">
                      <div className="py-1  ">
                        <span className="projectTitle">{p.title}</span>
                      </div>
                    </Link>
                    <div className="py-1  my-1  ">
                      <span className="text">{p.summary}</span>
                      {/* <span>I would like a a skiiled graphic designer to design a logo for my startup. </span> */}
                    </div>
                    <div className=" sellerDiv px-1 ">
                      {p.seller && (
                        <div className="  d-flex  gap-1 ">
                          <div className="sellerImageDiv">
                            <Image className="sellerImage" src={p.seller.picture} fluid />
                          </div>
                          <span className="text  ">{p.seller.firstname}</span>
                          <span className="d-flex text ">{p.seller.lastname} </span>
                        </div>
                      )}
                      <div className=" mt-1  ">
                        <span className="text">{p.location}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
export default Dashboard;
