const ResumeExperience = (props) => {
  function displayCompanyName(exp) {
    if (exp.companyName.text !== "") {
      return <p>Company name: {exp.companyName.text}</p>;
    }
  }

  function displayPosition(exp) {
    if (exp.position.text !== "") {
      return <p>Position: {exp.position.text}</p>;
    }
  }

  function displayMainTasks(exp) {
    if (exp.mainTasks.text !== "") {
      return <p>Main Tasks: {exp.mainTasks.text}</p>;
    }
  }

  function displayStartDate(exp) {
    if (exp.startDate.text !== "") {
      return <p>From: {exp.startDate.text}</p>;
    }
  }

  function displayEndDate(exp) {
    if (exp.endDate.text !== "") {
      return <p>To: {exp.endDate.text}</p>;
    }
  }

  function displayExperience() {
    if (props.experiences.length > 0) {
      return (
        <div className="resumeExperience">
          <h2>Experience</h2>
          {props.experiences.map((experience, idx) => {
            return (
              <div key={idx.toString()}>
                {displayCompanyName(experience)}
                {displayPosition(experience)}
                {displayMainTasks(experience)}
                {displayStartDate(experience)}
                {displayEndDate(experience)}
                <br></br>
              </div>
            );
          })}
        </div>
      );
    }
  }

  return <div>{displayExperience()}</div>;
};

export default ResumeExperience;
