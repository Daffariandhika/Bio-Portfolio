import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/DaffaRiandhika.png"
            alt="Daffa Riandhika"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Muhammad Daffa Riandhika</strong>, and I’m from Indonesia. For the past three years, I've been pursuing my passion for technology at Gunadarma University, where I’m majoring in Informatics Systems program. Throughout my journey, I’ve gained valuable experience, exploring various aspects of the field, which has not only sharpened my technical skills but also deepened my understanding of how technology works.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My passion for problem-solving led me to pursue a degree in Informatics Systems at Gunadarma University. One of my proudest moments was winning <strong>1st place</strong> in the <strong>USB scientific article competition</strong> during my first year, which solidified my dedication to learning and innovation.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            My web development journey has been exciting, especially diving into the MERN stack, which helped me build modern web applications. I also challenged myself in a Python Code Jam 2023 on Discord, sharpening my problem-solving skills under pressure. Additionally, contributing to open-source projects has enhanced my coding and taught me the value of collaboration in the developer community.
              <div className="tagline2">
                Here is some of my skill:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
