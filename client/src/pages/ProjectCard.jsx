import { Link } from "react-router-dom"
import "./css/projectCard.css"

const ProjectCard = ({ title, img, description, technologies, stack, url }) => {
  return (
    <>

      <div className="pc-container">

        <div className="project-title-div">
          <h2 className="project-title">{title}</h2>
        </div>
        <img src={img} width={370} height={200} alt="project screenshot"></img>
        <div className="description">
          <p><span className="tech-text">Description: </span><br></br>{description}</p>
          <p className="tech"><span className="tech-text">Technologies</span>: {technologies}</p>
        </div>

      </div>

    </>
  )
}

export default ProjectCard