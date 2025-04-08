import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard"
import "./css/projectCard.css";
import { projectsList } from "./js/projectsList";



const Projects = () => {
  return (
    <>
      {/* <section style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{ color: '#f7c059', fontSize: '7rem',  }}>Coming Soon...</h1>
      </section> */}
      <section className="project-section">
        {projectsList.map((proj) => {
          // Check if the URL is external (starts with http or https)
          const isExternal = /^https?:\/\//.test(proj.url);

          return (
            <>
              {isExternal ? (
                <a href={proj.url} target="_blank" rel="noopener noreferrer">
                  <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    technologies={proj.technologies}
                    img={proj.img}
                  />
                </a>
              ) : (
                <Link to={proj.url}>
                  <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    technologies={proj.technologies}
                    img={proj.img}
                  />
                </Link>
              )}
            </>
          );
        })}
      </section>
    </>
  );
};

export default Projects;
