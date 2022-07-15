import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/checkout.css";
import PayPal from "../PayPal";
// import NavBar from "../NavBar";
// import Footer from "../Footer";
// import PaymentMade from "./PaymentMade";

function ProjectSummary({ paymentDetails, showPaymentDiv, setHidePaypal, setAlert, project, bidder, price, projectDetails }) {
  return (
    <>
      {paymentDetails && showPaymentDiv && (
        <>
          <Col className=" CheckoutBox my-3 py-3">
            <h3 className="pb-2">Project Summary</h3>
            <Row>
              <Col xs={9}>
                <div className="pb-2 d-flex justify-content-between">
                  <p>Subtotal </p>
                </div>{" "}
              </Col>
              <Col xs={3}>
                <div className="pb-2 d-flex justify-content-between">
                  <p>€ {paymentDetails.price} </p>
                </div>{" "}
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                <div className="pb-2 d-flex justify-content-between">
                  <p>Service Fee</p>
                </div>{" "}
              </Col>
              <Col xs={3}>
                <div className="pb-2 d-flex justify-content-between">
                  <p>€ 2.00 </p>
                </div>{" "}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={9}>
                <div className="pb-2 d-flex justify-content-between">
                  <p>Total </p>
                </div>{" "}
              </Col>
              <Col xs={3}>
                <div className="pb-2 d-flex justify-content-between">
                  <p>€ {paymentDetails.total}.00 </p>
                </div>{" "}
              </Col>
            </Row>

            <h3 className="pb-2">Payment Method</h3>

            <div>
              {/* {checkout && ( */}
              <PayPal setAlert={setAlert} paymentDetails={paymentDetails} setHidePaypal={setHidePaypal} project={project} bidder={bidder} price={price} projectDetails={projectDetails} />
              {/* )} */}
            </div>
            {/* </div> */}
          </Col>
        </>
      )}
    </>
  );
}

export default ProjectSummary;
