import React from "react";
import "./Step1.css";

export default function Step1() {
  return (
    <form action="" className="step1">
      <h2>Personal info</h2>
      <p className="margin-top">
        Please provide your name, email address, and phone number.
      </p>
      <label className="margin-top" for="">
        Name
      </label>
      <input
        type="text"
        placeholder="e.g. Stephen King"
        required
        oninvalid="this.setCustomValidity('Please Enter valid email')"
      />
      <label className="margin-top" for="">
        Email Address
      </label>
      <input type="email" placeholder=" e.g. stephenking@lorem.com " required />
      <label className="margin-top" for="">
        Phone Number{" "}
      </label>
      <input
        type="tel"
        pattern="[0-9]{10}"
        title="Ten digits code"
        placeholder="e.g. 1234567890"
        required
      />
      <button className="right__button" type="submit">
        Next Step
      </button>
    </form>
  );
}
