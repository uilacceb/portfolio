import ProjectCard from "./ProjectCard";
import p1 from "../assets/projects/project1.png";
import p2 from "../assets/projects/project2.png";
import p3 from "../assets/projects/project3.png";
import p4 from "../assets/projects/project4.png";
import { Link } from "react-router-dom";
import "./css/projectCard.css";

const Projects = () => {
  return (
    <>
      {/* <section style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{ color: '#f7c059', fontSize: '7rem',  }}>Coming Soon...</h1>
      </section> */}
      <section className="project-section">
        {/*project 1*/}
        <Link to="https://fancy-counter-six.vercel.app/" target="_blank">
          <ProjectCard
            title="fancy counter"
            img={p1}
            description={
              <>
                Count up to 5 with basic version. Unlock the pro version to keep
                counting beyond 5!
                <br />
                <b>P.S.</b> You can use space to increase the number.
              </>
            }
            technologies="React, JS, CSS"
          />
        </Link>
        {/* project 2 */}
        <Link to="https://theater-app-frontend.vercel.app/" target="_blank">
          <ProjectCard
            title="Theater App"
            img={p2}
            description="The Theatre App is designed to tackle the dispersed structure of the theatre industry, where details and ticket sales are frequently distributed across various platforms, websites, and physical venues."
            technologies="React, JS, CSS, Node.js, MongoDB"
          />
        </Link>
        {/* project 3 */}
        <Link to="https://todolist-new-blond.vercel.app/" target="_blank">
          <ProjectCard
            title="To do list App"
            img={p3}
            description="This to-do app is perfect for anyone looking for a no-fuss way to keep track of their to-do lists. Built with a clean and intuitive design, it ensures that you can easily add new tasks, delete tasks, and mark tasks as complete with just a few clicks."
            technologies="React, JS, TailwindCSS, Node.js, MongoDB"
          />
        </Link>
        {/* project 4 */}
        <Link to="https://quiz-kappa-six.vercel.app/" target="_blank">
          <ProjectCard
            title="Quiz App"
            img={p4}
            description="This Quiz App is ideal for anyone looking to test their knowledge in a fun and interactive way. Featuring a simple and user-friendly interface, it allows users to easily start a quiz, answer questions, and view their results. "
            technologies="React, JS, TailwindCSS"
          />
        </Link>
      </section>
    </>
  );
};

export default Projects;
