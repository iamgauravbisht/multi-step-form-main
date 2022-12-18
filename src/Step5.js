import React from "react";
import "./Step5.css";
import img from "./assets/images/icon-thank-you.svg";

export default function Step5() {
  return (
    <div className="Step5">
      <img src={img} alt="" srcset="" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
