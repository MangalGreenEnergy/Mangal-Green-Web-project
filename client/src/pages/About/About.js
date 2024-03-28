import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./About.css"; // Import custom CSS for additional styling
import solarPanelImage from "../../assets/Images/Slider1.png"; // Importing local image
import StatsComponent from "../../components/About/StatsComponent";

const About = () => {
  return (
    <section id="about" className="py-5"  >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="image-container">
              <Image src={solarPanelImage} fluid alt="Solar Panels" />
            </div>
          </Col>
          <Col md={6}>
            <div className="about-text">
              <h2 className="about-heading">About Us</h2>
              <p className="about-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <h3 className="mt-4 mb-3">Why Choose Us?</h3>
              <Row>
                <Col sm={6}>
                  <ul className="list-unstyled">
                    <li>Lorem ipsum dolor</li>
                    <li>Tempor incididunt</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Incididunt ut labore</li>
                  </ul>
                </Col>
                <Col sm={6}>
                  <ul className="list-unstyled">
                    <li>Aliquip ex ea commodo</li>
                    <li>Lorem ipsum dolor</li>
                    <li>Exercitation ullamco</li>
                    <li>Lorem ipsum dolor</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <StatsComponent/>
      </Container>
    </section>
  );
};

export default About;
