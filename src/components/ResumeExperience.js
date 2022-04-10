import React from "react";

class ResumeExperience extends React.Component {
  displayCompanyName(exp) {
    if (exp.companyName.text !== "") {
      return <p>Company name: {exp.companyName.text}</p>;
    }
  }

  displayPosition(exp) {
    if (exp.position.text !== "") {
      return <p>Position: {exp.position.text}</p>;
    }
  }

  displayMainTasks(exp) {
    if (exp.mainTasks.text !== "") {
      return <p>Main Tasks: {exp.mainTasks.text}</p>;
    }
  }

  displayStartDate(exp) {
    if (exp.startDate.text !== "") {
      return <p>From: {exp.startDate.text}</p>;
    }
  }

  displayEndDate(exp) {
    if (exp.endDate.text !== "") {
      return <p>To: {exp.endDate.text}</p>;
    }
  }

  displayExperience() {
    if (this.props.experiences.length > 0) {
      return (
        <div className="resumeExperience">
          <h2>Experience</h2>
          {this.props.experiences.map((experience, idx) => {
            return (
              <div key={idx.toString()}>
                {this.displayCompanyName(experience)}
                {this.displayPosition(experience)}
                {this.displayMainTasks(experience)}
                {this.displayStartDate(experience)}
                {this.displayEndDate(experience)}
                <br></br>
              </div>
            );
          })}
        </div>
      );
    }
  }
  render() {
    return <div>{this.displayExperience()}</div>;
  }
}

export default ResumeExperience;
