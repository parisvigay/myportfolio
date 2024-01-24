import './About.css'
import { Card } from "@mui/joy";

export default function About() {
  return (
    <div id="about">
      <h1 className="aboutTitle">ABOUT ME</h1>
      <div className="aboutAndInterests">
      <div className="aboutContainer">
        <div className="photoContainer"></div>
        <div className="aboutPContainer">
        <p className="aboutP">Software development is my first career. However, it is not the 
          first potential career I have explored. For half a year, I was an accounting apprentice at a property
          management firm, but realised that it was not for me, and shortly after, began considering what I really wanted
          to do as a career. My interest in software development sprouted after speaking with a family connection, 
          who is a software developer. I decided to explore the world of coding further, and my intrigue
          continued to grow.
        </p>
        <p className="aboutP">I value self-expression and translating my ideas into something meaningful and creative - which 
        is one of the reasons I knew coding would suit me well. On top of this, I've always thoroughly enjoyed problem-solving, 
        in any medium, so I knew I'd get great reward out of this career. I am still seeking out ways in which I can enhance and 
        add to my list of coding-based skills, and potentially, in the future, look to narrow down to a specific area of software 
        development that I get the most out of. 
        </p>
        </div>
      </div>
        <div className="interestsContainer">
          <h1 className="interestsHeading">General interests</h1>
          <div className="interestAndImg">
            <div className="interestContainer">
              <h2 className="interestsSubHeading">Music</h2>
              <p className="interestP">Whether it's listening to, playing, or composing and producing, music has always been my biggest passion 
              (this is made more obvious by a couple of my projects). I play the guitar, and have been lucky enough 
              to perform infront of people on multiple occasions - most memorably, Brighton Festival.
              </p>
            </div>
            <Card id="interestImgMusic"></Card>
          </div>
          <div className="interestAndImg">
          <Card id="interestImgNature"></Card>
          <div className="interestContainer">
            <h2 className="interestsSubHeading">Nature</h2>
            <p className="interestP">Since I can remember, I've had a love for the natural world, specifically wildlife. 
            I've always been fascinated by the different species and subspecies, and I really enjoy learning different facts about them.
            </p>
          </div>
          </div>
          <div className="interestAndImg">
            <div className="interestContainer">
              <h2 className="interestsSubHeading">Travelling</h2>
              <p className="interestP">Travelling is a passion of mine that's only grown the older I've gotten. Experiencing different cultures,
              foods and scenery are just a few reasons I love to explore different places. It may be sligtly bias considering my Greek-Cypriot
              heritage, but my favourite place to go is Greece - I could never get tired of it!
              </p>
            </div>
            <Card id="interestImgTravel"></Card>
          </div>
          <div className="interestAndImg">
          <Card id="interestImgFootball"></Card>
          <div className="interestContainer">
            <h2 className="interestsSubHeading">Football</h2>
            <p className="interestP">Another thing I'm very passionate about is football - specifically Spurs. Although, taking into 
            account the consistent disappointments they've made me endure, I wish it wasn't. 
            </p>
          </div>
          </div>
      </div>
      </div>
  </div>
  )
}