import styled from "styled-components";

const Section =styled.section`
  margin-top: 6rem;
`;

const Heading= styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem; 
  }
`;

const Grid = styled.div`
display: grid;
gap: 4rem;
grid-template-columns: repeat(4, minmax(0, 1fr));
align-items: flex-start;
justify-items: start;

@media (max-width: 900px) {
  grid-template-columns: 1fr;
  gap: 2.5rem;
  justify-items: center;
}
`;

const Group = styled.div`
  position: relative;
  padding: 0 2rem;

  @media (max-width: 900px) {
    padding: 0 0 1.5rem;
    text-align: center;
  }
  /*Orange bar divider*/
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 200px;
    background: #f97316;
    transform: translateX(-50% -50%);
  }

  &:first-child::before {
    display:none;
  }

  @media (max-width: 900px) {
  &::before {
    left: 50%;
    top: auto;
    bottom: 0;
    transform: translate(-50%);
    height: 3px;
    width: 150px;
  }

  &:first-child::before {
    display: block;
  }

  &:last-child::before {
    display:none;
  }
}
`;

const GroupTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.75rem;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const Item = styled.li`
  font-size: 0.95rem;
  line-height: 1.5;
`;

function SkillsSection() {
  return (
    <Section aria-labelledby="skills">
      <Heading id="skills">Skills</Heading>

      <Grid>
        <Group>
        <GroupTitle>Code</GroupTitle>
        <List>
          <Item>HTML5</Item>
          <Item>CSS</Item>
          <Item>JavaScript</Item>
          <Item>TypeScript</Item>
          <Item>React</Item>
          <Item>Styled Components</Item>
        </List>
       </Group>

        <Group>
        <GroupTitle>Toolbox</GroupTitle>
        <List>
          <Item>VS Code</Item>
          <Item>GitHub</Item>
          <Item>Netlify</Item>
          <Item>Figma</Item>
        </List>
        </Group>

        <Group>
        <GroupTitle>Upcoming</GroupTitle>
        <List>
          <Item>Node.js</Item>
        </List>
        </Group>

        <Group>
        <GroupTitle>More</GroupTitle>
        <List>
          <Item>Process clarity</Item>
          <Item>Accessibility mindset</Item>
          <Item>Concept development</Item>
          <Item>Agile ways of working</Item>
          <Item>Stakeholder alignment</Item>
        </List>
       </Group>
       </Grid>
    </Section>
  );
}

export default SkillsSection; 
