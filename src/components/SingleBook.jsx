import { Component } from "react";
import { Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col className="mb-4">
        <Card
          style={{
            width: "18rem",
            borderRadius: "20px",
            border: this.state.selected ? "2px solid red" : "",
          }}
          className="shadow-lg"
        >
          <Card.Img
            variant="top"
            src={this.props.element.img}
            style={{
              height: "400px",
              borderTopRightRadius: "20px",
              borderTopLeftRadius: "20px",
            }}
            onClick={() => this.setState({ selected: !this.state.selected })}
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
            <Card.Title className="mb-5">{this.props.element.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea asin={this.props.asin} />}
      </Col>
    );
  }
}
export default SingleBook;
