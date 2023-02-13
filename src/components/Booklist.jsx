import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";

class Booklist extends Component {
  state = {
    researchValue: "",
    research: this.props.category,
    asin: "",
    selected: false,
    bookAsin: null,
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

  asinSelector = (asin, selectBook) => {
    this.setState({ ...this.state, bookAsin: asin, selected: selectBook });
  };

  render() {
    console.log("booklist render", this.state.bookAsin);
    return (
      <>
        <Col xs={8}>
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
                .map((elem, index) => {
                  // this.setState({ ...this.state, asin: elem.asin });
                  return (
                    <SingleBook
                      element={elem}
                      key={`libro numero ${index}`}
                      asin={elem.asin}
                      bookAsin={this.state.bookAsin}
                      asinSelector={this.asinSelector}
                      selected={this.state.selected}
                    />
                  );
                })}
            </Row>
          </Container>
        </Col>
        <Col xs={4}>
          {this.state.bookAsin && <CommentArea asin={this.state.bookAsin} />}
        </Col>
      </>
    );
  }
}
export default Booklist;
