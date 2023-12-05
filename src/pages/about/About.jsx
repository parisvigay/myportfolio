import './About.css'
import { Card } from "@mui/joy";

export default function About() {
  return (
    <div className="aboutMain">
      <div className="aboutContainer">
        <div className="photoContainer"></div>
        <div className="aboutPContainer">
        <p className="aboutP">Software development is my first career. However, it is not the 
          first potential career I have explored. For half a year, I was an accounting apprentice at a property
          management firm, but realised that it was not for me, and shortly after, begun considering what I really wanted
          to do as a career. My interest in software development sprouted after speaking with a family connection, 
          who is a software developer. I decided to explore the world of coding further, and my intrigue
          continued to grow.
        </p>
        <p className="aboutP">I value expressing myself and translating my ideas into something meaningful and
          creative. This is part of the reason I knew coding would suit me well. On top of this, I've always thoroughly enjoyed
          problem solving, in any medium, so for me, I knew I'd get great reward out of this career. 
          I am still seeking out ways in which I can enhance and add to my list of coding-based skills, and potentially, 
          in the future look to narrow down to a certain area of software development that I get the most out of. 
        </p>
        </div>
      </div>
        <div className="interestsContainer">
          <h1 className="interestsHeading">General interests</h1>
          <div className="interestAndImg">
            <div className="interestContainer">
              <h2 className="interestsSubHeading">Music</h2>
              <p className="interestP">Whether it's listening to or playing, music has always been my biggest passion - 
              this is made more obvious by a couple of my projects. I play the guitar, and have been lucky enough 
              to perform infront of people a few times. Most memorably, Brighton Festival.
              </p>
            </div>
            <Card id="interestImgMusic"></Card>
          </div>
          <div className="interestAndImg">
          <Card id="interestImgNature"></Card>
          <div className="interestContainer">
            <h2 className="interestsSubHeading">Nature</h2>
            <p className="interestP">Since I can remember, I've had a love for the natural world and wildlife.
            </p>
          </div>
          </div>
          <div className="interestAndImg">
            <div className="interestContainer">
              <h2 className="interestsSubHeading">Travelling</h2>
              <p className="interestP">buebf efuheiu iudwiudbw duhwiuf wuidbwiud wyudbwuybd wduiwbd wyudbwuybd wduiwbd
            buebf efuheiu iudwiudbw duhwiuf wuidbwiud wyudbwuybd wduiwbd wyudbwuybd wduiwbd
            buebf efuheiu iudwiudbw duhwiuf wuidbwiud wyudbwuybd wduiwbd wyudbwuybd wduiwbd
              </p>
            </div>
            <Card id="interestImgTravel"></Card>
          </div>
          <div className="interestAndImg">
          <Card id="interestImgFootball"></Card>
          <div className="interestContainer">
            <h2 className="interestsSubHeading">Football</h2>
            <p className="interestP">One thing I'm very passionate about is football - specifically Spurs. Although, taking into 
            account the consistent disappointments they've made me endure, I wish it wasn't. 
            </p>
          </div>
          </div>
      </div>
  </div>
  )
}