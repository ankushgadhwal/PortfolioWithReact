import "./Portfolio.css";
import projectData from "../../portfolioSchema.json";
import { useState } from "react";
import Btn from "../components/Btn";
import PortfolioCard from "../components/portfolio/PortfolioCard";

function Portfolio() {
  const [projects, setProjects] = useState(projectData);
  const [activeTab, setActiveTab] = useState("all");

  const handleClick = (e, kind) => {
    e.preventDefault();
    setActiveTab(kind);
    setProjects(projectData.filter((p) => p.languages.includes(kind)));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setProjects(
      projectData.filter((p) => p.languages.includes(e.target.value))
    );
  };

  return (
    <>
      <div className="page-heading">
        <h3 className="title">Portfolio</h3>
      </div>

      <div className="portfolio-content">
        <select
          onChange={(e) => handleChange(e)}
          id="allproject"
          className="form-select"
          aria-label="Default select example"
          name="selectedCategory"
          defaultValue="all"
        >
          <option value="all">Select Category</option>
          <option value="sass">SASS</option>
          <option value="css">CSS/CSS3</option>
          <option value="bootstrap">BOOTSTRAP</option>
          <option value="media">Media Query</option>
        </select>

        <div className="categories btn-group">
          <Btn
            onClick={(e, kind) => handleClick(e, kind)}
            project={"all"}
            activeTab={activeTab}
          >
            All
          </Btn>
          <Btn
            onClick={(e, kind) => handleClick(e, kind)}
            project={"fullstack"}
            activeTab={activeTab}
          >
            Fullstack
          </Btn>
          <Btn
            onClick={(e, kind) => handleClick(e, kind)}
            project={"react"}
            activeTab={activeTab}
          >
            React
          </Btn>
          <Btn
            onClick={(e, kind) => handleClick(e, kind)}
            project={"javascript"}
            activeTab={activeTab}
          >
            Javascript
          </Btn>
          <Btn
            onClick={(e, kind) => handleClick(e, kind)}
            project={"sass"}
            activeTab={activeTab}
          >
            Sass
          </Btn>
          <Btn
            onClick={(e, kind) => handleClick(e, kind)}
            project={"bootstrap"}
            activeTab={activeTab}
          >
            Bootstrap
          </Btn>
          <Btn
            onClick={(e, kind) => handleClick(e, kind)}
            project={"mediaQuery"}
            activeTab={activeTab}
          >
            Media Query
          </Btn>
        </div>

        <div className="photo-gallery">
          {projects?.map((project, idx) => (
            <PortfolioCard project={project} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
