import React from "react";
import ResumeInfo from "./ResumeInfo";

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

        <button type="button" onClick={this.onClickEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default ResumePage;
