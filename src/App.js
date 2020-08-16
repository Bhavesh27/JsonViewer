import React, { useState } from "react";
import JsonTree from "./components/JsonTree";
import "./App.css";

function App() {
  const [json, setJson] = useState(null);
  const [showJsonTree, setShowJsonTree] = useState(false);
  const [jsonObject, setJsonObject] = useState(null);

  const validate = () => {
    try {
      if (json) {
        const jsonObj = JSON.parse(json);
        setJsonObject(jsonObj);
        setShowJsonTree(true);
      } else {
        alert("Please Enter Json Object");
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <header className="header">Json Viewer</header>
      <div className="App">
        <h1 className="title">Paste Your Json Here</h1>
        <div className="App-body">
          <textarea
            onChange={(e) => setJson(e.target.value)}
            placeholder="Enter your Json Here"
          ></textarea>
          <button className="button" onClick={validate}>Load</button>
          <div className="output">
            {showJsonTree && <JsonTree data={jsonObject} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
