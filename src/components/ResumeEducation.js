const ResumeEducation = (props) => {
  function displaySchoolName(edu) {
    if (edu.schoolName.text !== "") {
      return <p>School name: {edu.schoolName.text}</p>;
    }
  }

  function displayStudyTitle(edu) {
    if (edu.studyTitle.text !== "") {
      return <p>Title of study: {edu.studyTitle.text}</p>;
    }
  }

  function displayStartDate(edu) {
    if (edu.startDate.text !== "") {
      return <p>From: {edu.startDate.text}</p>;
    }
  }

  function displayEndDate(edu) {
    if (edu.endDate.text !== "") {
      return <p>To: {edu.endDate.text}</p>;
    }
  }

  function displayEducation() {
    if (props.educations.length > 0) {
      return (
        <div className="resumeEducation">
          <h2>Education</h2>
          {props.educations.map((education, idx) => {
            return (
              <div key={idx.toString()}>
                {displaySchoolName(education)}
                {displayStudyTitle(education)}
                {displayStartDate(education)}
                {displayEndDate(education)}
                <br></br>
              </div>
            );
          })}
        </div>
      );
    }
  }

  return <div>{displayEducation()}</div>;
};

export default ResumeEducation;
