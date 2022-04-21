const ResumeSkills = (props) => {
  function displaySkills() {
    if (props.skills.length > 0) {
      return (
        <div className="resumeSkills">
          <h2>Skills</h2>
          {props.skills.map((skill, idx) => {
            return <p key={idx.toString()}>{skill.text}</p>;
          })}
          <br></br>
        </div>
      );
    }
  }

  return <div>{displaySkills()}</div>;
};

export default ResumeSkills;
