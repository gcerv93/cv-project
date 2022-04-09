import React from "react";
import ResumeInfo from "./ResumeInfo";
import ResumeSkills from "./ResumeSkills";

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

        <button type="button" onClick={this.onClickEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default ResumePage;
