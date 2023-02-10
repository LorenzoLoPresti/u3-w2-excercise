import { ListGroup } from "react-bootstrap";

function SingleComment(props) {
  return (
    <ListGroup className="mb-4">
      <ListGroup.Item
        style={{
          maxWidth: "98%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        <strong>{props.author}</strong>
      </ListGroup.Item>
      <ListGroup.Item
        style={{
          maxWidth: "98%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {props.comment}
      </ListGroup.Item>
      <ListGroup.Item
        style={{
          maxWidth: "98%",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {"voto " + props.rate + " su 5"}
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SingleComment;
