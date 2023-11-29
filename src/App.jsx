import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import CopyToClipboard from 'react-copy-to-clipboard';
import NavBar from './components/navbar/NavBar';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Contact from './pages/contact/Contact';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { FaReact } from "react-icons/fa";
import { useState } from 'react';

export default function App() {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  const [copied, setCopied] = useState(false);
  const [expandedEmail, setExpandedEmail] = useState(false);


  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500); // Reset 'copied' state after 1.5 seconds
  };

  const expandEmail = () => {
    setExpandedEmail(prevExpanded => !prevExpanded);
  }

  return (
    <div className="app">
      <NavBar />
      {isHomepage && (
      <main className="main">
          <div className="titleContainer">
            <h1 className="mainTitle">Hey, I'm Paris</h1>
            <p className="titleP">a UX-driven <span className="titleSpan">Software Engineer</span> with a keen eye for detail</p>
          </div>
          <div className="iconsContainer">
            <a className="socialLink" href="https://www.linkedin.com/in/paris-vigay-93a6b5208/" target="_blank">
              <div className="iconCircle">
                <LinkedInIcon id="icon"/>
              </div>
            </a>
            <div className={expandedEmail ? "expandedEmailContainer" : "emailContainer"} onClick={expandEmail}>
              <EmailIcon id={expandedEmail ? "expandedIcon" : "icon"}/>
              {expandedEmail && (
                <>
                <p className="emailP">parisvigay@outlook.com</p>
                <CopyToClipboard text="parisvigay@outlook.com" onCopy={handleCopy}>
                  <ContentCopyIcon id="copyIcon"/>
                </CopyToClipboard>
              </>
              )}
          </div>
            <a className="socialLink" href="https://github.com/parisvigay" target="_blank">
              <div className="iconCircle">
                <GitHubIcon id="icon"/>
              </div>
            </a>
          </div>
          {copied && <p className="copiedAlert">Copied</p>}
          <div className="pContainer">
            <p className="madeWith">This website was made using React JS</p> <FaReact id="reactIcon"/>
          </div>
      </main>
      )}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />}/>
        <Route path="/skills" element={<Contact />}/>
      </Routes>
    </div>
  );
}
