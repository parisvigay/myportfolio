import './ProjectCard.css'
import { Card } from "@mui/joy";

export default function ProjectCard({ title, bgimg, link, readme, projectInfo }) {

  const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <div className="cardsContainer">
      <Card variant="plain" id="projectCard" style={backgroundStyle}>
          <a href={link} style={{ textDecoration: "none" }} target="_blank" rel="noreferrer"><h2 className="projectTitle">{title}</h2></a>
          <a href={readme} target="_blank" rel="noreferrer" className="readMe">Readme</a>
      </Card>
          <Card variant="plain" id="extraCard">
            {projectInfo} 
          </Card>
    </div>
  )
}
