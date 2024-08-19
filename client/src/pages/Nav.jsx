import { Link } from "react-router-dom"
import "./css/nav.css"

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/"><a className="nav-link">Home</a></Link>
        <Link to="/about"><a className="nav-link">About</a></Link>
        <Link to="/skills"><a className="nav-link">Skills</a></Link>
        <Link to="/contact"><a className="nav-link">Contact</a></Link>
      </div>
    </>
  )
}

export default Nav