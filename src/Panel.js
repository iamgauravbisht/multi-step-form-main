import React from "react";
import panelstyles from "./Panel.module.css";
import Step1 from "./Step1";
import Step2 from "./Step2";

export default function Panel() {
  return (
    <div className={panelstyles.panel}>
      {/* <Step1 /> */}
      <Step2 />
      {/* <Step3 /> */}
      {/* <Step4 /> */}
    </div>
  );
}
