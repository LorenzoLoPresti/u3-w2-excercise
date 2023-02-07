import { Container } from "react-bootstrap";

function Welcome() {
  return (
    <div
      class="jumbotron jumbotron-fluid text-light"
      style={{
        backgroundImage: `url("https://www.washingtonian.com/wp-content/uploads/2022/07/OldTownBooks-310-2048x1365.jpg")`,
      }}
    >
      <Container>
        <h1 class="display-4 fw-bold">BOOKSTOP</h1>
        <p class="lead">
          Non hanno ancora rubato i tuoi libri? Ci pensiamo noi!
        </p>
      </Container>
    </div>
  );
}
export default Welcome;
