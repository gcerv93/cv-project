import React from "react";

class Education extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingNewEducation = this.handleAddingNewEducation.bind(this);
  }

  handleAddingNewEducation() {
    this.props.onBtnClick();
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
                <input type="text" value={education.schoolName.text}></input>
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
