import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', width: '100%', padding: '30px 0' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              We are dedicated to providing solar energy solutions that are
              sustainable and environmentally friendly.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <FaMapMarkerAlt /> MANGAL GREEN ENERGY, Haladkeri, Bidar, Karnataka 585401
              </li>
              <li>
                <FaPhone /> <a href="tel:+919370209686">+91 9370209686</a>
              </li>
              <li>
                <FaEnvelope /> <a href="mailto:mangalgreenenergy3@gmail.com">mangalgreenenergy3@gmail.com</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Your Solar Company. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
