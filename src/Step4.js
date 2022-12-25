import React, { useState } from "react";

export default function Step4(props) {
  const { nextPage, prevPage } = props;

  const content = [
    {
      text: "Online service",
      shortform: "os",
    },
    {
      text: "Larger storage",
      shortform: "ls",
    },
  ];
  const [monthly, yearly] = [
    {
      name: "Monthly",
      base: 9,
      os: 1,
      ls: 2,
      sign: "/mo",
    },
    {
      name: "Yearly",
      base: 90,
      os: 10,
      ls: 20,
      sign: "/yr",
    },
  ];
  const [price, setprice] = useState(monthly);
  function change() {
    setprice((old) => {
      if (old.name === "Yearly") {
        return monthly;
      } else {
        return yearly;
      }
    });
  }
  function total(price) {
    const sum = price.base + price.os + price.ls;
    return sum;
  }
  return (
    <div className="step4">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="cost__card__box">
        <div className="cost__card">
          <div className="cost__changer">
            <p>Arcade ({price.name})</p>
            <a onClick={change}>change</a>
          </div>
          <h4>
            ${price.base}
            {price.sign}
          </h4>
        </div>
        {content.map((item) => {
          return (
            <div className="cost__card">
              <p>{item.text}</p>
              <p>
                +${price[item.shortform]}
                {price.sign}
              </p>
            </div>
          );
        })}
        <div className="cost__card">
          <p>Total ({price.sign})</p>
          <h3>
            ${total(price)}
            {price.sign}
          </h3>
        </div>
      </div>
      <button className="left__button" onClick={prevPage}>
        Go Back
      </button>
      <button className="right__button" type="submit" onClick={nextPage}>
        Confirm
      </button>
    </div>
  );
}
