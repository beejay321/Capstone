import React from "react";
import { Form, Container, Row, Col, Button, Modal, Card, Image } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";

const MyOrders = (props) => {
  return (
    <>
      <Container className="py-3" style={{ minHeight: "100vh" }}>
        <Col>
          <div className=" mb-4 mt-3 projectTitle">
            <h2 className=" pt-2 px-3 projectText">My Orders </h2>
          </div>
          <Row className="mt-5 py-1 ">
            {props.projects.map((p) => (
              <Col xs={4}>
                <div className=" projectBox">
                  <Link to={`/details/${p._id}`}>
                    <div>
                      <Image src={p.image} rounded fluid />
                    </div>
                  </Link>

                  <div className="py-1  my-2 summaryBox ">
                    <span>{p.summary}</span>
                  </div>
                  <div className=" mt-4  ">
                    <span>€{p.price}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Container>
    </>
  );
};
export default MyOrders;
