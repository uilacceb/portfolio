import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <>
      <Link to="/"><a>Home</a></Link>
      <Link to="/about"><a>About</a></Link>
      <Link to="/skills"><a>Skills</a></Link>
      <Link to="/contact"><a>Contact</a></Link>
    </>
  )
}

export default Nav