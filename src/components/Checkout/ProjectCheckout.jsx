import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import "../../styles/checkout.css";
// import PayPal from "../PayPal";
// import NavBar from "../NavBar";
// import Footer from "../Footer";
// import PaymentMade from "./PaymentMade";

function ProjectCheckout({ project, bidder, price, setPrice, projectDetails, setProjectDetails, makePayment }) {
  return (
    <>
      {/* <Row className="d-flex gap-5 py-5 "> */}
      {project && (
        <Col xs={8}>
          <div className="mt-3 py-2 detailtopRow px-3 ">
            <h3>Project details</h3>
            <div className=" py-2 d-flex justify-content-between">
              <h5 className="projectTitle">{project.title}</h5>
            </div>

            {/* <hr className="my-0" /> */}
            <div className="py-1 d-flex justify-content-end"></div>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label> Product Summary</Form.Label>
                  <Form.Control className="fixedValue" value={project.summary} required type="text" placeholder="Final price" />
                </Form.Group>
              </Form>
            </div>
            <div>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label> Bidder Email address</Form.Label>
                  <Form.Control className="fixedValue" value={bidder.email} required type="text" placeholder="Final price" />
                </Form.Group>
              </Form>
            </div>

            <div>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Price</Form.Label>
                  <Form.Control className="fixedValue" value={price} required onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Final price" />
                </Form.Group>
              </Form>
            </div>
            <div>
              <p className="m-1">Bid Details</p>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Control
                    required
                    className="fixedValue"
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
              <Button variant="success" type="submit" onClick={() => makePayment()}>
                Checkout
              </Button>
            </div>
          </div>
        </Col>
      )}{" "}
      {/* </Row> */}
      {
        /* <ProjectCheckout project={project} bidder={bidder} price={price} setPrice={setPrice} projectDetails={projectDetails} setProjectDetails={setProjectDetails} makePayment={makePayment} /> */
      }
    </>
  );
}

export default ProjectCheckout;

