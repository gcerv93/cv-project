import React from "react";
import ResumeInfo from "./ResumeInfo";
import ResumeSkills from "./ResumeSkills";
import ResumeEducation from "./ResumeEducation";

class ResumePage extends React.Component {
  constructor(props) {
    super(props);

    this.onClickEdit = this.onClickEdit.bind(this);
  }

  onClickEdit() {
    this.props.handlePreviewChange();
  }

  render() {
    return (
      <div>
        <ResumeInfo {...this.props} />
        <ResumeSkills {...this.props} />
        <ResumeEducation {...this.props} />

        <button type="button" onClick={this.onClickEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default ResumePage;
