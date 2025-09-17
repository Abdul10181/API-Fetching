import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ViewProducs() {
  //1. get id from current url
  const { id } = useParams();
  console.log(id);

  //2. define baseURL
  const baseUrl = `https://dummyjson.com/products/${id}`;

  //3. create a state for API fetching
  const [it, setIt] = useState({});

  //4. API fetching
  const Displayit = async () => {
    try {
      const result = await fetch(baseUrl);
      const ItData = await result.json();
      console.log(ItData);
      setIt(ItData);
    } catch (er) {
      console.log("Error " + er);
    }
  };

  useEffect(() => {
    Displayit();
  }, []);

  return (
    <div>
      <Container className="mt-4">
        <Row className="align-items-center">
          {/* Image Left */}
          <Col md={6} className="text-center">
            <img 
              src={it.thumbnail} 
              alt={it.title} 
              className="img-fluid rounded shadow" 
              style={{ maxWidth: '400px' }}
            />
          </Col>

          {/* Details Right */}
          <Col md={6}>
            <h3>{it.title}</h3>
            <p>{it.description}</p>
            <p><strong>Price:</strong> ${it.price}</p>
            <div className="d-flex gap-2">
              <Button variant="dark">Buy Now</Button>
              <Button variant="dark">Add to Cart</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ViewProducs;
