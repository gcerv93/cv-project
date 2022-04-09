import React from "react";

class Skills extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddingNewSkill = this.handleAddingNewSkill.bind(this);
    this.onChanges = this.onChanges.bind(this);
  }

  handleAddingNewSkill() {
    this.props.onBtnClick();
  }

  onChanges(id, e) {
    this.props.onChanges(id, e);
  }

  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        {this.props.skills.map((skill, i) => {
          return (
            <div className="skill" key={i.toString()}>
              <label htmlFor="skill">Skill</label>
              <textarea
                type="text"
                id="skills"
                value={skill.text}
                onChange={(e) => this.onChanges(skill.id, e)}
              />
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
