import { Component } from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    bookComment: [],
    bookId: this.props.asin,
  };

  fetchBookComment = async () => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.state.bookId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWYwOWEyNDc4ZDAwMTNhMDU3ZjkiLCJpYXQiOjE2NzU5NDc3ODYsImV4cCI6MTY3NzE1NzM4Nn0.2YXclnflqU-pZ-sMCV-tQiDp1-XpA5QQoJaR1T-TIkQ",
        },
      }
    );

    if (response.ok) {
      const bookData = await response.json();
      console.log(this.props.asin);
      this.setState({ bookComment: bookData });
      console.log("librooooooo", this.state.bookComment);
    } else {
      alert("errore");
    }
  };

  componentDidMount() {
    this.fetchBookComment();
  }

  render() {
    return (
      <>
        <CommentList comments={this.state.bookComment} />
        <AddComment bookId={this.props.asin} />;
      </>
    );
  }
}

export default CommentArea;
