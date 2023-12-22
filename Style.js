// Style.js
import React from "react";
import JustMer from "./JustMer.js";
import "./style.css";

const Style = () => {
  return (
    <div className="App">
      <header className="App-header">
        <JustMer />
      </header>
      <div className="content">
        <h2>Welcome to My Website</h2>
        <p>
          This is a simple React website created by Meryem Cevriye Kahya.
        </p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
        <p>
          Visit my <a href="https://www.linkedin.com/in/meryem-cevriye-kahya-37590629b">LinkedIn profile</a>.
        </p>
      </div>
    </div>
  );
};

export default Style;
