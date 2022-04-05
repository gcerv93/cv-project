import React from "react";
import InfoForm from "./InfoForm";
import Skills from "./Skills";
import Education from "./Education";

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <h2>Personal Information</h2>
        <InfoForm />
        <Skills />
        <Education />
      </div>
    );
  }
}

export default Info;
