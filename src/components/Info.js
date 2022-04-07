import React from "react";
import InfoForm from "./InfoForm";
import ResumePage from "./ResumePage";

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: { text: "yolo" },
      lastName: { text: "bruh" },
      email: { text: "fdaf" },
      phone: { text: "fdafd" },

      skill: { text: "" },
      skills: [{ text: "voila" }, { text: "yoo" }],

      education: { text: "" },
      educations: [],

      experience: { text: "" },
      experiences: [],

      preview: false,
    };
  }

  display() {
    if (this.state.preview) {
      return <ResumePage {...this.state} />;
    }
    return <InfoForm {...this.state} />;
  }

  render() {
    return (
      <div className="info">
        <h2>Personal Information</h2>
        {this.display()}
      </div>
    );
  }
}

export default Info;
