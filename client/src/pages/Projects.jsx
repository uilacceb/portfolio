import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard"
import "./css/projectCard.css";
import { projectsList, stacks } from "./js/projectsList";
import { useEffect, useState } from "react";



const Projects = () => {

  const [filteredProjectList, setFilteredProjectList] = useState([]);


  useEffect(() => {
    setFilteredProjectList(projectsList)
  }, [])


  const handleFilter = (projectStack) => {
    const filteredProjects = projectsList.filter((item) => item.stack === projectStack);
    setFilteredProjectList(filteredProjects);
  };

  const handleShowAll = () => {
    setFilteredProjectList(projectsList);
  };
  return (
    <>
      {/* <section style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{ color: '#f7c059', fontSize: '7rem',  }}>Coming Soon...</h1>
      </section> */}
      <div>
        <div className="filter-buttons-section">
          <button className="filter-buttons" onClick={handleShowAll}>All</button>
          <button className="filter-buttons" onClick={() => handleFilter(stacks.FullStack)}>Full Stack</button>
          <button className="filter-buttons" onClick={() => handleFilter(stacks.Frontend)}>Frontend</button>
        </div>
        <section className="project-section">
          {filteredProjectList.map((proj) => {
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
      </div>
    </>
  );
};

export default Projects;
