import { useContext, useEffect } from "react";
import Context from "./PageState";
import "./Sidebar.css";

export default function Sidebar(props) {
  const content = ["YOUR INFO", "SELECT PLAN", "ADD ONS", "SUMMARY"];
  const page = useContext(Context);
  const [pagenumber] = page;
  useEffect(() => {
    document
      .querySelectorAll(".circle")
      .forEach((el) => el.classList.remove("active"));
    document.getElementById(`${pagenumber}`)?.classList.add("active");
  }, [pagenumber]);

  return (
    // Sidebar start
    <div className="sidebar">
      <div className="sidebar__sub">
        {/* Sub navigation  */}
        {content.map((item, index) => {
          return (
            <div className="sidebar__child">
              <div className="circle" id={index + 1}>
                {index + 1}
              </div>
              <div className="circle__info">
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
