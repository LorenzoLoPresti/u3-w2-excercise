import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "./CommentArea";
import SingleBook from "./SingleBook";
import { useState, setState } from "react";

const Booklist = (props) => {
  // state = {
  //   researchValue: "",
  //   research: this.props.category,
  //   asin: "",
  //   selected: false,
  //   bookAsin: null,
  // };

  const [researchValue, setResearchValue] = useState("");
  const [research, setResearch] = useState(props.category);
  // const [asin, setAsin] = useState("");
  const [selected, setSelected] = useState(false);
  const [bookAsin, setBookAsin] = useState(null);

  const filterBooks = () => {
    let arrayFiltrato = research.filter((element) => {
      return element.title.toLowerCase().includes(researchValue);
    });

    // this.setState({
    //   ...this.state,
    //   research: arrayFiltrato,
    // });

    setResearch(arrayFiltrato);
  };

  const asinSelector = (asin, selectBook) => {
    // this.setState({ ...this.state, bookAsin: asin, selected: selectBook });
    setBookAsin(asin);
    setSelected(selectBook);
  };

  console.log("booklist render", bookAsin);
  return (
    <>
      <Col xs={12} md={8}>
        <form className="d-flex justify-content-center mb-5">
          <input
            type="text"
            placeholder="Inserisci titolo"
            value={researchValue}
            onChange={(e) => setResearchValue(e.target.value.toLowerCase())}
          />
          <button
            type="button"
            className="p-2 px-3 ml-3 bg-secondary text-light"
            onClick={filterBooks}
          >
            Clicca qui
          </button>
        </form>
        <Container>
          <Row>
            {research
              .filter((element) => {
                return element.title.toLowerCase().includes(researchValue);
              })
              .map((elem, index) => {
                // this.setState({ ...this.state, asin: elem.asin });

                return (
                  <SingleBook
                    element={elem}
                    key={`libro numero ${index}`}
                    asin={elem.asin}
                    bookAsin={bookAsin}
                    asinSelector={asinSelector}
                    selected={selected}
                  />
                );
              })}
          </Row>
        </Container>
      </Col>
      <Col xs={12} md={4}>
        {<CommentArea asin={bookAsin} />}
      </Col>
    </>
  );
};

export default Booklist;
