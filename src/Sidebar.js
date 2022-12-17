import React from "react";
import barstyle from "./Sidebar.module.css";

export default function Sidebar() {
  const content = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    // Sidebar start
    <div className={barstyle.sidebar}>
      <div className={barstyle.sidebar__sub}>
        {/* Sub navigation  */}
        {content.map((item, index) => {
          return (
            <div className={barstyle.sidebar__child}>
              <div className={barstyle.circle}>{index + 1}</div>
              <div className={barstyle.circle__info}>
                <p>Step {index + 1}</p>
                <h5>{item}</h5>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
