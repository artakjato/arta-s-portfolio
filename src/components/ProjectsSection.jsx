import styled from "styled-components"; 
import ProjectCard from "./ProjectCard";

import project1 from "../assets/project-1-framed.png";
import project2 from "../assets/project-2-framed.png";
import project3 from "../assets/project-3-framed.png";





function ProjectSection() {
  return (
    <Section id="projects">
      <Title>Featured Projects</Title>

      <Grid>
        <ProjectCard
          image={project1}
          

      </Grid>
    </Section>
  );
}
