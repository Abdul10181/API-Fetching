import React from 'react'
import Container from "react-bootstrap/Container";

function LandingPage() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Container
        fluid
        className="p-0" // removes bootstrap padding
        style={{
          backgroundImage: "url('https://storage.googleapis.com/mageplaza.com/media/2023/12/08160743/online-fashion-shopping-with-computer_23-2150400628.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",   // full screen height
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
      </Container>
    </div>
  )
}

export default LandingPage;
