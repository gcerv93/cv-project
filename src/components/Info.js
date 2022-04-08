import React from "react";
import InfoForm from "./InfoForm";
import ResumePage from "./ResumePage";
import uniqid from "uniqid";

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingSkillInput = this.handleAddingSkillInput.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleAddingEducationInput =
      this.handleAddingEducationInput.bind(this);
    this.handlePreviewChange = this.handlePreviewChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);

    this.state = {
      firstName: { text: "" },
      lastName: { text: "" },
      email: { text: "" },
      phone: { text: "" },

      skill: { text: "", id: uniqid() },
      skills: [],

      education: {
        schoolName: { text: "" },
        studyTitle: { text: "" },
        startDate: { text: "" },
        endDate: { text: "" },
      },
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

  handleLastNameChange(e) {
    this.setState({
      lastName: { text: e.target.value },
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: { text: e.target.value },
    });
  }

  handlePhoneChange(e) {
    this.setState({
      phone: { text: e.target.value },
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

  handleAddingEducationInput() {
    this.setState({
      educations: this.state.educations.concat(this.state.education),
      education: {
        schoolName: { text: "" },
        studyTitle: { text: "" },
        startDate: { text: "" },
        endDate: { text: "" },
      },
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
        addSkillInput={this.handleAddingSkillInput}
        handleSkillChange={this.handleSkillChange}
        addEducationInput={this.handleAddingEducationInput}
        handlePreviewChange={this.handlePreviewChange}
        handleFirstNameChange={this.handleFirstNameChange}
        handleLastNameChange={this.handleLastNameChange}
        handleEmailChange={this.handleEmailChange}
        handlePhoneChange={this.handlePhoneChange}
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
