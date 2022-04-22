const Experience = (props) => {
  function handleAddingNewExperience() {
    props.onBtnClick();
  }

  function onChanges(id, e) {
    props.onChanges(id, e);
  }

  function onRemove(id, e) {
    props.onRemove(id, e);
  }

  return (
    <div className="experience">
      <h2>Practical Experience</h2>
      {props.experiences.map((experience, idx) => {
        return (
          <div key={idx.toString()}>
            <div className="experienceItem">
              <label htmlFor="companyName">Company name</label>
              <textarea
                type="text"
                id="experiences"
                name="companyName"
                value={experience.companyName.text}
                onChange={(e) => onChanges(experience.id, e)}
              />
            </div>

            <div className="experienceItem">
              <label htmlFor="position">Position</label>
              <textarea
                type="text"
                id="experiences"
                name="position"
                value={experience.position.text}
                onChange={(e) => onChanges(experience.id, e)}
              />
            </div>

            <div className="experienceItem">
              <label htmlFor="mainTasks">Main tasks</label>
              <textarea
                className="mainTasks"
                type="text"
                id="experiences"
                name="mainTasks"
                value={experience.mainTasks.text}
                onChange={(e) => onChanges(experience.id, e)}
              />
            </div>

            <div className="experienceItem">
              <label htmlFor="startDate">From</label>
              <input
                type="date"
                id="experiences"
                name="startDate"
                value={experience.startDate.text}
                onChange={(e) => onChanges(experience.id, e)}
              ></input>
            </div>

            <div className="experienceItem">
              <label htmlFor="endDate">To</label>
              <input
                type="date"
                id="experiences"
                name="endDate"
                value={experience.endDate.text}
                onChange={(e) => onChanges(experience.id, e)}
              ></input>
              <button
                type="button"
                className="removeBtn"
                id="experiences"
                onClick={(e) => onRemove(experience.id, e)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <button type="button" onClick={handleAddingNewExperience}>
        Add More
      </button>
    </div>
  );
};

export default Experience;
