import React from "react";

class ResumeInfo extends React.Component {
  displayName() {
    if (this.props.firstName.text !== "" || this.props.lastName.text !== "") {
      return (
        <p>
          Full name:{" "}
          {this.props.firstName.text + " " + this.props.lastName.text}
        </p>
      );
    }
  }

  displayEmail() {
    if (this.props.email.text !== "") {
      return <p>Email: {this.props.email.text}</p>;
    }
  }

  displayPhone() {
    if (this.props.phone.text !== "") {
      return <p>Phone: {this.props.phone.text}</p>;
    }
  }

  render() {
    return (
      <div>
        {this.displayName()}
        {this.displayPhone()}
        {this.displayEmail()}
        <br></br>
      </div>
    );
  }
}

export default ResumeInfo;
