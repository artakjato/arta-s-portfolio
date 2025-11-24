import styled from "styled-components";

const Section =styled.section`
  margin-bottom: 4rem 0;
`;

const Title= styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem; 
`;

const SkillsGrid = styled.div`
display: grid;
gap: 3rem; 

@media (min-width: 900px) {
  grid-template-columns: repeat(4, 1fr);
}
`;

const Column = styled.div`
position: relative;
padding-right: 1.5rem;

&::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  background-color: #f97316;
  border-radius: 999px;
}

&:last-child::after {
  display:none;
}
`;

const ColumnTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  font-weight: 600; 
`;

const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;
`; 

const Item = styled.li`
margin-bottom: 0.4rem;
`;

export default function SkillsSection() {
  return (
    <Section aria-labelledby="skills-heading">
      <Title id="skills-heading">Skills</Title>

      <SkillsGrid>
        <Column>
        <ColumnTitle>Code</ColumnTitle>
        <List>
          <Item>HTML5</Item>
          <Item>CSS</Item>
          <Item>JavaScript</Item>
          <Item>TypeScript</Item>
          <Item>React</Item>
          <Item>Styled Components</Item>
        </List>
       </Column>

        <Column>
        <ColumnTitle>Toolbox</ColumnTitle>
        <List>
          <Item>VS Code</Item>
          <Item>GitHub</Item>
          <Item>Netlify</Item>
          <Item>Figma</Item>
        </List>
        </Column>

        <Column>
        <ColumnTitle>Upcoming</ColumnTitle>
        <List>
          <Item>Node.js</Item>
        </List>
        </Column>

        <Column>
        <ColumnTitle>More</ColumnTitle>
        <List>
          <Item>Process clarity</Item>
          <Item>Accessibility mindset</Item>
          <Item>Concept development</Item>
          <Item>Agile ways of working</Item>
          <Item>Stakeholder alignment</Item>
        </List>
       </Column>
       </SkillsGrid>
    </Section>
  );
}

