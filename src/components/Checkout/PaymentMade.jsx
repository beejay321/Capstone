import React from "react";
import {  Button, Col } from "react-bootstrap";
import "../../styles/checkout.css";
// import classes from "./ProjectDetail.module.css";
import { useHistory } from "react-router-dom";
// import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

function PaymentMade({ project, projectDetails, paymentDetails, bidder }) {
  let history = useHistory();
  // let match = useRouteMatch();

  return (
    <>
      <div>
        <div className="d-flex justify-content-center py-5">
          <Col xs={3} className="py-3 CheckoutBox ">
            <div className="d-flex justify-content-center py-2">
              <h3>Payment has been made to the freelancer !</h3>
            </div>
            <div className=" p-3">
              <div className="py-1    ">
                <p className="projectLabel"> Product Title</p>
                <p className="fixedValue"> {project.summary}</p>
              </div>

              <div className="py-1  my-1  ">
                <p className="projectLabel"> Description</p>
                <p className="fixedValue">{projectDetails}</p>
              </div>
              <div className="py-1  my-1  ">
                <p className="projectLabel"> Price</p>

                <p className="fixedValue">{paymentDetails.total}</p>
              </div>
              <div className=" mt-1">
                <p className="projectLabel"> Location</p>

                <p className="fixedValue">{project.location}</p>
              </div>
            </div>
            <div className=" p-3">
              <Button onClick={() => history.push(`/users/${bidder._id}`)}>Contact Freelancer</Button>
            </div>
          </Col>
        </div>
      </div>
    </>
  );
}

export default PaymentMade;
