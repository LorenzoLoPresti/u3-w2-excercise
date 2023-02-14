import { Row } from "react-bootstrap";
import Booklist from "./Booklist";

function MyMain(props) {
  return (
    <Row>
      <Booklist category={props.category} />
    </Row>
  );
}

export default MyMain;
