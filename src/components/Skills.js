const Skills = (props) => {
  function handleAddingNewSkill() {
    props.onBtnClick();
  }

  function onChanges(id, e) {
    props.onChanges(id, e);
  }

  function onRemove(id, e) {
    props.onRemove(id, e);
  }

  return (
    <div className="skills">
      <h2>Skills</h2>
      {props.skills.map((skill, idx) => {
        return (
          <div className="skill" key={idx.toString()}>
            <label htmlFor="skill">Skill</label>
            <textarea
              type="text"
              id="skills"
              value={skill.text}
              onChange={(e) => onChanges(skill.id, e)}
            />
            <button
              type="button"
              className="removeBtn"
              id="skills"
              onClick={(e) => onRemove(skill.id, e)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={handleAddingNewSkill}>
        Add more
      </button>
    </div>
  );
};

export default Skills;
