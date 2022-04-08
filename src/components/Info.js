import React from "react";
import InfoForm from "./InfoForm";
import ResumePage from "./ResumePage";
import uniqid from "uniqid";

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingSkillInput = this.handleAddingSkillInput.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handlePreviewChange = this.handlePreviewChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);

    this.state = {
      firstName: { text: "" },
      lastName: { text: "bruh" },
      email: { text: "fdaf" },
      phone: { text: "fdafd" },

      skill: { text: "", id: uniqid() },
      skills: [],

      education: { text: "" },
      educations: [],

      experience: { text: "" },
      experiences: [],

      preview: false,
    };
  }

  handleFirstNameChange(e) {
    this.setState({
      firstName: { text: e.target.value },
    });
  }

  handlePreviewChange() {
    this.setState((prevState) => {
      if (prevState.preview === true) {
        return { preview: false };
      } else {
        return { preview: true };
      }
    });
  }

  handleSkillChange(id, e) {
    this.setState((prevState) => {
      const skills = [...prevState.skills];
      const index = skills.findIndex((skill) => skill.id === id);

      skills[index].text = e.target.value;

      return { skills };
    });
  }

  handleAddingSkillInput() {
    this.setState({
      skills: this.state.skills.concat(this.state.skill),
      skill: { text: "", id: uniqid() },
    });
  }

  display() {
    if (this.state.preview) {
      return (
        <ResumePage
          {...this.state}
          handlePreviewChange={this.handlePreviewChange}
        />
      );
    }
    return (
      <InfoForm
        {...this.state}
        onBtnClick={this.handleAddingSkillInput}
        handleSkillChange={this.handleSkillChange}
        handlePreviewChange={this.handlePreviewChange}
        handleFirstNameChange={this.handleFirstNameChange}
      />
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
