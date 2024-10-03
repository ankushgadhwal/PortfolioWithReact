function Resume() {
  return (
    <>
      <div className="page-heading">
        <h3 className="title">Resume</h3>
      </div>

      <div className="education">
        <span className="book-icon d-inline-block">
          <i className="bi bi-book"></i>
        </span>
        <h3 className="d-inline">Certificates</h3>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <h3>
            I completed Full Stack Web Development from Apnacollege.
            <a href="https://www.apnacollege.in/certificate_v2/66b4d31180c9fe2a87035972/user/6575fe50594e365b8d0b1035">
              (Certificate)
            </a>
          </h3>
          <span>Skill</span>
          <ul className="skill-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>REST APIs</li>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>React.js</li>
            <li>Tailwind CSS</li>
            <li>Redux & Redux Toolkit</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>
            I completed Data Structures & Algorithms with Java from Apnacollege.
            <a href="https://www.apnacollege.in/certificate_v2/662f9454b676a6f0bf0547cb/user/6575fe50594e365b8d0b1035">
              (Certificate)
            </a>
          </h3>
          <span>Skill</span>
          <ul className="skill-list">
            <li>DSA</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>
            I completed The Complete JavaScript Course 2024: From Zero to
            Expert! from Udemy.
            <a href="https://www.udemy.com/certificate/UC-f743409e-b863-40e9-ac48-16370d755fa5/">
              (Certificate)
            </a>
          </h3>
          <span>Skill</span>
          <ul className="skill-list">
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>
            I completed React - The Complete Guide 2024 (incl. React Router &
            Redux) from Udemy.
            <a href="https://www.udemy.com/certificate/UC-1a46d1de-3532-474d-a290-9dbab32d94e0/">
              (Certificate)
            </a>
          </h3>
          <span>Skill</span>
          <ul className="skill-list">
            <li>React.js</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>
            I completed a Front-end Coding Course at Red & White Multimedia
            Education, Surat.
            <a href="https://www.rnwmultimedia.edu.in/">(Certificate)</a>
          </h3>
          <span>Skill</span>
          <ul className="skill-list">
            <li>HTML</li>
            <li>CSS/CSS3</li>
            <li>Jquery</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
          </ul>
        </div>
      </div>

      <div className="education">
        <span className="book-icon d-inline-block">
          <i className="bi bi-book"></i>
        </span>
        <h3 className="d-inline">Education</h3>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <h3>M.Com - Department of Commerce</h3>
          <span>2017 - 2019</span>
          <p>
            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit
            atque corrupti, quos dolores et quas molestias exceptur.
          </p>
        </div>
      </div>

      <div className="education">
        <span className="book-icon d-inline-block">
          <i className="bi bi-briefcase"></i>
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
        <div className="progress-title">
          <span>HTML 80%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="progress-title">
          <span>CSS 80%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "80%" }}></div>
          </div>
        </div>
        <div className="progress-title">
          <span>JavaScript 70%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "70%" }}></div>
          </div>
        </div>
        <div className="progress-title">
          <span>React.js 75%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="progress-title">
          <span>Angular.js 60%</span>
          <div className="progress">
            <div className="progress-bar" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
