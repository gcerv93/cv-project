import React from "react";
import InfoForm from "./InfoForm";
import ResumePage from "./ResumePage";
import uniqid from "uniqid";

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingSkillInput = this.handleAddingSkillInput.bind(this);
    this.handleSkillChanges = this.handleSkillChanges.bind(this);

    this.handleAddingEducationInput =
      this.handleAddingEducationInput.bind(this);
    this.handleEducationChanges = this.handleEducationChanges.bind(this);

    this.handlePreviewChange = this.handlePreviewChange.bind(this);

    this.handleInputChanges = this.handleInputChanges.bind(this);

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
        id: uniqid(),
      },
      educations: [],

      experience: { text: "" },
      experiences: [],

      preview: false,
    };
  }

  handleInputChanges(e) {
    this.setState({
      [e.target.name]: { text: e.target.value },
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

  handleSkillChanges(id, e) {
    this.setState((prevState) => {
      const skills = [...prevState.skills];
      const index = skills.findIndex((skill) => skill.id === id);

      skills[index].text = e.target.value;

      return { skills };
    });
  }

  handleEducationChanges(id, e) {
    this.setState((prevState) => {
      const educations = [...prevState.educations];
      const index = educations.findIndex((education) => education.id === id);

      educations[index][e.target.name].text = e.target.value;

      return { educations };
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
        id: uniqid(),
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
        handleSkillChange={this.handleSkillChanges}
        addEducationInput={this.handleAddingEducationInput}
        handlePreviewChange={this.handlePreviewChange}
        handleInputChanges={this.handleInputChanges}
        handleEducationChanges={this.handleEducationChanges}
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
