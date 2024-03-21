import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messageStatus, setMessageStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessageStatus({ type: 'success', message: data.message });
      } else {
        setMessageStatus({ type: 'error', message: data.error });
      }
    } catch (error) {
      setMessageStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    }
  };

  return (
    <section id="contact" className="contact" style={{ padding: '50px 0' }}>
      <Container>
        <Row>
          <Col lg={6} className="d-flex align-items-center justify-content-center">
            <div data-aos="fade-up">
              <div style={{ height: '350px', width: '100%', position: 'relative', overflow: 'hidden', borderRadius: '10px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
              <div data-aos="fade-up">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3796.810154458761!2d77.5364100749047!3d17.894328488004025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec7e9e0f36e0b%3A0x47a77d5ce0a6e6cc!2sMANGAL%20GREEN%20ENERGY!5e0!3m2!1sen!2sin!4v1711004099133!5m2!1sen!2sin" 
                width="100%" height="450px" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>

              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
              <h2>Contact Us</h2>
              <p className="text-muted mb-4">Feel free to get in touch with us. We are available to answer your queries.</p>
              <hr />
              <Form className="php-email-form" onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="name">
                    <Form.Control type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                  </Form.Group>
                  <Form.Group as={Col} controlId="email">
                    <Form.Control type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Control type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Control as="textarea" rows={5} name="message" placeholder="Message" value={formData.message} onChange={handleInputChange} required />
                </Form.Group>
                <div className="my-3">
                  {messageStatus && (
                    <div className={`alert alert-${messageStatus.type}`} role="alert">
                      {messageStatus.message}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <Button type="submit" className="btn-lg btn-primary">Send Message</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col lg={4}>
            <div className="info text-center">
              <i className="bi bi-geo-alt"></i>
              <h4>Location:</h4>
              <p>MANGAL GREEN ENERGY, Haladkeri, Bidar, Karnataka 585401</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="info text-center">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>mangalgreenenergy3@gmail.com</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="info text-center">
              <i className="bi bi-phone"></i>
              <h4>Call:</h4>
              <p>+91 9370209686</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
