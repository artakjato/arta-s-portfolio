import styled from "styled-components";
import profile from "../assets/profile.jpg";

const Section = styled.section`
  margin-top: 6rem;
  padding-top: 4rem;
  border-top: 1px solid #e5e7eb;

  display: flex;
  flex-direction:column;
  gap: 2rem;
  align-items: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TextBlock = styled.div`
  max-width: 28rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Intro = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #4b5563;
`;

const ContactList = styled.dl`
  margin-top: 1.5rem;
  display: grid;
  gap: 0.75rem;
`;

const Label = styled.dt`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #6b7280;
`;

const Value = styled.dd`
  margin: 0;
  font-size: 0.95rem;
`;

const ContactLink = styled.a`
  color: #f97316;
  text-decoration: none;

  &:hover {
    color: #ea580c;
    text-decoration: underline;
  }
`;

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AvatarRing = styled.div`
  border: 6px solid #f97316;
  border-radius: 50%;
  padding: 4px;
`;

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
`;

function ContactSection() {
  return (
    <Section id="contact">
      <TextBlock>
        <Heading>Let's talk</Heading>
        <Intro>
          If you are looking for a frontend developer who understands both people and products, I'd love to connect.
          Reach out and let's talk about projects, collaboration, or opportunities.
        </Intro>

        <ContactList>
          <div>
            <Label>Name</Label>
            <Value>Arta Kjato</Value>
          </div>

          <div>
            <Label>Email</Label>
            <Value>
              <ContactLink href="mailto:artakjato@gmail.com">artakjato@gmail.com</ContactLink>
            </Value>
          </div>

          <div>
            <label>Phone</label>
            <Value>
              <ContactLink href="tel:+467345822768">+46 (0) 73 458 27 68</ContactLink>
            </Value>
          </div>
        </ContactList>
      </TextBlock>

      <AvatarWrapper>
        <AvatarRing>
          <Avatar src={profile} alt="Portrait of Arta Kjato" />
        </AvatarRing>
      </AvatarWrapper>
    </Section>
  );
}

export default ContactSection; 
