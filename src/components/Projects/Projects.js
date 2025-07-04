import ProjectCard from "./ProjectCard/ProjectCard";
import { ProjectWrapper } from "./ProjectCard/ProjectCardElements";
function Projects() {
  return (
    <>
    <ProjectWrapper id="projects">
        <div className="Container">
          <div className="SectionTitle">Projects</div>
          <ProjectCard />
        </div>
        </ProjectWrapper>
    </>
  );
}

export default Projects;
