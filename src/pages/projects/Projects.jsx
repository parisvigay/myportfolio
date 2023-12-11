import './Projects.css'
import ProjectCard from "../../components/projectcard/ProjectCard";

export default function Projects() {
  return (
    <div className="projectsMain">
      <div className="projectsContainer">
        <ProjectCard 
          title="Mastermind game"
          bgimg="https://i.ibb.co/QrdWJFx/Screenshot-2023-11-29-at-12-33-26.png"
          link="https://parisvigay.github.io/mastermindGame/"
          readme="https://github.com/parisvigay/mastermindGame/blob/main/README.md"
        />
        <ProjectCard 
          title="TuneIn app"
          bgimg="https://i.ibb.co/xhD3rrz/Screenshot-2023-11-29-at-12-53-51.png"
          link="https://tunein-app.netlify.app/"
          readme="" 
        />
        <ProjectCard 
          title="Jammin app"
          bgimg="https://i.ibb.co/gWzDBDN/Screenshot-2023-12-07-at-14-02-23.png"
          readme=""
        />
        <ProjectCard 
          title="Paris Alexander (W.I.P)"
          bgimg=""
          readme=""
        />
      </div>
    </div>
  )
}
