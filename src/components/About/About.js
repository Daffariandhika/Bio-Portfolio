import { AboutWrapper } from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <AboutWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div className="AboutBio">

            <ScrollAnimation animateIn="fadeInLeft">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m a self taught developer who thrives in solitude and gets shit done. I learn by breaking things until they work, not by listening to someone drone on about it. Theory? Were you even paying attention? I’m addicted to precision, obsessed with perfection, and wired to dissect detail. They call it low latent inhibition, I call it never missing a single goddamn thing. I’m not special. I’m not a beautiful or unique snowflake, I’m the same decaying organic matter as everything else.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Creativity isn’t a spark, it’s the Sandman whispering nightmares into your ear, while logic is the One keeping you shackled to the bed, constantly reminding you that Nothing Else Matters but the cold, hard, inescapable truth of your impending doom. I’d rather bleed on the paper than cheat my way out. I’ll take an “E” with clean hands before I stain them with comfort and lies. Dignity isn't currency. My integrity isn't for barter. Because What we do in life, echoes in eternity.
            </ScrollAnimation>

            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I don’t usually explain myself, but if this reads like a manifesto? Good. If it feels frightening, that’s because it’s a path toward enlightenment and Only after disaster can we be resurrected. If it seems like I don’t care, it’s because I care too much about the right things. What you see isn’t branding, you’re looking at the side effects of insanity and a refusal to fake a damn thing. I'm not here to find boundaries. If you're looking for a buddy, go to a goddamn playground. If you're looking for clean code wrapped in madness, welcome to the abyss.
            </ScrollAnimation>

          </div>
        </div>
      </div>
    </AboutWrapper>
  );
}

export default About;
