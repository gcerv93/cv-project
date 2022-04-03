import React from "react";

class InfoForm extends React.Component {
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
        </form>
      </div>
    );
  }
}

export default InfoForm;
