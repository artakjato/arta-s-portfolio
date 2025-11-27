import styled from "styled-components";

const Card = styled.article`
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.03);
  display:flex;
  flex-direction: column;
  gap: 0.75rem;
  transition:
    transform 0.25s ease;
    box-shadow: 0.25s ease;
    border-color: 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: #f97316;
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
  }
;`

const Title = styled.h3`
  font-size: 1.1rem;
`;

const Text = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #4b5563;
`;

const ReadMore = styled.a`
  margin-top: 0.5rem;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  color: #f97316;

  &:hover {
   color: #ea580c;
   text-decoration: underline;
  }
`; 

function JourneyCard({ title, text, link }) {
return (
    <Card>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <ReadMore href={link} target="_blank" rel="noopener noreferrer">
          Read article
      </ReadMore>
    </Card>
  ); 
}

export default JourneyCard; 