import { useState, useEffect } from "react";

import AddComment from "./AddComment";
import CommentList from "./CommentList";

const CommentArea = (props) => {
  // state = {
  //   bookComment: [],
  //   bookId: this.props.asin,
  //   refresh: 0,
  // };

  const [bookComment, setBookComment] = useState([]);
  // const [bookId, useBookId] = useState(props.asin);
  const [refresh, setRefresh] = useState(0);

  const fetchBookComment = async (bookId) => {
    try {
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

        setBookComment(bookData);
      } else {
        alert("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshFunction = (asin) => {
    setRefresh({ asin });
  };

  // componentDidMount() {
  //   bookId && fetchBookComment();
  // }

  // useEffect(() => {
  //   fetchBookComment(props.asin);
  //   console.log("did mount");
  // }, []);

  // componentDidUpdate(prevProps) {
  //   if (prevProps.asin !== this.props.asin) {
  //     this.fetchBookComment(this.props.asin);
  //   }
  // }

  useEffect(() => {
    fetchBookComment(props.asin);
    console.log("ciao", props.asin);
  }, [props.asin]);

  return (
    <>
      <CommentList comments={bookComment} />
      <AddComment bookId={props.asin} refresh={refreshFunction} />
    </>
  );
};

export default CommentArea;

// import { Component } from "react";
// import AddComment from "./AddComment";
// import CommentList from "./CommentList";

// class CommentArea extends Component {
//   state = {
//     bookComment: [],
//     bookId: this.props.asin,
//     refresh: 0,
//   };

//   fetchBookComment = async (bookId) => {
//     try {
//       const response = await fetch(
//         `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
//         {
//           headers: {
//             Authorization:
//               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U0ZWYwOWEyNDc4ZDAwMTNhMDU3ZjkiLCJpYXQiOjE2NzU5NDc3ODYsImV4cCI6MTY3NzE1NzM4Nn0.2YXclnflqU-pZ-sMCV-tQiDp1-XpA5QQoJaR1T-TIkQ",
//           },
//         }
//       );
//       if (response.ok) {
//         const bookData = await response.json();

//         this.setState({ ...this.state, bookComment: bookData });
//       } else {
//         alert("errore");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const refreshFunction = (asin) => {
//   //   setRefresh({ asin });
//   // };

//   componentDidMount() {
//     this.state.bookId && this.fetchBookComment();
//   }

//   // useEffect(() => {
//   //   fetchBookComment(props.asin);
//   //   console.log("did mount");
//   // }, []);

//   componentDidUpdate(prevProps) {
//     if (prevProps.asin !== this.props.asin) {
//       this.fetchBookComment(this.props.asin);
//     }
//   }

//   // useEffect(() => {
//   //   fetchBookComment(props.asin);
//   //   console.log("ciao", props.asin);
//   // }, [props.asin]);
//   render() {
//     return (
//       <>
//         <CommentList comments={this.state.bookComment} />
//         <AddComment bookId={this.props.asin} refresh={this.refreshFunction} />
//       </>
//     );
//   }
// }

// export default CommentArea;
