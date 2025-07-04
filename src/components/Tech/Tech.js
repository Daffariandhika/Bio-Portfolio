import {
  TechWrapper,
  Grid,
  IconWrapper,
  TechCard,
  TechName,
  techGridVariants,
  techCardVariants
} from "./TechElements";
import { stackList } from "../../data/ProjectData";
import { motion } from "framer-motion";

const MotionGrid = motion(Grid);
const MotionCard = motion(TechCard);

function Tech() {
  return (
    <TechWrapper id="tech">
      <div className="Container">
        <div className="SectionTitle">Tech Stack</div>
        <MotionGrid
          variants={techGridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          {stackList.map((tech, index) => (
            <MotionCard key={index} variants={techCardVariants}>
              <IconWrapper>
                <img src={tech.img} alt={tech.name} />
              </IconWrapper>
              <TechName>{tech.name}</TechName>
            </MotionCard>
          ))}
        </MotionGrid>
      </div>
    </TechWrapper>
  );
};

export default Tech;
