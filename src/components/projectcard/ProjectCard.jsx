import './ProjectCard.css'
import { useState } from 'react';
import { Card } from "@mui/joy";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function ProjectCard({ title, bgimg, link, readme, projectInfo }) {
  const [expandedCard, setExpandedCard] = useState(false);

  const expandCard = () => {
    setExpandedCard(prevExpanded => !prevExpanded);
  }

  const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <div className="cardsContainer">
      <Card variant="plain" id={expandedCard ? "expandedProjectCard" : "projectCard"}>
        <a href={link} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer"><h2 className="projectTitle">{title}</h2></a>
          <Card id="imgCard" style={backgroundStyle}></Card>
          <a href={readme} target="_blank" rel="noreferrer" className="readMe">README</a>
          {!expandedCard && (
          <KeyboardDoubleArrowDownIcon id="projectDropDown" onClick={expandCard}/>
          )}
      </Card>
      {expandedCard && (
            <Card variant="plain" id="extraCard">
              {projectInfo}
              <KeyboardDoubleArrowUpIcon id="projectDropDownUp" onClick={expandCard}/> 
            </Card>
          )}
    </div>
  )
}
