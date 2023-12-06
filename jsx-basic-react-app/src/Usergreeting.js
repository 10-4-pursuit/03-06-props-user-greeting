import React, { useState } from "react";


const Usergreeting = (props) => {
  const userName = [
    "Daniel",
    "Azmain",
    "Sara",
    "Monique",
    "Amira",
    "Steven",
    "Maliq",
  ];

  const [userNameIndex, setUserNameIndex] = useState(0);
  const onNextClick = () => {
    setUserNameIndex((userNameIndex + 1) % userName.length);
  };

  const onBackClick = () => {
    setUserNameIndex((userNameIndex - 1) % userName.length);
  };

  const onResetClick = () => {
    setUserNameIndex(0);
  };

  return (
    <div>
      <h1>Hello! {userName[userNameIndex]} </h1>
      <button className="back" onClick={onBackClick}>
        Back
      </button>
      <button className="next" onClick={onNextClick}>
        Next
      </button>
      <button className="reset" onClick={onResetClick}>
        Reset
      </button>
    </div>
  );
};

export default Usergreeting;


