import React from "react";
import InfoForm from "./InfoForm";
import ResumePage from "./ResumePage";

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingSkillInput = this.handleAddingSkillInput.bind(this);

    this.state = {
      firstName: { text: "yolo" },
      lastName: { text: "bruh" },
      email: { text: "fdaf" },
      phone: { text: "fdafd" },

      skill: { text: "" },
      skills: [],

      education: { text: "" },
      educations: [],

      experience: { text: "" },
      experiences: [],

      preview: false,
    };
  }

  handleAddingSkillInput() {
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: { text: "" },
    });
  }

  display() {
    if (this.state.preview) {
      return <ResumePage {...this.state} />;
    }
    return (
      <InfoForm {...this.state} onBtnClick={this.handleAddingSkillInput} />
    );
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
