import React from "react";

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
        <p>First name: {this.props.firstName.text}</p>
        <p>Last name: {this.props.lastName.text}</p>
        <p>Email: {this.props.email.text}</p>
        <p>Phone: {this.props.phone.text}</p>

        <button type="button" onClick={this.onClickEdit}>
          Edit
        </button>
      </div>
    );
  }
}

export default ResumePage;
