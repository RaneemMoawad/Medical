import React, { useState, useEffect } from "react";
import { Container, NavDropdown, Navbar, Nav, Button } from "react-bootstrap";
import "./nav.css";
import logo from "../../pic/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbars() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={scrolled ? "scrolled" : "transparent"}
    >
      <Container>
        <div className="tazbeet">
          <Navbar.Brand href="/home">
            <img
              src={logo}
              alt="Logo"
              width="200px"
              height="50px"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="/aboutUs">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/ourTeam">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="/faq">FAQ's</NavDropdown.Item>
                <NavDropdown.Item href="/booking">Booking</NavDropdown.Item>
                <NavDropdown.Item href="/error">Error 404</NavDropdown.Item>
                <NavDropdown.Item href="/login">
                  Login/Register
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/service">Service</NavDropdown.Item>
                <NavDropdown.Item href="/serviceDetails">
                  Service Detail
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="/blog">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="/blogDetails">
                  Blog Detail
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact">Contact Us </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className="right-bar">
            <FontAwesomeIcon icon={faSearch} className="icon-search" />
            <FontAwesomeIcon icon={faPhone} className="icon-phone" />
            <Link className="phone-num">(+01) 999 888 777</Link>
            <Button className="contact-btn">
              contact us
              <FontAwesomeIcon icon={faChevronRight} className="cherv" />
            </Button>
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navbars;
