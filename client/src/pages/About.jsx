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
            Hello! My name is <span className="about-rebecca-text">Rebecca</span>. I am a Front-end Developer focused on creating visual appealing and user friendly application.
          </p>

          <p className="introduction">
            Outside of coding, you&#39;ll likely find me exploring the city or soaking in the beauty of a park—or at home, bothering my cat with endless affection (or, as my cat would put it, testing the limits of his patience).
          </p>
          <div>
            <a id="download_button" href="/Rebecca Liu Resume.pdf" download>
              <button className="button-download">Download Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
