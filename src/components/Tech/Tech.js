import {
  TechWrapper,
  Grid,
  IconWrapper,
  TechCard,
  TechName,
} from "./TechElements";
import { stackList } from "../../data/ProjectData";

function Tech() {
  return (
    <TechWrapper id="tech">
      <div className="Container">
        <div className="SectionTitle">Tech Stack</div>
        <Grid>
          {stackList.map((tech, index) => (
            <TechCard key={index}>
              <IconWrapper>
                <img src={tech.img} alt={tech.name} />
              </IconWrapper>
              <TechName>{tech.name}</TechName>
            </TechCard>
          ))}
        </Grid>
      </div>
    </TechWrapper>
  );
};

export default Tech;
