import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              We provide high-quality services and products to our customers with
              passion and dedication.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#about" className="text-light text-decoration-none">View All Product</a></li>
            </ul>
          </Col>

          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@example.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
        </Row>

        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
