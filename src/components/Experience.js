import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingNewExperience = this.handleAddingNewExperience.bind(this);
    this.onChanges = this.onChanges.bind(this);
  }

  handleAddingNewExperience() {
    this.props.onBtnClick();
  }

  onChanges(id, e) {
    this.props.onChanges(id, e);
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
                  onChange={(e) => this.onChanges(experience.id, e)}
                />
              </div>

              <div className="experienceItem">
                <label htmlFor="position">Position</label>
                <textarea
                  type="text"
                  id="experiences"
                  name="position"
                  value={experience.position.text}
                  onChange={(e) => this.onChanges(experience.id, e)}
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
                  onChange={(e) => this.onChanges(experience.id, e)}
                />
              </div>

              <div className="experienceItem">
                <label htmlFor="startDate">From</label>
                <input
                  type="date"
                  id="experiences"
                  name="startDate"
                  value={experience.startDate.text}
                  onChange={(e) => this.onChanges(experience.id, e)}
                ></input>
              </div>

              <div className="experienceItem">
                <label htmlFor="endDate">To</label>
                <input
                  type="date"
                  id="experiences"
                  name="endDate"
                  value={experience.endDate.text}
                  onChange={(e) => this.onChanges(experience.id, e)}
                ></input>
              </div>
              <br></br>
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
