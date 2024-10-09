import { Book, Briefcase } from "react-bootstrap-icons";
import resumeData from "../../resumeSchema.json";
import "./Resume.css";
import CertificateDetails from "../components/resume/CertificateDetails";
import SkillDetails from "../components/resume/SkillDetails";
function Resume() {
  return (
    <>
      <div className="page-heading">
        <h3 className="title">Resume</h3>
      </div>

      <div className="education">
        <span className="book-icon">
          <Book color="#FFDB6E" />
        </span>
        <h3 className="d-inline">Certificates</h3>
      </div>

      <div className="timeline">
        {resumeData.certificates.map((certificate, idx) => (
          <CertificateDetails certificate={certificate} key={idx} />
        ))}
      </div>

      <div className="education">
        <span className="book-icon">
          <Book color="#FFDB6E" />
        </span>
        <h3 className="d-inline">Education</h3>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <h3>M.Com - Department of Commerce</h3>
          <span>2017 - 2019</span>
          <p>
            A self-financed, two-year, full-time program affiliated with Veer
            Narmad South Gujarat University. The program offers specializations
            in accounting and finance.
          </p>
        </div>
      </div>

      <div className="education">
        <span className="book-icon">
          <Briefcase color="#FFDB6E" />
        </span>
        <h3 className="d-inline">Experience</h3>
      </div>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Vivid Web Solution</h3>
          <p className="mb-0">Jan 2022 - Apr 2024 (2 years 4 months)</p>
          <p>Surat, Gujarat, India - On site</p>
        </div>
      </div>

      <h2 className="skill-title">My Skills</h2>
      <div className="skill-box">
        {resumeData.skills.map((skill, idx) => (
          <SkillDetails skill={skill} key={idx} />
        ))}
      </div>
    </>
  );
}

export default Resume;
