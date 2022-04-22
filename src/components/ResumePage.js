import ResumeInfo from "./ResumeInfo";
import ResumeSkills from "./ResumeSkills";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";

const ResumePage = (props) => {
  function onBtnClick() {
    props.handlePreviewChange();
  }

  return (
    <div>
      <ResumeInfo {...props} />
      <ResumeSkills {...props} />
      <ResumeEducation {...props} />
      <ResumeExperience {...props} />

      <button type="button" onClick={onBtnClick}>
        Edit
      </button>
    </div>
  );
};

export default ResumePage;
