import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingNewEducation = this.handleAddingNewEducation.bind(this);
    this.onChanges = this.onChanges.bind(this);
  }

  handleAddingNewEducation() {
    this.props.onBtnClick();
  }

  onChanges(id, e) {
    this.props.onChanges(id, e);
  }

  render() {
    return (
      <div className="education">
        <h2>Education</h2>
        {this.props.educations.map((education, idx) => {
          return (
            <div key={idx.toString()}>
              <div className="educationItem">
                <label htmlFor="schoolName">School name</label>
                <textarea
                  type="text"
                  id="educations"
                  name="schoolName"
                  value={education.schoolName.text}
                  onChange={(e) => this.onChanges(education.id, e)}
                />
              </div>

              <div className="educationItem">
                <label htmlFor="studyTitle">Title of study</label>
                <textarea
                  type="text"
                  id="educations"
                  name="studyTitle"
                  value={education.studyTitle.text}
                  onChange={(e) => this.onChanges(education.id, e)}
                />
              </div>

              <div className="educationItem">
                <label htmlFor="startDate">From</label>
                <input
                  type="date"
                  id="educations"
                  name="startDate"
                  value={education.startDate.text}
                  onChange={(e) => this.onChanges(education.id, e)}
                ></input>
              </div>

              <div className="educationItem">
                <label htmlFor="endDate">To</label>
                <input
                  type="date"
                  id="educations"
                  name="endDate"
                  value={education.endDate.text}
                  onChange={(e) => this.onChanges(education.id, e)}
                ></input>
              </div>
              <br></br>
            </div>
          );
        })}
        <button type="button" onClick={this.handleAddingNewEducation}>
          Add More
        </button>
      </div>
    );
  }
}

export default Education;
