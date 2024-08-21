import Nav from './Nav'
import "./css/header.css"
import { Link } from "react-router-dom"
// import Menu from "../assets/menu.png"

const Header = () => {
  return (
    <>
      <div className='header-container'>
        <div className='rebecca'>
          <Link to="/">
            <span className='rebecca-text'>Rebecca <span className='liu-text'>Liu</span></span></Link>
        </div>
        {/* <div className='hbg-menu'>
          <img src={Menu} alt="Menu" />
        </div> */}
        <Nav />
      </div>
    </>
  )
}

export default Header