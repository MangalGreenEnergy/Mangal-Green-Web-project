// Header.js

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import './Header.css';

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <Logo/>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/" onClick={() => updateExpanded(false)} activeClassName="active">
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/about"
                onClick={() => updateExpanded(false)}
                activeClassName="active"
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/services"
                onClick={() => updateExpanded(false)}
                activeClassName="active"
              >
                Services
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/contact"
                onClick={() => updateExpanded(false)}
                activeClassName="active"
              >
                Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/login"
                onClick={() => updateExpanded(false)}
                activeClassName="active"
              >
                Login
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={NavLink}
                to="/register"
                onClick={() => updateExpanded(false)}
                activeClassName="active"
              >
                Register
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
