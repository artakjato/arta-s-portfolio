import styled from "styled-components";

function TechSection () {
  return (
    <Section id="tech">
      <Heading>Tech</Heading>
      <Text>
        HTML • CSS • Flexbox • Responsive Design • JavaScript (ES6)
        JSX • React • React Hooks • Web Accessibility
        Node.js • MongoDB • APIs
        GitHub • Pair Programming
      </Text>
      <TechList>
        <TechItem>HTML</TechItem>
        <TechItem>CSS</TechItem>
        <TechItem>Flexbox</TechItem>
        <TechItem>Responsive Design</TechItem>
        <TechItem>JavaScript (ES6)</TechItem>
        <TechItem>JSX</TechItem>
        <TechItem>React</TechItem>
        <TechItem>React Hooks</TechItem>
        <TechItem>Web Accessibility</TechItem>
        <TechItem>Node.js</TechItem>
        <TechItem>MongoDB</TechItem>
        <TechItem>APIs</TechItem>
        <TechItem>GitHub</TechItem>
        <TechItem>Pair Programming</TechItem>

      </TechList>
    </Section>
  );
}