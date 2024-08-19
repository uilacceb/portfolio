import Nav from './Nav'
import "./css/header.css"
// import { Link } from "react-router-dom"
// import Menu from "../assets/menu.png"

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div className='rebecca'>
          <span className='rebecca-text'>Rebecca</span>
        </div>
        <div>
          <Nav />
        </div>
 
      </div>
    </>
  )
}

export default Header