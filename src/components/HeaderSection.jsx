import styled from "styled-components";
import profile from "../assets/profile.jpg";
import linkedinIcon from "../assets/linkedin.svg";
import githubIcon from "../assets/github.svg";


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

const IconRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1.5rem;
`;

const IconLink = styled.a`
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #f97316; /* same orange as ring */
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ea580c; /* darker orange hover */
  }
`;

const Icon = styled.img`
  width: 22px;
  height: 22px;
  filter: brightness(0) invert(1); /* makes icon white */
`;

function HeaderSection() {
  return (
    <Section>
      <div>
        <Title>Frontend Developer</Title>
        <Intro>
          Hi! I’m Arta — junior frontend developer with a background in recruitment
          and HR. My focus is on React, JS, UI development, responsive design, and accessible interfaces. I am experienced with real projects, teamwork, and modern tooling.
        </Intro>

    <IconRow>
    <IconLink
        href="https://www.linkedin.com/in/artakjato"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        >
         <Icon src={linkedinIcon} alt="" />
         </IconLink>

        <IconLink
        href="https://github.com/artakjato"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        >
        <Icon src={githubIcon} alt="" />
    </IconLink>
    </IconRow>

      </div>

      <ImageWrapper>
        <Avatar src={profile} alt="Portrait of Arta Kjato" />
      </ImageWrapper>
    </Section>
  );
}

export default HeaderSection;
