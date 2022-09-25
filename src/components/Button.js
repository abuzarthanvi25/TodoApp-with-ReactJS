import React from "react";

const Button = (props) => {
  return (
    <div className="wrapper">
      <button onClick={props.eventFunction}>
        {props.icon}
        {props.text}
      </button>
    </div>
  );
};

export default Button;
