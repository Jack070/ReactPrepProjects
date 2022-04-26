import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "Hello World";
  // const secondValue = text && "Hello World";

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1> */}
      <h1>{text || "Jay Kumar"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>There is an error...</p>
      ) : (
        <div>
          <h2>There is no error...</h2>
        </div>
      )}
      {/* {text && <h1>Hello World</h1>}
      {!text && <h1>Hello World Again</h1>} */}
    </>
  );
};

export default ShortCircuit;
