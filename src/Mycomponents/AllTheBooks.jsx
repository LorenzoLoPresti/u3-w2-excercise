import { Col, Container, Row, Card } from "react-bootstrap";
import books from "../data/scifi.json";

function AllTheBooks() {
  return (
    <Container>
      <Row>
        {books.map((elem, index) => {
          return (
            index < 24 && (
              <Col className="mb-4">
                <Card
                  style={{ width: "18rem", borderRadius: "20px" }}
                  key={index}
                  className="shadow-lg"
                >
                  <Card.Img
                    variant="top"
                    src={elem.img}
                    style={{
                      height: "400px",
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                    }}
                  />
                  <Card.Body
                    className="w-100"
                    style={{
                      maxWidth: "90%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Card.Title>{elem.title}</Card.Title>
                    <Card.Text>{elem.price + " €"}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          );
        })}
      </Row>
    </Container>
  );
}
export default AllTheBooks;
