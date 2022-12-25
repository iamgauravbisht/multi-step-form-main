import React from "react";

export default function Step1(props) {
  const { nextPage, prevPage } = props;
  return (
    <form action="" className="step1">
      <h2>Personal info</h2>
      <p className="margin-top">
        Please provide your name, email address, and phone number.
      </p>
      <label className="margin-top">Name</label>
      <input type="text" placeholder="e.g. Stephen King" />
      <label className="margin-top">Email Address</label>
      <input type="email" placeholder=" e.g. stephenking@lorem.com " />
      <label className="margin-top">Phone Number </label>
      <input
        type="tel"
        pattern="[0-9]{10}"
        title="Ten digits code"
        placeholder="e.g. 1234567890"
      />
      <button className="right__button" type="submit" onClick={nextPage}>
        Next Step
      </button>
    </form>
  );
}
