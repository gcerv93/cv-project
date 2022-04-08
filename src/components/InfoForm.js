import React from "react";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

class InfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.onChangePreview = this.onChangePreview.bind(this);
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
              <input type="text" id="firstName" />
            </li>

            <li>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" />
            </li>

            <li>
              <label htmlFor="email">Email</label>
              <input type="email" id="email"></input>
            </li>

            <li>
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone"></input>
            </li>
          </ul>

          <Skills
            skills={this.props.skills}
            onBtnClick={this.props.onBtnClick}
            handleSkillChange={this.props.handleSkillChange}
          />
          <Education />
          <Experience />
          <button id="submitBtn" type="submit" onClick={this.onChangePreview}>
            Preview
          </button>
        </form>
      </div>
    );
  }
}

export default InfoForm;
