import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingNewEducation = this.handleAddingNewEducation.bind(this);
    this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
  }

  handleAddingNewEducation() {
    this.props.onBtnClick();
  }

  onChangeSchoolName(id, e) {
    console.log(e.target.value);
    this.props.handleSchoolNameChange(id, e);
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
                <input
                  type="text"
                  value={education.schoolName.text}
                  onChange={(e) => this.onChangeSchoolName(education.id, e)}
                ></input>
              </div>

              <div className="educationItem">
                <label htmlFor="studyTitle">Title of study</label>
                <input type="text" value={education.studyTitle.text}></input>
              </div>

              <div className="educationItem">
                <label htmlFor="startDate">From</label>
                <input type="date" value={education.startDate.text}></input>
              </div>

              <div className="educationItem">
                <label htmlFor="endDate">To</label>
                <input type="date" value={education.endDate.text}></input>
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
