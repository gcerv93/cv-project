import { useState } from "react";
import InfoForm from "./InfoForm";
import ResumePage from "./ResumePage";
import uniqid from "uniqid";

const Content = () => {
  const [state, setState] = useState({
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
  });

  function handleAddingSkillInput() {
    setState((prevState) => {
      return {
        ...prevState,
        skills: prevState.skills.concat(prevState.skill),
        skill: { text: "", id: uniqid() },
      };
    });
  }

  function handleAddingEducationInput() {
    setState((prevState) => {
      return {
        ...prevState,
        educations: prevState.educations.concat(prevState.education),
        education: {
          schoolName: { text: "" },
          studyTitle: { text: "" },
          startDate: { text: "" },
          endDate: { text: "" },
          id: uniqid(),
        },
      };
    });
  }

  function handleAddingExperienceInput() {
    setState((prevState) => {
      return {
        ...prevState,
        experiences: prevState.experiences.concat(prevState.experience),
        experience: {
          companyName: { text: "" },
          position: { text: "" },
          mainTasks: { text: "" },
          startDate: { text: "" },
          endDate: { text: "" },
          id: uniqid(),
        },
      };
    });
  }

  function handleInputChanges(id, e) {
    setState((prevState) => {
      if (e.target.id) {
        const subState = [...prevState[e.target.id]];
        const index = subState.findIndex((sub) => sub.id === id);

        if (e.target.name) {
          subState[index][e.target.name].text = e.target.value;
        } else {
          subState[index].text = e.target.value;
        }

        return { ...prevState, subState };
      }

      return { ...prevState, [e.target.name]: { text: e.target.value } };
    });
  }

  function handleRemovingInputs(id, e) {
    setState((prevState) => {
      const subState = [...prevState[e.target.id]];

      return {
        ...prevState,
        [e.target.id]: subState.filter((sub) => sub.id !== id),
      };
    });
  }

  function handlePreviewChange() {
    setState((prevState) => {
      if (prevState.preview === true) {
        return { ...prevState, preview: false };
      } else {
        return { ...prevState, preview: true };
      }
    });
  }

  function display() {
    if (state.preview) {
      return (
        <ResumePage {...state} handlePreviewChange={handlePreviewChange} />
      );
    }

    return (
      <InfoForm
        {...state}
        addSkillInput={handleAddingSkillInput}
        addEducationInput={handleAddingEducationInput}
        addExperienceInput={handleAddingExperienceInput}
        handleInputChanges={handleInputChanges}
        handleRemovingInputs={handleRemovingInputs}
        handlePreviewChange={handlePreviewChange}
      />
    );
  }

  return (
    <div className="content">
      <div className="info">
        <h2>Personal Information</h2>
        {display()}
      </div>
    </div>
  );
};

export default Content;
