import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation();
    const { pathname } = location;
  return (
    <div className="navContainer">
        <nav className="navBar" id="navLeft">
            <Link className={pathname === '/' ? 'activeLink' : ''} id="logoLink" style={{ textDecoration: 'none' }} to="/">PARIS VIGAY</Link>
        </nav>
        <nav className="navBar" id="navRight">
            <Link className={pathname === '/about' ? 'activeLink' : ''} id="link" style={{ textDecoration: 'none' }} to="/about">ABOUT</Link>
            <Link className={pathname === '/projects' ? 'activeLink' : ''} id="link" style={{ textDecoration: 'none' }} to="/projects">PROJECTS</Link>
            <Link className={pathname === '/skills' ? 'activeLink' : ''} id="link" style={{ textDecoration: 'none' }} to="/skills">SKILLS</Link>  
        </nav>
    </div> 
  )
}