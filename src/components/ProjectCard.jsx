import styled from "styled-components"; 

const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  border: 3px solid transparent;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease,
    box-shadow 0.3s ease;

  &:hover {
    border-color: #f97316;
    transform: translateY(-6px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.12);
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
  display: block;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0 0 1rem;
  color: #4b5563;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: auto;
`;

const PrimaryButton = styled.a`
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  text-align: center;
  text-decoration: none;
  border: 2px solid #f97316;
  background: #f97316;
  color: #ffffff;
  transition: 0.2s;

  &:hover {
    background: #ea580c;
    border-color: #ea580c;
  }
`;

const SecondaryButton = styled.a`
  flex: 1;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  text-align: center;
  text-decoration: none;
  border: 2px solid #f97316;
  background: #ffffff;
  color: #f97316;
  transition: 0.2s;

  &:hover {
    background: #ea580c;
    color: #ffffff;
    border-color: #ea580c;
  }
`;

function ProjectCard({ image, title, description, demo, code }) {
  return (
    <Card>
      <Image src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>

      <ButtonRow>
        <PrimaryButton href={demo} target="_blank" rel="noopener noreferrer" filled>
          Live demo
        </PrimaryButton>
        <SecondaryButton href={code} target="_blank" rel="noopener noreferrer">
          View code
        </SecondaryButton>
      </ButtonRow>
    </Card>
  );
}

export default ProjectCard; 