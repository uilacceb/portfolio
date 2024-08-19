
import Profile from "../assets/file.png"
import "./css/about.css"

const About = () => {
  return (
    <>
      <section>
        <div className="about-container">
          <div className="profile-pic">
            <img src={Profile} ></img>
          </div>
          <div className="about-content">
            <h1>Hi, It&#39;s <span className="about-rebecca-text">Rebecca</span></h1>
            <h3 className="typing-text">I&#39;m a <span className="about-rebecca-text"></span></h3>
            <p className="introduction">Hello! My name is <span className="about-rebecca-text">Rebecca</span>. I am a Frond-end Developer, passionate about coding. With a background in Centennial College, I have developed a strong HTML, CSS JavaScript and React. I am always eager to learn and explore new things. I strive to bring creativity and dedication to everything I do.</p>
            <div>
              <a id='download_button' href="/Rebecca Yining Liu CV.pdf" download>
                <button className='button-download'>Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About