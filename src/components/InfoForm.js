import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChangePreview = this.onChangePreview.bind(this);
    this.onChanges = this.onChanges.bind(this);
  }

  onChanges(id, e) {
    this.props.handleInputChanges(id, e);
  }

  onChangePreview(e) {
    e.preventDefault();

    this.props.handlePreviewChange();
  }

  render() {
    return (
      <div className="infoForm">
        <form>
          <ul>
            <li>
              <label htmlFor="firstName">First Name</label>
              <textarea
                type="text"
                name="firstName"
                value={this.props.firstName.text}
                onChange={(e) => this.onChanges(null, e)}
              />
            </li>

            <li>
              <label htmlFor="lastName">Last Name</label>
              <textarea
                type="text"
                name="lastName"
                value={this.props.lastName.text}
                onChange={(e) => this.onChanges(null, e)}
              />
            </li>

            <li>
              <label htmlFor="email">Email</label>
              <textarea
                type="email"
                name="email"
                value={this.props.email.text}
                onChange={(e) => this.onChanges(null, e)}
              />
            </li>

            <li>
              <label htmlFor="phone">Phone</label>
              <textarea
                type="text"
                name="phone"
                value={this.props.phone.text}
                onChange={(e) => this.onChanges(null, e)}
              />
            </li>
          </ul>

          <Skills
            skills={this.props.skills}
            onBtnClick={this.props.addSkillInput}
            onChanges={this.props.handleInputChanges}
            onRemove={this.props.handleRemovingInputs}
          />

          <Education
            educations={this.props.educations}
            onBtnClick={this.props.addEducationInput}
            onChanges={this.props.handleInputChanges}
            onRemove={this.props.handleRemovingInputs}
          />

          <Experience
            experiences={this.props.experiences}
            onBtnClick={this.props.addExperienceInput}
            onChanges={this.props.handleInputChanges}
          />

          <button id="submitBtn" type="submit" onClick={this.onChangePreview}>
            Preview
          </button>
        </form>
      </div>
    );
  }
}

export default InfoForm;
