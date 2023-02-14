import { Component, useState } from "react";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  // state = {
  //   singleComment: this.props.comments,
  // };

  const [singleComment, setSingleComment] = useState(props.comments);

  return props.comments.map((element) => (
    <SingleComment
      author={element.author}
      comment={element.comment}
      rate={element.rate}
      key={element.id}
    />
  ));
};

export default CommentList;
