// Header.js

import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "./Header.css";

function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`navbar ${navColour ? "sticky" : ""} ${expand ? "expanded" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(!expand)}
          className={expand ? "toggled" : ""}
        >
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
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

function NavItem({ link, text, updateExpanded }) {
  return (
    <Nav.Item>
      <Nav.Link
        as={NavLink}
        to={link}
        onClick={() => updateExpanded(false)}
        activeClassName="active"
        className="nav-link"
      >
        {text}
        <div className="underline"></div>
      </Nav.Link>
    </Nav.Item>
  );
}

export default Header;
