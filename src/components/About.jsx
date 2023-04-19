import { useState } from "react";
import { Col, Container, Row, Button, Modal } from "react-bootstrap";


export default function About() {

  const [imgUrl, setImgUrl] = useState("https://picsum.photos/200/300" );

  return (
    <main>
      <Container >
        <Row >
          <Col sm={12}>
            <img src="imgUrl" 
            className="rounded-circle"
            alt="Profile" />
          </Col>

          <Col>
          <h1 className="mt-3">Jose Torres</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, magni odio odit perferendis ea temporibus in repellendus harum veniam iure cumque, sint nostrum! Nesciunt alias autem dolorem asperiores harum consequatur!</p>

      
          </Col>
        </Row>
      </Container>
    </main>
  );
}