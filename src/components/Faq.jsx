import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Faq = (props) => {
  return (
    <>
      <NavBar />

      <Container className="py-5" style={{ minHeight: "100vh", width: "1000px" }}>
        <h3>Frequently asked Questions</h3>
      </Container>
      <Footer />
    </>
  );
};
export default Faq;
