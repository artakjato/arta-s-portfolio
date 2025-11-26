import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: 100vh;
  padding: 3rem 0;
`;

const Content = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;

  @media (min-width: 768px) {
    padding: 3rem;
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
      </Content>
    </Page>
    </>
  );
}

export default App;
