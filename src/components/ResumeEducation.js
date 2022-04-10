import React from "react";

class ResumeEducation extends React.Component {
  displaySchoolName(edu) {
    if (edu.schoolName.text !== "") {
      return <p>School name: {edu.schoolName.text}</p>;
    }
  }

  displayStudyTitle(edu) {
    if (edu.studyTitle.text !== "") {
      return <p>Title of study: {edu.studyTitle.text}</p>;
    }
  }

  displayStartDate(edu) {
    if (edu.startDate.text !== "") {
      return <p>From: {edu.startDate.text}</p>;
    }
  }

  displayEndDate(edu) {
    if (edu.endDate.text !== "") {
      return <p>To: {edu.endDate.text}</p>;
    }
  }

  displayEducation() {
    if (this.props.educations.length > 0) {
      return (
        <div className="resumeEducation">
          <h2>Education</h2>
          {this.props.educations.map((education, idx) => {
            return (
              <div key={idx.toString()}>
                {this.displaySchoolName(education)}
                {this.displayStudyTitle(education)}
                {this.displayStartDate(education)}
                {this.displayEndDate(education)}
                <br></br>
              </div>
            );
          })}
        </div>
      );
    }
  }

  render() {
    return <div>{this.displayEducation()}</div>;
  }
}

export default ResumeEducation;
