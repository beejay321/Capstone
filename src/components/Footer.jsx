import react from "react";
import { Container, Row } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <Container className=" py-4">
          <Row className="footerText mt-2">
            <p className="d-flex justify-content-center copyright">© 2021-2022 BusolaDev | All Rights reserved</p>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Footer;
