import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./container/Posts";

function App() {
  return (
    <div className="container">
      <h1 className="text-center"> Welcome to Blog Site</h1>

      <div className="d-flex mt-5 flex-column ">
        <Posts />
      </div>
    </div>
  );
}

export default App;
