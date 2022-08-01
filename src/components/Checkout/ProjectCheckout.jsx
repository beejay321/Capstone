import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import "../../styles/checkout.css";
import styles from "./checkout.module.css";

function ProjectCheckout({ project, bidder, price, setPrice, projectDetails, setProjectDetails, makePayment }) {
  return (
    <>
      {project && (
        <div className={styles.detailtopRow}>
          <h3 className={styles.projectCheckoutTitle}>Project details</h3>
          <h5 className={styles.projectTitle}>{project.title}</h5>

          <div className="py-1 d-flex justify-content-end"></div>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className={styles.formLabel}> Product Summary</Form.Label>
                <Form.Control className={styles.fixedValue} value={project.summary} required type="text" placeholder="Final price" />
              </Form.Group>
            </Form>
          </div>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className={styles.formLabel}> Bidder Email address</Form.Label>
                <Form.Control className={styles.fixedValue} value={bidder.email} required type="text" placeholder="Final price" />
              </Form.Group>
            </Form>
          </div>

          <div>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className={styles.formLabel}>Price(€)</Form.Label>
                <Form.Control className={styles.fixedValue} value={`${price} `} required onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Final price" />
              </Form.Group>
            </Form>
          </div>
          <div>
            <p className={styles.formLabel}>Bid Details</p>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  required
                  className={styles.fixedValue}
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  as="textarea"
                  rows={3}
                  placeholder="Additional details of the project"
                />
              </Form.Group>
            </Form>
          </div>
          <div className="d-flex justify-content-end gap-1">
            <Button className={styles.checkoutBtn} variant="success" type="submit" onClick={() => makePayment()}>
              Checkout
            </Button>
          </div>
        </div>
      )}{" "}
    </>
  );
}

export default ProjectCheckout;
