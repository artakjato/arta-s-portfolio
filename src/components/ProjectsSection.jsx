import styled from "styled-components"; 
import ProjectCard from "./ProjectCard";

import project1 from "../assets/project-1-framed.png";
import project2 from "../assets/project-2-framed.png";
import project3 from "../assets/project-3-framed.png";

const Section = styled.section`
margin-top: 6rem;
`;

const Title = styled.h2`
text-align: center;
font-size: 2.4rem;
margin-bottom: 3rem;
`;

const Grid = styled.div`
display: grid;
gap: 2rem;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
`;

function ProjectSection() {
  return (
    <Section id="projects">
      <Title>Featured Projects</Title>

      <Grid>
        <ProjectCard
          image={project1}
          title="A flexible recipe app"
          description= "A responsive business website using Grid and Flexbox, complete with navigation, hero layout, and structured content sections. Focused on clean markup, scalable styling, and consistent UI across all devices."
          demo="https://js-project-business-site-fikamatch.netlify.app/"
          code="https://github.com/artakjato/js-project-business-site"
          />
      
        <ProjectCard
        image={project2}
        title="JavaScript Recipe Library"
        description="An interactive recipe library that fetches live data from Spoonacular’s API and renders dynamic recipe cards. Implemented category filters, sorting options, random recipe selection, and responsive UI updates through clean DOM manipulation. Focused on modular functions, clear data handling, and consistent performance from mobile to desktop."
        demo="https://project-recipe3.netlify.app/"
        code="https://github.com/artakjato/js-project-recipe-library"
        />

        <ProjectCard
        image={project3}
        title="Weather app with API integration"
        description="A responsive weather dashboard in TypeScript that fetches live data and displays current conditions plus a 4-day forecast. Implemented clean data handling, structured UI updates, and a design-driven layout that adapts across all screen sizes. Focused on predictable state, clear TypeScript types, and a smooth rendering flow from API response to on-screen components."
        demo="https://apiweatherteam.netlify.app/"
        code="https://github.com/artakjato/js-project-weather-app"
        />
      </Grid>
    </Section>
  );
}

export default ProjectSection; 