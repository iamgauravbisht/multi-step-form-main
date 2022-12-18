import React from "react";
import "./Step3.css";

export default function Step3() {
  const content = [
    {
      h4: "Online service",
      p: "Access to multiplayer games",
      price: "+$1/mo ",
    },
    {
      h4: "Larger storage",
      p: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      h4: "Customizable Profile",
      p: "Custom theme on your profile",
      price: "+$2/mo",
    },
  ];
  return (
    <div className="step3">
      <h2>Pick add-ons</h2>
      <p className="margin-top">Add-ons help enhance your gaming experience.</p>
      {content.map((item) => {
        return (
          <div className="box">
            <div className="box__sub">
              <input type="checkbox" name="" id="" />
              <div>
                <h4>{item.h4}</h4>
                <p>{item.p}</p>
              </div>
            </div>

            <p>{item.price}</p>
          </div>
        );
      })}
      <button className="left__button">Go Back</button>
      <button className="right__button" type="submit">
        Next Step
      </button>
    </div>
  );
}
