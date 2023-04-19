import { Container, Row, Col} from "react-bootstrap";

export default function Grid() {

  return (
    <section>
      <Container className="grid-container">
        <Row>
          <Col sm={12} md={4}>
            <h2>Why Boca Code?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum fugiat atque natus nemo mollitia optio non repellendus architecto assumenda? Officia aut eum ea assumenda corrupti ad porro perferendis soluta praesentium.</p>
          </Col>

          <Col sm={12} md={4}>
            <h2>Exciting Project</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis qui provident exercitationem, vitae aspernatur, corrupti quo sint deserunt nulla vero unde quidem cupiditate, accusantium expedita sapiente aliquam maiores voluptatum laudantium.</p>
          </Col>

          <Col>
            <h2>Ideal Work Place</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam culpa eveniet, aspernatur aut recusandae non dolore rem vero tempore veniam, nostrum corrupti ex ratione, nam consequuntur odio quibusdam numquam ullam.</p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

