import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingNewSkill = this.handleAddingNewSkill.bind(this);
    this.onChangeSkill = this.onChangeSkill.bind(this);
  }

  handleAddingNewSkill() {
    this.props.onBtnClick();
  }

  onChangeSkill(id, e) {
    this.props.handleSkillChange(id, e);
  }

  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        {this.props.skills.map((skill) => {
          return (
            <div className="skill">
              <label htmlFor="skill">Skill</label>
              <input
                type="text"
                value={skill.text}
                onChange={(e) => this.onChangeSkill(skill.id, e)}
              ></input>
            </div>
          );
        })}
        <button type="button" onClick={this.handleAddingNewSkill}>
          Add more
        </button>
      </div>
    );
  }
}

export default Skills;
