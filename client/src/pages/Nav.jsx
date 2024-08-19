import { Link } from "react-router-dom"
import "./css/nav.css"

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/"><a className="nav-link">Home</a></Link>
        <Link to="/about"><span className="nav-link">About</span></Link>
        <Link to="/skills"><span className="nav-link">Skills</span></Link>
        <Link to="/projects"><span className="nav-link">Projects</span></Link>
        <Link to="/contact"><span className="nav-link">Contact</span></Link>
      </div>
    </>
  )
}

export default Nav