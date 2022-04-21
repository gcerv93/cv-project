const ResumeInfo = (props) => {
  function displayName() {
    if (props.firstName.text !== "" || props.lastName.text !== "") {
      return (
        <p>Full name: {props.firstName.text + " " + props.lastName.text}</p>
      );
    }
  }

  function displayEmail() {
    if (props.email.text !== "") {
      return <p>Email: {props.email.text}</p>;
    }
  }

  function displayPhone() {
    if (props.phone.text !== "") {
      return <p>Phone: {props.phone.text}</p>;
    }
  }

  return (
    <div>
      {displayName()}
      {displayPhone()}
      {displayEmail()}
      <br></br>
    </div>
  );
};

export default ResumeInfo;
