import React from "react";

class ResumePage extends React.Component {
  render() {
    return (
      <div>
        <p>First name: {this.props.firstName.text}</p>
        <p>Last name: {this.props.lastName.text}</p>
        <p>Email: {this.props.email.text}</p>
        <p>Phone: {this.props.phone.text}</p>
      </div>
    );
  }
}

export default ResumePage;
