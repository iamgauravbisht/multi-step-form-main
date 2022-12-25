import React, { useState } from "react";
import Context from "./PageState";
import "./App.css";
import Panel from "./Panel";
import Sidebar from "./Sidebar";

function App() {
  const [pagenumber, setPagenumber] = useState(1);
  return (
    <div className="App">
      <Context.Provider value={[pagenumber, setPagenumber]}>
        <Sidebar />
        <Panel />
      </Context.Provider>
    </div>
  );
}

export default App;
