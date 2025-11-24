import styled from "styled-components";
import HeaderSection from "./components/HeaderSection";
import SkillsSection from "./components/SkillsSection";

const Page = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
  min-height: 100vh;
  padding-top: 3rem;
  padding-bottom: 3rem;
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
    <Page>
      <Content>
        <HeaderSection />
        <SkillsSection />
      </Content>
    </Page>
  );
}

export default App;
