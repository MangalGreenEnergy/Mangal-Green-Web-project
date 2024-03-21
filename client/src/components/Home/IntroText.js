import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Introtext.css"; // Import custom CSS file for styling

export default function Introtext() {
    return (
        <div className="intro-container">
            <Container style={{ width: "70%" }} className="intro-box">
                <Row className="mt-5">
                    <Col>
                        <h1 className="text-center">Mangal Green Energy</h1>
                        <h2 className="text-center">Empowering India with Solar Solutions</h2>
                        <p className="mt-4">
                            We are your trusted partner in the solar energy sector, dedicated to providing tailored solar solutions for India's unique needs. Our comprehensive services include designing, installing, and maintaining solar power systems. We specialize in manufacturing solar panels, offering servicing, repairs, inspections, and upgrades for solar installations of any size or brand. Our expertise lies in the planning, design, and production of solar setups and specialized equipment. Additionally, we conduct thorough solar system inspections in compliance with industry standards and excel in specialized installations suited to India's diverse landscape. Our goal is to deliver customized solutions to each client, fostering enduring partnerships. Rely on our experience and commitment to solar energy.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="d-flex flex-wrap justify-content-center">
                        <div className="label mx-2">Energy Efficient</div>
                        <div className="label mx-2">Environmentally Sustainable</div>
                        <div className="label mx-2">Highly Reliable</div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
