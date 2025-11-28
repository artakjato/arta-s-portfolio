import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import TechSection from "./components/TechSection";
import JourneySection from "./components/JourneySection";
import ContactSection from "./components/ContactSection";

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: 100vh;
`;

const Content = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 2.5rem 1.5rem 3rem;

  @media (min-width: 768px) {
    padding: 3rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1.25rem 2.5rem;
  }
`;

function App() {
  return (
    <>
    <GlobalStyles />
    <Page>
      <Content>
        <HeaderSection />
        <SkillsSection />
        <ProjectsSection />
        <TechSection />
        <JourneySection />
        <ContactSection />
      </Content>
    </Page>
    </>
  );
}

export default App;
