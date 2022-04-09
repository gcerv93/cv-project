import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingNewExperience = this.handleAddingNewExperience.bind(this);
  }

  handleAddingNewExperience() {
    this.props.onBtnClick();
  }

  render() {
    return (
      <div className="experience">
        <h2>Practical Experience</h2>
        {this.props.experiences.map((experience, idx) => {
          return (
            <div key={idx.toString()}>
              <div className="experienceItem">
                <label htmlFor="companyName">Company name</label>
                <textarea
                  type="text"
                  id="experiences"
                  name="companyName"
                  value={experience.companyName.text}
                />
              </div>

              <div className="experienceItem">
                <label htmlFor="position">Position</label>
                <textarea
                  type="text"
                  id="experiences"
                  name="position"
                  value={experience.position.text}
                />
              </div>

              <div className="experienceItem">
                <label htmlFor="mainTasks">Main tasks</label>
                <textarea
                  className="mainTasks"
                  type="text"
                  id="experiences"
                  name="mainTasks"
                  value={experience.mainTasks.text}
                />
              </div>

              <div className="experienceItem">
                <label htmlFor="startDate">From</label>
                <input
                  type="date"
                  id="experiences"
                  name="startDate"
                  value={experience.startDate.text}
                ></input>
              </div>

              <div className="experienceItem">
                <label htmlFor="endDate">To</label>
                <input
                  type="date"
                  id="experiences"
                  name="endDate"
                  value={experience.endDate.text}
                ></input>
              </div>
            </div>
          );
        })}
        <button type="button" onClick={this.handleAddingNewExperience}>
          Add More
        </button>
      </div>
    );
  }
}

export default Experience;
