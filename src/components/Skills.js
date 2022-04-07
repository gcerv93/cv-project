import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        {this.props.skills.map((skill) => {
          return (
            <div className="skill">
              <label htmlFor="skill">Skill</label>
              <input type="text" value={skill.text}></input>
            </div>
          );
        })}
        <button type="button">Add more</button>
      </div>
    );
  }
}

export default Skills;
