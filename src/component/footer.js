import "./footer.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Company</h5>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </Col>
          <Col md={4}>
            <h5>Products</h5>
            <p>Cars</p>
            <p>Bikes</p>
            <p>Trucks</p>
            <p>Home-on-Wheel</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="icon-link">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
