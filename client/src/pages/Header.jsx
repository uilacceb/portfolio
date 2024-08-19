import Nav from './Nav'
import "./css/header.css"
// import { Link } from "react-router-dom"
import Menu from "../assets/menu.png"

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div className='rebecca'>
          <span className='rebecca-text'>Rebecca</span>
        </div>
        <div className='hbg-menu'>
          <img src={Menu} alt="Menu" />
        </div>
        <Nav />
      </div>
    </>
  )
}

export default Header