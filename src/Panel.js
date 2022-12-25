import { useContext } from "react";
import Context from "./PageState";
import "./Panel.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

export default function Panel() {
  const page = useContext(Context);
  const [pagenumber, setPagenumber] = page;
  let activePage = null;
  function nextPage() {
    setPagenumber((pagenumber) => pagenumber + 1);
  }
  function prevPage() {
    setPagenumber((pagenumber) => pagenumber - 1);
  }
  const props = {
    nextPage: nextPage,
    prevPage: prevPage,
  };
  switch (pagenumber) {
    case 1:
      activePage = <Step1 {...props} />;
      break;
    case 2:
      activePage = <Step2 {...props} />;
      break;
    case 3:
      activePage = <Step3 {...props} />;
      break;
    case 4:
      activePage = <Step4 {...props} />;
      break;
    case 5:
      activePage = <Step5 />;
      break;
    default:
      activePage = undefined;
  }

  return <div className="panel">{activePage}</div>;
}
