import React, { useState, useEffect } from "react";
import { Card, Container, Row, Button, Form, Col, InputGroup, FormControl, Image } from "react-bootstrap";
import "../styles/dashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends React.Component {
  state = {
    user: "",
    projects: [],
    query: null,
    location: null,
    category: null,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch("http://localhost:3255/projects");
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
      let response = await fetch(`http://localhost:3255/projects/search/${this.state.query}`);
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

  searchDesign = async () => {
    try {
      let response = await fetch(`http://localhost:3255/projects/search/design`);
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
        {/* >
         */}
        <div id="searchDiv">
          <Container className="mt-3 mb-0">
            <Row>
              <Col className="d-flex justify-content-between mb-0  ">
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
                {/* <InputGroup className="px-5">
                  <FormControl placeholder="Where do you need the service?" aria-label="Search" aria-describedby="basic-addon2" />
                </InputGroup> */}
                <Button id="button-addon2" variant="success" className="searchButton px-5 mx-5"  onClick={this.searchProjects}>
                  Search
                </Button>
              </Col>
              {/* <Col  className="searchButtons "></Col> */}
            </Row>
          </Container>
        </div>
        <div className="categoryButtonsDiv ">
          <Container>
            <Row xs={8} md={7}>
              <div className="categoryButtonsDiv py-2">
                <Button className="categoryButtons " variant="light" id="button-addon2" onClick={this.searchDesign}>
                  Art & Design
                </Button>
                <Button className="categoryButtons " variant="light" id="button-addon2">
                  Writing & Research
                </Button>
                <Button className="categoryButtons " variant="light" id="button-addon2">
                  Beauty & Lifestyle
                </Button>
                <Button className="categoryButtons " variant="light" id="button-addon2">
                  Food Making
                </Button>
                <Button className="categoryButtons " variant="light" id="button-addon2">
                  Music & Audio
                </Button>
                <Button className="categoryButtons " variant="light" id="button-addon2">
                  Video Making
                </Button>
                <Button className="categoryButtons " variant="light" id="button-addon2">
                  Programming
                </Button>
              </div>
            </Row>
          </Container>
        </div>

        <Container  className=" mb-3">
          <Row>
              <Row className=" pt-5">

                {this.state.projects.map((p) => (
                  <Col xs={3} className="py-3">
                    <div className=" projectBox">
                      <Link to={`/details/${p._id}`}>
                        {/* <div>
                          <Image
                            src={p.image}
                            // height="10px"
                            rounded
                            fluid
                            // onClick={() => this.props.history.push("/details")}
                          />
                        </div> */}
                      </Link>
                      <div className="d-flex py-1 ">
                        {/* <Image src={p.seller.picture} height="60" roundedCircle /> */}
                        {/* <Image src="https://via.placeholder.com/35" roundedCircle /> */}
                        {/* <Image src={p.seller.picture} roundedCircle /> */}

                        {/* <span className="px-3 ">Name</span>
                        <span className="d-flex ">Surname</span> */}
                        {/* <span className="px-3 ">{p.seller.firstname}</span> */}
                        {/* <span className="d-flex ">{p.seller.lastname}</span> */}
                      </div>
                      <Link to={`/details/${p._id}`} > 
                        <div className="py-1    ">
                          <span>{p.summary}</span>
                        </div>
                      </Link>
                      <div className="py-1  my-1  ">
                        <span>I need to design a logo for my wedding. To use for on all both invitation and access cards.</span>
                      </div>
                      <div className=" mt-1  ">
                        <span>{p.location}</span>
                      </div>
                      <div className=" mt-2 ">
                        <span>€{p.price}</span>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
          </Row>
        </Container>
      </>
    );
  }
}
export default Dashboard;
