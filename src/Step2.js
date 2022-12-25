import React from "react";
import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";

export default function Step2(props) {
  const { nextPage, prevPage } = props;

  const content = [
    {
      svg: arcade,
      title: "Arcade",
      price: "$9/mo",
    },
    {
      svg: advanced,
      title: "Advanced",
      price: "$12/mo",
    },
    {
      svg: pro,
      title: "Pro",
      price: "$15/mo",
    },
  ];
  return (
    <div className="step2">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="tiles">
        {content.map((item) => {
          return (
            <button className="tile">
              <img src={item.svg} alt="" />
              <div className="tile__info">
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
            </button>
          );
        })}
      </div>
      <div className="switch">
        <p>
          Monthly
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          Yearly
        </p>
      </div>

      <button className="left__button" onClick={prevPage}>
        Go Back
      </button>
      <button className="right__button" type="submit" onClick={nextPage}>
        Next Step
      </button>
    </div>
  );
}
