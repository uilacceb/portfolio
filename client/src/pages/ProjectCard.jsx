import { Link } from "react-router-dom"
import "./css/projectCard.css"

const ProjectCard = ({ title, img, description, technologies }) => {
  return (
    <>

      <div className="pc-container">
        <Link to="https://e-commerce-beige-rho.vercel.app/" target="_blank">
          <div>
            <h2 className="project-title">{title}</h2>
          </div>
          <img src={img} width={370} height={200} alt="project 1 screenshot"></img>
          <div className="description">
            <p><span className="tech-text">Description: </span><br></br>{description}</p>
            <p className="tech"><span className="tech-text">Technologies</span>: {technologies}</p>
          </div>
        </Link>
      </div>

    </>
  )
}

export default ProjectCard