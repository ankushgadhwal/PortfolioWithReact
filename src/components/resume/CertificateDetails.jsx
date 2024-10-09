function CertificateDetails({ certificate }) {
  return (
    <div className="timeline-item">
      <h3>
        {certificate.title}
        <a href={certificate.certificateUrl}>(Certificate)</a>
      </h3>
      <span>Skill</span>
      <ul className="skill-list">
        {certificate.skills.map((skill, idxz) => (
          <li key={idxz}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default CertificateDetails;
