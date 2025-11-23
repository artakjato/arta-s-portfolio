import styled from "styled-components";
import profile from "../assets/profile.jpg";

const Section = styled.section`
  display: grid;
  gap: 2rem;
  margin-bottom: 4rem;

  /* Mobile: one column */
  grid-template-columns: 1fr;

  /* Desktop: two columns */
  @media (min-width: 900px) {
    grid-template-columns: 1.2fr 0.8fr;
    align-items: center;
  }
`;

const Badge = styled.span`
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: #e2e8f0;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #475569;
`;

const Title = styled.h1`
  font-size: 2.4rem;
  margin: 0.5rem 0 1rem;
`;

const Intro = styled.p`
  max-width: 34rem;
  line-height: 1.6;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  border: 8px solid #f97316; /* orange ring */
  border-radius: 50%;
  padding: 6px; /* space between the ring and the image */
  width: fit-content;
  height: fit-content;
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

function HeaderSection() {
  return (
    <Section>
      <div>
        <Badge>Section 1</Badge>
        <Title>Frontend Developer</Title>
        <Intro>
          Hi! I’m Arta — junior frontend developer with a background in recruitment
          and HR. My focus is on React, JS, UI development, responsive design, and accessible interfaces. I am experienced with real projects, teamwork, and modern tooling.
        </Intro>
      </div>

      <ImageWrapper>
        <Avatar src={profile} alt="Portrait of Arta Kjato" />
      </ImageWrapper>
    </Section>
  );
}

export default HeaderSection;
