import React from "react";

class ResumeSkills extends React.Component {
  displaySkills() {
    if (this.props.skills.length > 0) {
      return (
        <div className="resumeSkills">
          <h2>Skills</h2>
          {this.props.skills.map((skill, idx) => {
            return <p key={idx.toString()}>{skill.text}</p>;
          })}
          <br></br>
        </div>
      );
    }
  }

  render() {
    return <div>{this.displaySkills()}</div>;
  }
}

export default ResumeSkills;
