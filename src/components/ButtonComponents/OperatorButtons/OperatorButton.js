import React from "react";

const OperatorButton = ({ operator: { char }, operatorBtn }) => {
  return (
    <button onClick={operatorBtn} className="Operators-Btn">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {char}
    </button>
  );
};

export default OperatorButton;