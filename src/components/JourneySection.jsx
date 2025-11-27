import styled from "styled-components";
import JourneyCard from "./JourneyCard";

const Section = styled.section``;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 900px) {
    grid-template-columns: repeat()(3, 1fr);
  }
`;

function JourneySection() {
  return (
    <Section id="journey">
      <Heading>My Journey</Heading>

      <Grid>
        <JourneyCard
          tag="Journey Card 1"
          title="Starting my coding journey"
          text="After several years in HR, I joined the Technigo Web Development Boot Camp to understand how the tools I once used were built. This was the start of learning how interfaces work, how systems connect, and how to structure real code from the ground up."
          link="https://www.linkedin.com/posts/arta-kjato_careertransition-webdevelopment-bootcamp-activity-7373596558090551296-UQYx/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs4FhQBaR6mfNcjYAMV8Ox65MCrZVjsTIA"
          />

        <JourneyCard
          tag="Journey Card 2"
          title="Seeing the web with fresh eyes"
          text="My early weeks of coding were full of small wins and surprises. Instead of comparing myself to others, I focused on learning the logic behind each line of JavaScript and understanding how the browser responds. Every working piece of code pushed me forward."
          link="https://www.linkedin.com/posts/arta-kjato_careertransition-webdevelopment-learning-activity-7374759204252893184-5Mrs/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs4FhQBaR6mfNcjYAMV8Ox65MCrZVjsTIA"
          />

        <JourneyCard
          tag="Journey Card 3"
          title="My first debugging win"
          text="I hit countless “why doesn’t this work?” moments before I reached the first real “it works!” success. That moment taught me how to isolate problems, test one idea at a time, and stay patient through trial and error. It made debugging feel less intimidating and more like problem solving."
          link="https://www.linkedin.com/posts/arta-kjato_careertransition-webdevelopment-learning-activity-7376491850020352000-zDC8/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs4FhQBaR6mfNcjYAMV8Ox65MCrZVjsTIA"
          />

        <JourneyCard
          tag="Journey Card 4"
          title="Seeing tools from the developer side"
          text="Coming from HR, I was used to being the end user of ATS and onboarding systems. Coding gave me a new perspective on how these tools are actually built. Learning HTML, CSS, and JavaScript helped me understand how structure, logic, and user experience come together behind the scenes."
          link="https://www.linkedin.com/posts/arta-kjato_from-clicking-through-hr-systems-to-learning-activity-7376869341276844032-tv05/?utm_source=share&utm_medium=member_desktop&rcm=ACoAABs4FhQBaR6mfNcjYAMV8Ox65MCrZVjsTIA"
          />
      </Grid>
    </Section>
  );
}

export default JourneySection; 