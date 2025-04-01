import csharp from "../assets/logos/c-sharp.png"
import css from "../assets/logos/css-3.png"
// import db from "../assets/logos/database.png"
import expressJS from "../assets/logos/express.png"
import html from "../assets/logos/html.png"
import js from "../assets/logos/js.png"
import node from "../assets/logos/nodejs.png"
import react from "../assets/logos/react.png"
import tailwind from "../assets/logos/Tailwind_CSS_Logo.svg"
import java from "../assets/logos/java.png"
import python from "../assets/logos/python.png"
import "./css/skill.css"

const Skills = () => {
  return (
    <>
      <section>

        <div className="development">
          <div className="frontend">
            <h2>Programmings</h2>
            <ul>
              <li className="skill-list"><img src={html} alt='HTML5' className="skill-icon" />HTML5</li>
              <li className="skill-list"><img src={css} alt='CSS3' className="skill-icon" /> CSS3</li>
              <li className="skill-list"><img src={tailwind} alt='TailwindCSS' className="skill-icon" /> TailwindCSS</li>
              <li className="skill-list"><img src={js} alt='JavaScript' className="skill-icon" /> JavaScript</li>
              <li className="skill-list"><img src={csharp} alt='csharp' className="skill-icon" /> C#</li>
              <li className="skill-list"><img src={java} alt='java' className="skill-icon" /> Java</li>
              <li className="skill-list"><img src={python} alt='python' className="skill-icon" /> Python</li>
            </ul>
          </div>

          <div className="backend">
            <h2>Framework/Library</h2>
            <ul>
              <li className="skill-list"><img src={node} alt='node' className="skill-icon" /> Node.js</li>
              <li className="skill-list"><img src={react} alt='React' className="skill-icon" /> React/React Native</li>
              <li className="skill-list"><img src={expressJS} alt='expressJS' className="skill-icon" /> Express.js</li>
            </ul>
          </div>

          <div className="addition-skill">
            <h2>Addition Skills</h2>
            <ul>
              <li className="skill-list">RESTful API Development</li>
              <li className="skill-list">Version Control (Git/GitHub)</li>
              <li className="skill-list">Database ( SQL/MongoDB)</li>
            </ul>
          </div>
        </div>

      </section>
    </>
  )
}

export default Skills