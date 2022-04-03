import React from "react";
import InfoForm from "./InfoForm";

class Info extends React.Component {
  render() {
    return (
      <div className="info">
        <h2>Personal Information</h2>
        <InfoForm />
      </div>
    );
  }
}

export default Info;
