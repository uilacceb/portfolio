import { useEffect, useState } from "react";
import Profile from "../assets/file.png";
import "./css/about.css";

const About = () => {
  const texts = ["Developer", "Web Developer", "Web Designer"];
  const speed = 100;
  const eraseSpeed = 50;
  const pauseDuration = 1500; // Pause for 1.5 seconds after typing a word

  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout;

    if (isTyping && characterIndex < texts[textIndex].length) {
      // Typing the text
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + texts[textIndex].charAt(characterIndex));
        setCharacterIndex((prev) => prev + 1);
      }, speed);
    } else if (isTyping && characterIndex === texts[textIndex].length) {
      // Pause after typing the entire word
      timeout = setTimeout(() => {
        setIsTyping(false); // Switch to erasing mode
      }, pauseDuration);
    } else if (!isTyping && displayedText.length > 0) {
      // Erasing the text
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, eraseSpeed);
    } else if (!isTyping && displayedText.length === 0) {
      // Switch to the next word
      setIsTyping(true);
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCharacterIndex(0);
    }

    return () => clearTimeout(timeout); // Cleanup timeout on each effect call
  }, [characterIndex, displayedText, isTyping, textIndex]);

  return (
    <section>
      <div className="about-container">
        <div className="profile-pic">
          <img src={Profile} alt="Profile" />
        </div>
        <div className="about-content">
          <h1>
            Hi, It&#39;s <span className="about-rebecca-text">Rebecca</span>
          </h1>
          <h3 className="typing-text">
            I&#39;m a <span className="about-rebecca-text">{displayedText}</span><span className="cursor">|</span>
          </h3>
          <p className="introduction">
            Hello! My name is <span className="about-rebecca-text">Rebecca</span>. I am a Front-end Developer, passionate about coding. With a background in Centennial College, I have developed strong skills in HTML, CSS, JavaScript, and React. I am always eager to learn and explore new things. I strive to bring creativity and dedication to everything I do.
          </p>
          <div>
            <a id="download_button" href="/YINING-LIU CV.pdf" download>
              <button className="button-download">Download CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
