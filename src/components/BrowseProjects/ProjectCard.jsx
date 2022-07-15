import React from "react";
import {  Col, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProjectCard({ p }) {
  return (
    <>
      <Col xs={12} sm={6} lg={4} xl={3} className="py-3 justify-content-center" key={p._id}>
        <Card>
          <Card.Img variant="top" src="https://via.placeholder.com/80" />
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
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
}

export default ProjectCard;
