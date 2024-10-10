function PortfolioCard({ project }) {
  return (
    <div className="pic">
      <a href={project.link}>
        <img
          src={`./images/${project.imageName}.jpeg`}
          alt={project.imageName}
        />
      </a>
      <div className="img-caption">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default PortfolioCard;
