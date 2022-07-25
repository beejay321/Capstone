import React, { useState } from "react";
import { Container, Col, Row, InputGroup, FormControl, Button } from "react-bootstrap";
import Footer from "../Footer";
import NavBar from "../NavBar";
import styles from "./faq.module.css";

const Faq = (props) => {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <>
      <NavBar />
      <div id={styles.faqDiv}>
        <Container className="">
          {/* <Row> */}
          <div className={styles.faqText}>
            <h3>Frequently asked Questions</h3>
          </div>
          <div>
            <div className={styles.faqSearchDiv}>
              <InputGroup className={styles.faqSearchInput}>
                <FormControl value={props.query} onChange={(e) => props.setQuery(e.target.value)} placeholder="What are your searching for ?" aria-label="Search" aria-describedby="basic-addon2" />
              </InputGroup>

              <Button id="button-addon2" variant="outline" className={styles.faqButton} onClick={props.searchProjects}>
                Search
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className={styles.faqQuestionContainer} >
        <div className={styles.faqQuestionDiv}>
          <div className={styles.faqQuestionTitle}>
            {!showQuestion && (
              <span className={styles.faqQuestionToggle} onClick={() => setShowQuestion(true)}>
                <i class="bi bi-plus"></i>
              </span>
            )}
            {showQuestion && (
              <span className={styles.faqQuestionToggle} onClick={() => setShowQuestion(false)}>
                <i class="bi bi-dash"></i>
              </span>
            )}
            <span className={styles.faqQuestion}>How can I contact a client?</span>
          </div>
          {/* <hr className="m-0" /> */}
          <div>{showQuestion && <span className={styles.faqAnswer}>This is how you can contact a client</span>}</div>{" "}
        </div>{" "}
      </Container>
      <Footer />
    </>
  );
};
export default Faq;
