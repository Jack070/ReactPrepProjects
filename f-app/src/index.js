import React from "react";
import ReactDOM from "react-dom";

// Without using JSX
// function Greeting() {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h4", {}, "Hello World")
//   );
// }

// JSX Rules
// return single elememnt
// div / section / article or fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// Always return JSX
// Using JSX
function Greeting() {
  return (
    <div>
      <h1>This is first component</h1>
      <Person />
      <Message />
    </div>
  );
}

// Implicit return
const Person = () => <h3>Jayanta Kumar</h3>;

//Explicit return
const Message = () => {
  return <p>This is my message</p>;
};

ReactDOM.render(<Greeting />, document.getElementById("root"));
