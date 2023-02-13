import { Component } from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentList";

class CommentArea extends Component {
  state = {
    bookComment: [],
    bookId: this.props.asin,
    refresh: 0,
  };

  fetchBookComment = async (bookId) => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWYwOWEyNDc4ZDAwMTNhMDU3ZjkiLCJpYXQiOjE2NzU5NDc3ODYsImV4cCI6MTY3NzE1NzM4Nn0.2YXclnflqU-pZ-sMCV-tQiDp1-XpA5QQoJaR1T-TIkQ",
        },
      }
    );

    if (response.ok) {
      const bookData = await response.json();

      this.setState({ bookComment: bookData });
    } else {
      alert("errore");
    }
  };

  refresh = (asin) => {
    this.setState({ ...this.state, refresh: asin });
  };

  componentDidMount() {
    this.state.bookId && this.fetchBookComment();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchBookComment(this.props.asin);
    }
  }

  render() {
    return (
      <>
        <CommentList comments={this.state.bookComment} />
        <AddComment bookId={this.props.asin} refresh={this.refresh} />;
      </>
    );
  }
}

export default CommentArea;
