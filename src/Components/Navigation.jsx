import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navigation() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="navbar-container">
        <div>
          <Navbar.Brand
            href="/"
            style={{ fontSize: "1.4rem", fontWeight: "bold" }}
          >
            Taakka-Ghar
          </Navbar.Brand>
        </div>

        <div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navbar-contents" href="/">
                Home
              </Nav.Link>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                className="navbar-contents"
              >
                <NavDropdown.Item href="services1">
                  Electrician
                </NavDropdown.Item>
                <NavDropdown.Item href="services2">Plumber</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="navbar-contents" href="contact">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigation;
