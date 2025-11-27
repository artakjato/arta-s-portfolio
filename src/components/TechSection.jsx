import styled from "styled-components";

const Section = styled.section`
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.36rem 1rem;
  max-width: 40rem;
`;

const TechItem = styled.li`
  font-size: 1rem;
  color: #111827;
`;

function TechSection () {
  return (
    <Section id="tech">
      <Heading>Tech</Heading>
      <TechList>
        <TechItem>HTML • CSS • Flexbox • Responsive Design • JavaScript (ES6)</TechItem>
        <TechItem>JSX • React • React Hooks • Web Accessibility</TechItem>
        <TechItem>Node.js • MongoDB • APIs</TechItem>
        <TechItem>GitHub • Pair Programming</TechItem>

      </TechList>
    </Section>
  );
}

export default TechSection; 