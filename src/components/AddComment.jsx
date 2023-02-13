import { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddComment extends Component {
  state = {
    verify: "verifica",
    review: "",
    rate: "",
  };

  postComment = async () => {
    // this.setState({ verifica: "mario" });
    // console.log(this.props.comments);
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWYwOWEyNDc4ZDAwMTNhMDU3ZjkiLCJpYXQiOjE2NzU5NDc3ODYsImV4cCI6MTY3NzE1NzM4Nn0.2YXclnflqU-pZ-sMCV-tQiDp1-XpA5QQoJaR1T-TIkQ",
          // content-type esprime il content type del body
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: this.state.review,
          rate: this.state.rate,
          elementId: this.props.bookId,
        }),
      }
    );
    if (response.ok) {
      let resJason = await response.json();
      console.log(resJason);
      this.props.refresh(resJason.elementId);
    } else {
      console.log(response);
      alert("errore", response);
    }
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicReview">
          <Form.Label>Inserisci recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci recensione"
            value={this.state.review}
            onChange={(e) => {
              this.setState({ ...this.state, review: e.target.value });
            }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicScore">
          <Form.Label>Inserisci voto</Form.Label>
          <Form.Control
            type="text"
            placeholder="1 - 5"
            value={this.state.rate}
            onChange={(e) =>
              this.setState({ ...this.state, rate: e.target.value })
            }
          />
        </Form.Group>
        {/* <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select> */}
        <Button
          variant="primary"
          onClick={(e) => {
            e.preventDefault();
            this.postComment();
          }}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddComment;

// https/token&s=harrypotter&y=2001
// usare postman //%20 spazio su fetch
