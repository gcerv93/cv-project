const Education = (props) => {
  function handleAddingNewEducation() {
    props.onBtnClick();
  }

  function onChanges(id, e) {
    props.onChanges(id, e);
  }

  function onRemove(id, e) {
    props.onRemove(id, e);
  }

  return (
    <div className="education">
      <h2>Education</h2>
      {props.educations.map((education, idx) => {
        return (
          <div key={idx.toString()}>
            <div className="educationItem">
              <label htmlFor="schoolName">School name</label>
              <textarea
                type="text"
                id="educations"
                name="schoolName"
                value={education.schoolName.text}
                onChange={(e) => onChanges(education.id, e)}
              />
            </div>

            <div className="educationItem">
              <label htmlFor="studyTitle">Title of study</label>
              <textarea
                type="text"
                id="educations"
                name="studyTitle"
                value={education.studyTitle.text}
                onChange={(e) => onChanges(education.id, e)}
              />
            </div>

            <div className="educationItem">
              <label htmlFor="startDate">From</label>
              <input
                type="date"
                id="educations"
                name="startDate"
                value={education.startDate.text}
                onChange={(e) => onChanges(education.id, e)}
              ></input>
            </div>

            <div className="educationItem">
              <label htmlFor="endDate">To</label>
              <input
                type="date"
                id="educations"
                name="endDate"
                value={education.endDate.text}
                onChange={(e) => onChanges(education.id, e)}
              ></input>
              <button
                type="button"
                className="removeBtn"
                id="educations"
                onClick={(e) => onRemove(education.id, e)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
      <button type="button" onClick={handleAddingNewEducation}>
        Add More
      </button>
    </div>
  );
};

export default Education;
