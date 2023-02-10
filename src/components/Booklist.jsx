import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class Booklist extends Component {
  state = {
    researchValue: "",
    research: this.props.category,
  };

  filterBooks = () => {
    let arrayFiltrato = this.research.filter((element) => {
      return element.title.toLowerCase().includes(this.state.researchValue);
    });

    this.setState({
      ...this.state,
      research: arrayFiltrato,
    });
  };

  render() {
    return (
      <>
        <form className="d-flex justify-content-center mb-5">
          <input
            type="text"
            placeholder="Inserisci titolo"
            value={this.state.researchValue}
            onChange={(e) => {
              this.setState({
                researchValue: e.target.value.toLowerCase(),
              });
            }}
          />
          <button
            type="button"
            className="p-2 px-3 ml-3 bg-secondary text-light"
            onClick={this.filterBooks}
          >
            Clicca qui
          </button>
        </form>
        <Container>
          <Row>
            {this.state.research
              .filter((element) => {
                return element.title
                  .toLowerCase()
                  .includes(this.state.researchValue);
              })
              .map((elem, index) => (
                <SingleBook
                  element={elem}
                  key={`libro numero ${index}`}
                  asin={elem.asin}
                />
              ))}
          </Row>
        </Container>
      </>
    );
  }
}
export default Booklist;
