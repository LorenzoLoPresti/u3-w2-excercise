import { useState, useEffect } from "react";
import SingleComment from "./SingleComment";

const CommentList = (props) => {
  // state = {
  //   singleComment: this.props.comments,
  // };

  const [singleComment, setSingleComment] = useState(props.comments);

  useEffect(() => {
    console.log(props.comments);
  });
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

// // import { useState, useEffect } from "react";
// import { Component } from "react";
// import SingleComment from "./SingleComment";

// class CommentList extends Component {
//   state = {
//     singleComment: this.props.comments,
//   };

//   // const [singleComment, setSingleComment] = useState(props.comments);

//   // useEffect(() => {
//   //   console.log(props.comments);
//   // });
//   render() {
//     console.log("awawa", this.props.comments);
//     return this.props.comments.map((element) => (
//       <SingleComment
//         author={element.author}
//         comment={element.comment}
//         rate={element.rate}
//         key={element.id}
//       />
//     ));
//   }
// }

// export default CommentList;
