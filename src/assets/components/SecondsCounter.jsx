import React from "react";
import ReactDOM from "react-dom";

const SecondsCounter = (props) => {
  return (
    <>
      <div className="container bg-dark d-flex justify-content-center">
        <div className="clock">
          <i className="fa-regular fa-clock"></i>
        </div>
        <div className="digit six">{props.digitSix}</div>
        <div className="digit five">{props.digitFive}</div>
        <div className="digit four">{props.digitFour}</div>
        <div className="digit three">{props.digitThree}</div>
        <div className="digit two">{props.digitTwo}</div>
        <div className="digit one">{props.digitOne}</div>
      </div>
    </>
  );
};

export default SecondsCounter;

let counter = 0;
setInterval(function () {
  const six = Math.floor(counter / 100000) % 10;
  const five = Math.floor(counter / 10000) % 10;
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = Math.floor(counter / 1) % 10;
  counter++;
  ReactDOM.render(
    <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} />,
    document.getElementById("root")
  );
}, 1000);
