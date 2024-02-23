import './Projects.css'
import ProjectCard from "../../components/projectcard/ProjectCard";

export default function Projects() {
  return (
    <div id="projectsMain">
      <h1 className="projectsTitle">PROJECTS</h1>
      <div className="projectsContainer">
        <ProjectCard 
          title="Mastermind"
          bgimg="https://i.ibb.co/QrdWJFx/Screenshot-2023-11-29-at-12-33-26.png"
          link="https://parisvigay.github.io/mastermindGame/"
          readme="https://github.com/parisvigay/mastermindGame/blob/main/README.md"
          projectInfo="My first project, a simple browser game made with HTML, CSS and vanilla Javascript. It combines logic with aesthetic to produce a clean, user-friendly version of the popular code breaking game, Master Mind."
        />
        <ProjectCard 
          title="TuneIn"
          bgimg="https://i.ibb.co/xhD3rrz/Screenshot-2023-11-29-at-12-53-51.png"
          link="https://tunein-app.netlify.app/"
          readme="https://github.com/parisvigay/unit_2_project_frontend/blob/main/README.md"
          projectInfo="My second project, a music-based social media app, built using Vue.js for the frontend, and Express js for the backend. It allows users to recommend artists, songs and albums to other users and to express their musical favourites." 
        />
        <ProjectCard 
          title="Jammin"
          bgimg="https://i.ibb.co/gWzDBDN/Screenshot-2023-12-07-at-14-02-23.png"
          link="https://jammin.up.railway.app/"
          readme="https://parisvigay.netlify.app"
          projectInfo="My third project was an application built for bands to track their songs and rehearsals. It was built with a React.js frontend and a Python Django backend."
        />
        <ProjectCard 
          title="Hoppa"
          bgimg="https://i.ibb.co/dDxvnPL/Screenshot-2024-02-08-at-13-53-28.png"
          link="https://parisvigay.netlify.app"
          readme="https://parisvigay.netlify.app"
          projectInfo="A MERN stack app for users to keep record of and rate nearby pubs, or ones they've visited, and create 'pub-trails', allowing them to plan out their evenings more efficiently."
        />
      </div>
    </div>
  )
}
