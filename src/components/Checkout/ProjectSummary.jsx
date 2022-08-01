import React from "react";
import { Col, Row } from "react-bootstrap";
import "../../styles/checkout.css";
import PayPal from "../PayPal";
import styles from "./checkout.module.css";

function ProjectSummary({ paymentDetails, showPaymentDiv, setHidePaypal, setAlert, project, bidder, price, projectDetails }) {
  return (
    <>
      {paymentDetails && showPaymentDiv && (
        <>
          <div className={styles.paymentDiv}>
            <h3 className={styles.projectCheckoutTitle}>Project Summary</h3>
            <Row>
              <Col xs={9}>
                <div className="pb-2 d-flex justify-content-between">
                  <p className={styles.formLabel}>Subtotal </p>
                </div>{" "}
              </Col>
              <Col xs={3}>
                <div className="pb-2 d-flex justify-content-between">
                  <p className={styles.text}>€{paymentDetails.price} </p>
                </div>{" "}
              </Col>
            </Row>
            <Row>
              <Col xs={9}>
                <div className="pb-2 d-flex justify-content-between">
                  <p className={styles.formLabel}>Service Fee</p>
                </div>{" "}
              </Col>
              <Col xs={3}>
                <div className="pb-2 d-flex justify-content-between">
                  <p className={styles.text}>€2.00 </p>
                </div>{" "}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={9}>
                <div className="pb-2 d-flex justify-content-between">
                  <p className={styles.formLabel}>Total </p>
                </div>{" "}
              </Col>
              <Col xs={3}>
                <div className="pb-2 d-flex justify-content-between">
                  <p className={styles.text}>€{paymentDetails.total}.00 </p>
                </div>{" "}
              </Col>
            </Row>
            <h3 className={styles.projectCheckoutTitle}>Payment Method</h3>
            <div>
              <PayPal setAlert={setAlert} paymentDetails={paymentDetails} setHidePaypal={setHidePaypal} project={project} bidder={bidder} price={price} projectDetails={projectDetails} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProjectSummary;
