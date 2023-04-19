import { Col, Container, Row } from "react-bootstrap";


export default function HeroBanner () {

  return(
    <section>
      <Container fluid className="bg-danger">
        <Row>
          <Col className="text-center">
            Email: myemail@gmail.com
          </Col>
        </Row>
      </Container>
    </section>
  )


}