function SkillDetails({ skill }) {
  return (
    <div className="progress-title">
      <span>{skill.title}</span>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${skill.rating} ` }}
        ></div>
      </div>
    </div>
  );
}

export default SkillDetails;
