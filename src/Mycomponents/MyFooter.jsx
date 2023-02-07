import { Row, Col } from "react-bootstrap";

function MyFooter({ aboutUs, jobs, contacts, textColor, heightValue }) {
  return (
    <footer className="p-5 bg-dark mt-5" style={{ height: heightValue + "px" }}>
      <Row className="text-center px-5">
        <Col>
          <a className={textColor} href="#AboutUs">
            {aboutUs}
          </a>
        </Col>
        <Col>
          <a className={textColor} href="#Jobs">
            {jobs}
          </a>
        </Col>
        <Col>
          <a className={textColor} href="#Contacts">
            {contacts}
          </a>
        </Col>
      </Row>
    </footer>
  );
}

export default MyFooter;
