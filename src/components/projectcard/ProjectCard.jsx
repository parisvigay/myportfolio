import './ProjectCard.css'
import { Card } from "@mui/joy";

export default function ProjectCard() {
  return (
    <Card id="projectCard">
        <h2 className="projectTitle">Project title</h2>
        <Card id="imgCard"></Card>
        <a href="" className="readMe">README</a>
    </Card>
  )
}
