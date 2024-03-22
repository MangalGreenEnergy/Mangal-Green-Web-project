import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import RoofInstallationImage from '../../assets/Images/Slider1.png';
import GroundInstallationImage from '../../assets/Images/Slider3.png';
import TinShedInstallationImage from '../../assets/Images/Slider5.png';
import './Services.css';

function Service() {
  const SolarPanelImage = 'https://e0.pxfuel.com/wallpapers/210/864/desktop-wallpaper-solar-panels-solar-farm.jpg';
  return (
    <Container className="service-container"  style={{ padding: '130px 0' }}>
      <h1 className="text-center mb-5">Our Services</h1>

      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <div className="service text-center">
            <Image src={SolarPanelImage} className="installation-image" fluid />
          </div>
        </Col>
        <Col md={6}>
          <div className="service">
            <h3>Solar Panels</h3>
            <p>We offer a variety of advanced solar panels including BIFICIAL TOPCON, PERC HALF CUT, and PERC BIFICIAL, ensuring high efficiency and durability.</p>
          </div>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={4}>
          <div className="service">
            <h3>Solar System Design</h3>
            <p>Our expert team designs customized solar systems to optimize energy production while complementing your property's aesthetics.</p>
          </div>
        </Col>

        <Col md={4}>
          <div className="service">
            <h3>Solar System Installation</h3>
            <ul>
              <li><strong>Rooftop Installation:</strong> Efficient and seamless rooftop installations.</li>
              <li><strong>Ground Mount Installation:</strong> Stable and durable ground mount systems.</li>
              <li><strong>Tin Shed Solar Structure Installation:</strong> Utilizing space effectively with tin shed installations.</li>
            </ul>
          </div>
        </Col>

        <Col md={4}>
          <div className="service">
            <h3>Maintenance</h3>
            <p>We provide comprehensive maintenance services to ensure long-term performance and reliability of your solar system.</p>
          </div>
        </Col>
      </Row>

      <Row className="mb-5 justify-content-center">
        <Col md={3}>
          <Image src={RoofInstallationImage} className="installation-image" fluid />
          <p className="text-center mt-2"><em>Rooftop Installation</em></p>
        </Col>
        <Col md={3}>
          <Image src={GroundInstallationImage} className="installation-image" fluid />
          <p className="text-center mt-2"><em>Ground Mount Installation</em></p>
        </Col>
        <Col md={3}>
          <Image src={TinShedInstallationImage} className="installation-image" fluid />
          <p className="text-center mt-2"><em>Tin Shed Solar Structure Installation</em></p>
        </Col>
      </Row>

      <div className="our-commitment-section">
        <Container>
          <Row className="align-items-center">
              <h2 className="text-center mb-4">Our Commitment</h2>
              <p className="text-center mb-4">At MANGAL GREEN ENERGY, we are committed to delivering top-quality products, innovative solutions, and exceptional service to our clients. Join us in our mission to create a sustainable future powered by the sun.</p>
              <div className="text-center">
                <Button variant="light">Contact Us</Button>
              </div>
          </Row>
        </Container>
      </div>

      <Container>
        <p className="text-center mt-5">Contact us to learn more about how we can tailor a solar solution for you. Let's harness the power of the sun together!</p>
      </Container>
    </Container>
  );
}

export default Service;
