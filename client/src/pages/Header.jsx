import Nav from './Nav'
import "./css/header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div className='rebecca'>
          <Link to="/"><span className='rebecca'>Rebecca</span></Link>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </>
  )
}

export default Header