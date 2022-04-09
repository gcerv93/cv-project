import React from "react";
import InfoForm from "./InfoForm";
import ResumePage from "./ResumePage";
import uniqid from "uniqid";

class Info extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingSkillInput = this.handleAddingSkillInput.bind(this);
    this.handleAddingEducationInput =
      this.handleAddingEducationInput.bind(this);
    this.handleInputChanges = this.handleInputChanges.bind(this);
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

      experience: { text: "" },
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
        handleInputChanges={this.handleInputChanges}
        handlePreviewChange={this.handlePreviewChange}
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
