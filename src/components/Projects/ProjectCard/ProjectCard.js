import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  TechCardContainer,
  TechCard,
  BtnGroup,
  cardVariants,
} from "./ProjectCardElements";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionCard = motion(Card);

function ProjectCard() {
  return (
    <>
      {ProjectList.map((list, index) => (
        <MotionCard
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <CardLeft>
            <img src={list.img} alt={list.name} />
          </CardLeft>
          <CardRight>
            <h4>{list.title}</h4>
            <p>{list.description}</p>
            <TechCardContainer>
              {list.tech_stack.map((tech, index) => (
                <TechCard>
                  <img src={tech} alt={tech.name} key={index} />
                </TechCard>
              ))}
            </TechCardContainer>
            <BtnGroup>
              {list.github_url.length > 0 && (
                <a
                  className="btn-github"
                  href={list.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} style={{ verticalAlign: 'middle' }} />
                </a>
              )}
              {list.demo_url.length > 0 && (
                <a
                  className="PrimaryBtn"
                  href={list.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
            </BtnGroup>
          </CardRight>
        </MotionCard>
      ))}
    </>
  );
}

export default ProjectCard;
