import React, { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  //Normal Approach
  // const removeItem = (id) => {
  //   let newPeople = people.filter((person) => person.id !== id);
  //   setPeople(newPeople);
  // };

  // Functional Approach
  const removeItem = (id) => {
    setPeople((prevState) => {
      let newPeople = prevState.filter((person) => person.id !== id);
      return newPeople;
    });
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
