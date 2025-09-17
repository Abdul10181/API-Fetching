import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiShoppingCart } from "react-icons/gi";
import { GiEternalLove } from "react-icons/gi";

function Header() {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" className="shadow-lg">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-warning">
            🛒 ShopEase
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link href="/" className="px-3 fw-semibold">
                Home
              </Nav.Link>
              <Nav.Link href="/product" className="px-3 fw-semibold">
                View All product
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#cart" className="fs-4 text-warning">
                <GiEternalLove />
                
                <GiShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
