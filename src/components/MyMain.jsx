import { Component } from "react";
import { Row } from "react-bootstrap";
import Booklist from "./Booklist";

class MyMain extends Component {
  render() {
    return (
      <Row>
        <Booklist category={this.props.category} />
      </Row>
    );
  }
}
export default MyMain;
