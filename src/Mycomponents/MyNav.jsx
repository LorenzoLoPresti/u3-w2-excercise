import { Container, Nav, Navbar } from "react-bootstrap";

function MyNav(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="p-2 bg-dark text-light fs-4">
            Bookstop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">{props.home}</Nav.Link>
            <Nav.Link href="#">{props.about}</Nav.Link>
            <Nav.Link href="#">{props.browse}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
