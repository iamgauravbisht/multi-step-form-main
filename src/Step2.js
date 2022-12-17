import React from "react";
import "./Step2.css";

export default function Step2() {
  const content = [
    {
      url: "./assets/images/icon-arcade.svg",
      title: "Arcade",
      price: "$9/mo",
    },
    {
      url: "./assets/images/icon-advanced.svg",
      title: "Advanced",
      price: "$12/mo",
    },
    {
      url: "./assets/images/icon-pro.svg",
      title: "Pro",
      price: "$15/mo",
    },
  ];
  return (
    <div class="step2">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div class="tiles">
        {content.map((item) => {
          return (
            <button class="tile">
              <img src={item.url} alt="" srcset="" />
              <div class="tile__info">
                <h4>{item.title}</h4>
                <p>{item.price}</p>
              </div>
            </button>
          );
        })}
      </div>
      <div class="switch">
        <p>
          Monthly
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          Yearly
        </p>
      </div>

      <button class="left__button">Go Back</button>
      <button class="right__button" type="submit">
        Next
      </button>
    </div>
  );
}
