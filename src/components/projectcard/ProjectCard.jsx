import './ProjectCard.css'
import { Card } from "@mui/joy";

export default function ProjectCard({ title, bgimg, link, readme }) {
  const backgroundStyle = {
    backgroundImage: `url(${bgimg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };
  return (
    <Card id="projectCard">
        <h2 className="projectTitle">{title}</h2>
        <a href={link} target="_blank" rel="noreferrer"><Card id="imgCard" style={backgroundStyle}></Card></a>
        <a href={readme} className="readMe">README</a>
    </Card>
  )
}
