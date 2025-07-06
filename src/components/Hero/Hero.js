import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";
import Lottie from "lottie-react";
import astronaut from "../../Assets/Astronaut.json";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <TypeAnimation
              cursor={false}
              sequence={[
                "Daffa Riandhika",
                () => setShowSubtitle(true)
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 130 }}
              wrapper="h1"
              repeat={0}
            />
            {showSubtitle &&
              <TypeAnimation
                cursor={true}
                sequence={[
                  800,
                  "Don’t ask my name, it’s sculpted up there.",
                  1000,
                  "I code and fix broken shit.",
                  1000,
                  "I devour precision, perfection, and detail.",
                  1000,
                  "Just so you know, I’m not the 'nice' kind of person.",
                  1000,
                  "You really wanna be friends with someone cursed with LLI?",
                  1000,
                  "But still... you’re here. So... welcome, I guess.",
                  1000,
                  "Take a look. Touch nothing.",
                  1000,
                  "Projects? Sure. They're sharp, not pretty.",
                  1000,
                  () => setShowScrollDown(true),
                  1000,
                  "Don’t follow me. You won’t like where this leads.",
                  1000,
                  "Still here?",
                  1000,
                  "Good. Welcome to the abyss.",
                ]}
                speed={45}
                deletionSpeed={55}
                wrapper="h5"
                repeat={Infinity}
              />
            }
          </HeroLeft>
          <HeroRight>
              <Lottie
                animationData={astronaut}
                loop={true}
                autoplay={true}
                style={{ height: "320px", width: "auto", scale: "1.3" }}
              />
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && <ScrollAnimation animateIn="flipInX" offset={0}>
          <ScrollDown to="projects" id="scrollDown">
            <ScrollLink>
              Scroll down
              <img
                src="/scroll-down.svg"
                alt="scroll-down"
              />
            </ScrollLink>
          </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
