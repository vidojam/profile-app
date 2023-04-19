import { Col, Container, Row } from "react-bootstrap";

export default function Video() {

  return (
    <section >
      <Container>
       <Row>
        <Col>
        <h2>Video</h2>
        <p>Bunnies areb great because...</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/brNLmMMB-J4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Col>
       </Row>
      </Container>
    </section>
  )
}