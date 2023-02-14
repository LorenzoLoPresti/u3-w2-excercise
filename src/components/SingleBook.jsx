import { useState } from "react";
import { Col, Card } from "react-bootstrap";
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
  // state = {
  //   selected: false,
  // };

  const [selected, setSelected] = useState(false);

  return (
    <Col className="mb-4">
      <Card
        style={{
          width: "18rem",
          borderRadius: "20px",
          border: props.asin === props.bookAsin ? "2px solid red" : "",
        }}
        className="shadow-lg"
      >
        <Card.Img
          variant="top"
          src={props.element.img}
          style={{
            height: "400px",
            borderTopRightRadius: "20px",
            borderTopLeftRadius: "20px",
          }}
          // onClick={() => this.setState({ selected: !this.state.selected })}
          onClick={() => {
            props.asinSelector(props.asin, !props.selected);
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
          <Card.Title className="mb-5">{props.element.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {this.state.selected && <CommentArea asin={this.props.asin} />} */}
    </Col>
  );
};

export default SingleBook;
