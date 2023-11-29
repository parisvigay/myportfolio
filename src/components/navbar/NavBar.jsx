import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaReact } from "react-icons/fa";
import { IoLogoVue } from "react-icons/io5";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { DiDjango } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";


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
            <Dropdown>
              <MenuButton id="menuBtn" variant="plain">SKILLS</MenuButton>
              <Menu id="menu" variant="plain">
                <MenuItem id="menuItem"><HtmlIcon id="menuIcon"/></MenuItem>
                <MenuItem id="menuItem"><CssIcon id="menuIcon"/></MenuItem>
                <MenuItem id="menuItem"><JavascriptIcon id="menuIcon"/></MenuItem>
                <MenuItem id="menuItem"><FaReact id="menuReactIcon"/></MenuItem>
                <MenuItem id="menuItem"><IoLogoVue id="menuReactIcon"/></MenuItem>
                <MenuItem id="menuItem"><SiMongodb id="menuReactIcon"/></MenuItem>
                <MenuItem id="menuItem"><DiNodejs id="menuIcon"/></MenuItem>
                <MenuItem id="menuItem"><FaPython id="menuReactIcon"/></MenuItem>
                <MenuItem id="menuItem"><BiLogoPostgresql id="menuIcon2"/></MenuItem>
                <MenuItem id="menuItem"><DiDjango id="menuIcon"/></MenuItem>
                <MenuItem id="menuItem"><GitHubIcon id="menuReactIcon"/></MenuItem>
              </Menu>
          </Dropdown>
        </nav>
    </div> 
  )
}