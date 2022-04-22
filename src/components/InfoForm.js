import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const InfoForm = (props) => {
  function onChanges(id, e) {
    props.handleInputChanges(id, e);
  }

  function onChangePreview(e) {
    e.preventDefault();

    props.handlePreviewChange();
  }

  return (
    <div className="infoForm">
      <form>
        <ul>
          <li>
            <label htmlFor="firstName">First Name</label>
            <textarea
              type="text"
              name="firstName"
              value={props.firstName.text}
              onChange={(e) => onChanges(null, e)}
            />
          </li>

          <li>
            <label htmlFor="lastName">Last Name</label>
            <textarea
              type="text"
              name="lastName"
              value={props.lastName.text}
              onChange={(e) => onChanges(null, e)}
            />
          </li>

          <li>
            <label htmlFor="email">Email</label>
            <textarea
              type="email"
              name="email"
              value={props.email.text}
              onChange={(e) => onChanges(null, e)}
            />
          </li>

          <li>
            <label htmlFor="phone">Phone</label>
            <textarea
              type="text"
              name="phone"
              value={props.phone.text}
              onChange={(e) => onChanges(null, e)}
            />
          </li>
        </ul>

        <Skills
          skills={props.skills}
          onBtnClick={props.addSkillInput}
          onChanges={props.handleInputChanges}
          onRemove={props.handleRemovingInputs}
        />

        <Education
          educations={props.educations}
          onBtnClick={props.addEducationInput}
          onChanges={props.handleInputChanges}
          onRemove={props.handleRemovingInputs}
        />

        <Experience
          experiences={props.experiences}
          onBtnClick={props.addExperienceInput}
          onChanges={props.handleInputChanges}
          onRemove={props.handleRemovingInputs}
        />

        <button id="submitBtn" type="submit" onClick={onChangePreview}>
          Preview
        </button>
      </form>
    </div>
  );
};

export default InfoForm;
