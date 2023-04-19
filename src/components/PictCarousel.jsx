import { Col, Container, Row, Carousel} from "react-bootstrap";


export default function PictCarousel () {

  return (
    <section>
      <Container className="carousel-container">
        <Row>
          <Col className="p-0">
        
            <Carousel.Item>
              <img src="https://picsum.photos/300/200?random=1"
              className="d-block w-100"
              alt="slide 1" />
              <Carousel.Caption>
              <h2>First Item</h2>
              <p>First item are great because theare the first.</p>
              </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item>
              <img src="https://picsum.photos/300/200?random=2"
              className="d-block w-100"
              alt="slide 1" />
              <Carousel.Caption>
              <h2>First Item</h2>
              <p>First item are great because theare the first.</p>
              </Carousel.Caption>
            </Carousel.Item>
           
            <Carousel.Item>
              <img src="https://picsum.photos/300/200?random=3"
              className="d-block w-100"
              alt="slide 1" />
              <Carousel.Caption>
              <h2>First Item</h2>
              <p>First item are great because theare the first.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Col>
        </Row>
      </Container>
    </section>
  )
}