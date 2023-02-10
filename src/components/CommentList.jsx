import { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {
    singleComment: this.props.comments,
  };

  render() {
    console.log("singleComment", this.props.comments);
    return this.props.comments.map((element) => (
      <SingleComment
        author={element.author}
        comment={element.comment}
        rate={element.rate}
        key={element.id}
      />
    ));
  }
}
export default CommentList;
