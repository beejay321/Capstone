import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function AllProjects(props) {
  return (
    <Container className=" mb-3">
      <Row className="projectDiv pt-5">
        {props.projects &&
          props.projects.map((p) => (
            <>
              <Col xs={6} sm={6} md={4} lg={3} className="py-3" key={p._id}>
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
  );
}

export default AllProjects;
