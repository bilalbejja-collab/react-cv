import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1 },
      { id: 2, value: "Css", xp: 2 },
      { id: 3, value: "Php", xp: 1 },
      { id: 4, value: "Java", xp: 2 }
    ],
    frameworks: [
      { id: 1, value: "React", xp: 1 },
      { id: 2, value: "Bootstrap", xp: 2 },
      { id: 3, value: "Laravel", xp: 1 },
      { id: 4, value: "Angular", xp: 1 }
    ]
  };

  render() {
    let { languages } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languageDisplay"
          title="languages"
        />
        <ProgressBar />
      </div>
    );
  }
}

export default Languages;
