import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [messageStatus, setMessageStatus] = useState(null);
  const form = useRef();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8byfes8', 'template_qppw32z', form.current, {
        publicKey: 'gXW-Pbhw4DWF9KJbZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <section id="contact" className="contact" style={{ padding: '100px 0' }}>
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
              <form ref={form} onSubmit={sendEmail} className="contact-form">
  <input type='text' placeholder='Full name' name='user_name' required className="input-field"></input>
  <input type='email' placeholder='Email' name='user_email' required className="input-field"></input>
  <input type='text' placeholder='Subject' name='subject' required className="input-field"></input>
  <textarea name='message' cols="30" rows="10" placeholder="Your message" className="textarea-field"></textarea>
  <button type='submit' className="submit-button">Send Message</button>
</form>

              
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
