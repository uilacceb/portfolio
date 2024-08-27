import ProjectCard from "./ProjectCard"
import p1 from "../assets/projects/project1.png"
import { Link } from "react-router-dom"


const Projects = () => {

  return (
    <>
      {/* <section style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{ color: '#f7c059', fontSize: '7rem',  }}>Coming Soon...</h1>
      </section> */}
      <section>

        <ProjectCard title='E-commerce shopping' img={p1} description="A shopping website that allows users to add items to their cart and automatically displays the total price of all items added" technologies="React, JS, TailwindCSS" />

      </section>
    </>
  )
}

export default Projects