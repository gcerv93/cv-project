import React from "react";
import InfoForm from "./InfoForm";
import ResumePage from "./ResumePage";
import uniqid from "uniqid";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingSkillInput = this.handleAddingSkillInput.bind(this);
    this.handleAddingEducationInput =
      this.handleAddingEducationInput.bind(this);
    this.handleAddingExperienceInput =
      this.handleAddingExperienceInput.bind(this);
    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handleRemovingInputs = this.handleRemovingInputs.bind(this);
    this.handlePreviewChange = this.handlePreviewChange.bind(this);

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

      experience: {
        companyName: { text: "" },
        position: { text: "" },
        mainTasks: { text: "" },
        startDate: { text: "" },
        endDate: { text: "" },
        id: uniqid(),
      },
      experiences: [],

      preview: false,
    };
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

  handleAddingExperienceInput() {
    this.setState({
      experiences: this.state.experiences.concat(this.state.experience),
      experience: {
        companyName: { text: "" },
        position: { text: "" },
        mainTasks: { text: "" },
        startDate: { text: "" },
        endDate: { text: "" },
        id: uniqid(),
      },
    });
  }

  handleInputChanges(id, e) {
    this.setState((prevState) => {
      if (e.target.id) {
        const subState = [...prevState[e.target.id]];
        const index = subState.findIndex((sub) => sub.id === id);

        if (e.target.name) {
          subState[index][e.target.name].text = e.target.value;
        } else {
          subState[index].text = e.target.value;
        }

        return { subState };
      }

      return { [e.target.name]: { text: e.target.value } };
    });
  }

  handleRemovingInputs(id, e) {
    this.setState((prevState) => {
      const subState = [...prevState[e.target.id]];

      return { [e.target.id]: subState.filter((sub) => sub.id !== id) };
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
        addEducationInput={this.handleAddingEducationInput}
        addExperienceInput={this.handleAddingExperienceInput}
        handleInputChanges={this.handleInputChanges}
        handleRemovingInputs={this.handleRemovingInputs}
        handlePreviewChange={this.handlePreviewChange}
      />
    );
  }

  render() {
    return (
      <div className="content">
        <div className="info">
          <h2>Personal Information</h2>
          {this.display()}
        </div>
      </div>
    );
  }
}

export default Content;
