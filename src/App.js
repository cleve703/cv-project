import React, { Component } from "react";
import General from "./components/General"
import Education from "./components/Education"
import Practical from "./components/Practical"

class App extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div className="cv-main">
        <General />
        <Practical />
        <Education />
      </div>
    )
  }
}

export default App;
