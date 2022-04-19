import React from "react";
import ReactDOM from "react-dom";

// CSS Import
import "./index.css";

// function BookList() {
//   const firstBook = {
//     imgLink: "https://m.media-amazon.com/images/I/71WI1r5j6HS._AC_UY218_.jpg",
//     tiltle: "Animal Farm",
//     author: "George Orwell",
//   };

//   const secondBook = {
//     imgLink: "https://m.media-amazon.com/images/I/91Cy190qgBS._AC_UY218_.jpg",
//     tiltle: "Aesop’s Fables",
//     author: "Aesop",
//   };

//   return (
//     <section className="bookList">
//       <Book
//         tiltle={firstBook.tiltle}
//         author={firstBook.author}
//         imgLink={firstBook.imgLink}
//       >
//         {/* Children Props */}
//         <p>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s.
//         </p>
//       </Book>
//       <Book
//         tiltle={secondBook.tiltle}
//         author={secondBook.author}
//         imgLink={secondBook.imgLink}
//       />
//     </section>
//   );
// }

// // Props Destructuring in parameters
// // Accessing Children Props
// const Book = ({ imgLink, tiltle, author, children }) => {
//   //Props Destructuring
//   // const { imgLink, tiltle, author } = props;

//   return (
//     <article className="book">
//       <Image imgLink={imgLink} />
//       <Title tiltle={tiltle} />
//       <Author author={author} />
//       {children}
//     </article>
//   );
// };

const Image = (props) => {
  return <img src={props.imgLink} alt="" />;
};

const Title = (props) => {
  return <h1>{props.tiltle}</h1>;
};

// Inline styling
// Inline CSS has higher priority that imported CSS
const Author = (props) => {
  const myStyle = {
    color: "617d98",
    fontSize: "0.75rem",
    marginTop: "0.25rem",
  };
  return <h4 style={myStyle}>{props.author.toUpperCase()}</h4>;
};

// Proper List
const Books = [
  {
    id: 1,
    imgLink: "https://m.media-amazon.com/images/I/71WI1r5j6HS._AC_UY218_.jpg",
    tiltle: "Animal Farm",
    author: "George Orwell",
  },
  {
    id: 2,
    imgLink: "https://m.media-amazon.com/images/I/91Cy190qgBS._AC_UY218_.jpg",
    tiltle: "Aesop’s Fables",
    author: "Aesop",
  },
];

function BookList() {
  return (
    <section className="bookList">
      {Books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { imgLink, tiltle, author } = props.book;
  // Event Basics
  // attributes, eventHandler
  // onClick, onMouseOver
  // const clickHandler = () => {
  //   alert("Hello World");
  // };
  const clickHandler = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <Image imgLink={imgLink} />
      <Title tiltle={tiltle} />
      <Author author={author} />
      {/* <button type="button" onClick={clickHandler}>
        Referance Ex
      </button> */}
      {/* <button type="button" onClick={() => alert("Hello World")}>
        Inline Ex
      </button> */}
      <button type="button" onClick={() => clickHandler(author)}>
        Complex Ex
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
